import {
  ZonedDateTime, toZoned, today, getLocalTimeZone
} from '@internationalized/date';
import { ChevronDownIcon, SearchIcon } from '@sparrowengg/twigs-react-icons';
import { getCountriesForTimezone } from 'countries-and-timezones';
import {
  KeyboardEvent, ReactNode, useId, useMemo, useRef, useState
} from 'react';
import { DateValue } from 'react-aria';
import { Box } from '../box';
import { Button } from '../button';
import { Flex } from '../flex';
import { Input } from '../input';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { CalendarProps } from './calendar';
import { FieldButton } from './calendar-commons';

export type CalendarTimezonePickerSize = 'sm' | 'md';

type TimeZoneObject = {
  timeZone: string;
  offset: string;
  label: string;
  countries: Array<{ name: string }>;
  countryNames: string[];
};

export const CalendarTimezonePicker = ({
  value,
  onChange,
  size,
  renderCustomTrigger
}: {
  value?: DateValue | null;
  onChange?: CalendarProps['onChange'];
  size?: CalendarTimezonePickerSize;
  renderCustomTrigger?: (props: { timeZoneObject: TimeZoneObject }) => ReactNode;
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [selectedTimezoneValue, setSelectedTimezoneValue] = useState<string>(
    (value as ZonedDateTime | null)?.timeZone
      || Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const listRef = useRef<HTMLUListElement>(null);
  const buttonId = useId();

  const timeZoneState = useMemo(() => {
    if (!value) {
      const timeObj = toZoned(today(getLocalTimeZone()), selectedTimezoneValue);
      return timeObj;
    }
    if (value instanceof ZonedDateTime) {
      return value;
    }

    return toZoned(value, selectedTimezoneValue);
  }, [value]);

  const timeZoneList = useMemo(() => {
    try {
      const supportedTimezones = Intl.supportedValuesOf('timeZone');
      const timeZones = supportedTimezones.map((timeZone) => {
        const dateText = Intl.DateTimeFormat([], {
          timeZone,
          timeZoneName: 'longOffset'
        }).format(new Date());

        const countries = getCountriesForTimezone(timeZone);
        const offset = dateText.split(', ').at(-1)!;

        return {
          timeZone,
          offset,
          label: `(${offset}) ${timeZone}`,
          countries,
          countryNames: countries.map((country) => country.name)
        } satisfies TimeZoneObject;
      });
      return timeZones;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return [];
    }
  }, []);

  const searchResults = useMemo(() => {
    return timeZoneList.filter((timeZone) => {
      return (
        timeZone.label.toLowerCase().includes(searchString.toLowerCase())
        || timeZone.countryNames
          .join(', ')
          .toLowerCase()
          .includes(searchString.toLowerCase())
      );
    });
  }, [searchString]);

  const selectedTimezoneObject = useMemo(() => {
    return timeZoneList.find(
      (timeZone) => timeZone.timeZone === selectedTimezoneValue
    );
  }, [selectedTimezoneValue, timeZoneList]);

  const handleSearchInputKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const firstElement = listRef.current?.querySelector(
        'button[role="menuitem"]'
      ) as HTMLButtonElement | null;
      if (firstElement) {
        firstElement.setAttribute('tabindex', '0');
        firstElement.focus();
      }
    }
  };

  const handleSearchListKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      const nextListItem = e.currentTarget.parentElement
        ?.nextElementSibling as HTMLButtonElement;
      if (nextListItem) {
        e.preventDefault();
        const nextButton = nextListItem.querySelector(
          'button[role="menuitem"]'
        ) as HTMLButtonElement;

        e.currentTarget.setAttribute('tabindex', '-1');
        nextButton.setAttribute('tabindex', '0');
        nextButton.focus();
      }
    } else if (e.key === 'ArrowUp') {
      const prevListItem = e.currentTarget.parentElement
        ?.previousElementSibling as HTMLButtonElement;
      if (prevListItem) {
        e.preventDefault();

        const prevButton = prevListItem.querySelector(
          'button[role="menuitem"]'
        ) as HTMLButtonElement;

        e.currentTarget.setAttribute('tabindex', '-1');
        prevButton.setAttribute('tabindex', '0');
        prevButton.focus();
      }
    }
  };

  return (
    <Popover
      open={popoverOpen}
      onOpenChange={(nextOpenValue) => setPopoverOpen(nextOpenValue)}
    >
      <PopoverTrigger asChild>
        {renderCustomTrigger ? renderCustomTrigger({ timeZoneObject: selectedTimezoneObject as TimeZoneObject }) : (
          <Button
            color="default"
            size={size}
            rightIcon={<ChevronDownIcon />}
            id={buttonId}
          >
            {selectedTimezoneObject?.offset}
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent
        css={{
          width: '405px',
          padding: 0,
          border: '1px solid $neutral300'
        }}
      >
        <Box
          css={{
            padding: '$4'
          }}
        >
          <Input
            leftIcon={<SearchIcon />}
            size="lg"
            variant="filled"
            placeholder="Search a country..."
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
            onKeyDown={handleSearchInputKeyDown}
          />
        </Box>
        {selectedTimezoneObject && (
          <Flex
            flexDirection="column"
            gap="$2"
            css={{
              padding: '$3 $6',
              backgroundColor: '$primary100',
              marginBottom: '$4'
            }}
          >
            <Text
              css={{
                lineHeight: '$sm'
              }}
            >
              {selectedTimezoneObject.label}
            </Text>
            <Text
              size="xs"
              css={{
                color: '$neutral700',
                lineHeight: '$xxs'
              }}
            >
              Current Time Zone
            </Text>
          </Flex>
        )}
        <StyledList role="menu" aria-labelledby={buttonId} ref={listRef}>
          {searchResults.map((timeZone) => (
            <li key={timeZone.label}>
              <FieldButton
                type="button"
                role="menuitem"
                color="default"
                tabIndex={-1}
                css={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '$3 $6',
                  cursor: 'pointer'
                }}
                onKeyDown={handleSearchListKeyDown}
                onClick={() => {
                  setSelectedTimezoneValue(timeZone.timeZone);
                  setPopoverOpen(false);
                  const updatedZonedTime = new ZonedDateTime(
                    timeZoneState.year,
                    timeZoneState.month,
                    timeZoneState.day,
                    timeZone.timeZone,
                    0,
                    timeZoneState.hour,
                    timeZoneState.minute,
                    timeZoneState.second,
                    timeZoneState.millisecond
                  );
                  if (onChange) {
                    onChange(updatedZonedTime);
                  }
                }}
              >
                {timeZone.label}
              </FieldButton>
            </li>
          ))}
        </StyledList>
      </PopoverContent>
    </Popover>
  );
};

const StyledList = styled('ul', {
  maxHeight: '305px',
  overflow: 'auto',
  padding: '$4 0',
  borderTop: 'var(--twigs-borderWidths-xs) solid $neutral100'
});
