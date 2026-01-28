import {
  CalendarDateTime,
  ZonedDateTime,
  getLocalTimeZone,
  toCalendarDateTime,
  today
} from '@internationalized/date';
import { ChevronDownIcon } from '@sparrowengg/twigs-react-icons';
import React, {
  ReactNode,
  useEffect, useMemo, useRef, useState
} from 'react';
import { DateValue } from 'react-aria';
import { Button } from '../button';
import { Flex } from '../flex';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { CalendarProps } from './calendar';
import { FieldButton } from './calendar-commons';
import { CalendarSize } from './calendar-utils';

interface TimeValueState {
  hour: string;
  minute: string;
  pm: boolean;
}

export type CalendarTimePickerProps = {
  value?: DateValue | null,
  onChange?: CalendarProps['onChange'],
  size?: CalendarSize,
  renderCustomTrigger?: (props: { timeValue: TimeValueState }) => ReactNode;
  className?: string;
  /**
   * When true, displays 24-hour military time format. When false, displays 12-hour format with AM/PM.
   * @default false
   */
  isMilitaryTime?: boolean;
};

export const CalendarTimePicker = ({
  value,
  onChange,
  size,
  renderCustomTrigger,
  className,
  isMilitaryTime = false
}: CalendarTimePickerProps) => {
  const [localDateValue, setLocalDateValue] = useState<DateValue>(today(getLocalTimeZone()));

  const dateValue = value ?? localDateValue;

  const [popoverOpen, setPopoverOpen] = useState(false);

  const timeState = useMemo(() => {
    if (!dateValue) {
      const calendarDate = today(getLocalTimeZone());
      const timeObj = toCalendarDateTime(calendarDate);
      return timeObj;
    }
    if (dateValue instanceof CalendarDateTime || dateValue instanceof ZonedDateTime) {
      return dateValue;
    }

    return toCalendarDateTime(dateValue);
  }, [dateValue]);

  const hoursInTwelveHourFormat = timeState.hour % 12 || 12;
  const initialHours = isMilitaryTime
    ? timeState.hour.toString().padStart(2, '0')
    : hoursInTwelveHourFormat.toString().padStart(2, '0');
  const initialMinutes = timeState.minute.toString().padStart(2, '0');

  const [timeValue, setTimeValue] = useState<TimeValueState>({
    hour: initialHours,
    minute: initialMinutes,
    pm: timeState.hour >= 12
  });

  const columnsContainerRef = useRef<HTMLDivElement>(null);

  const updateTimeValue = (values: Partial<TimeValueState>) => {
    setTimeValue((prev) => ({
      ...prev,
      ...values
    }));
  };

  const handleArrowKeys = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const currentActiveButton = columnsContainerRef.current?.querySelector(
      '[data-is-active="true"]'
    ) as HTMLButtonElement | null;
    const parentColumn = currentActiveButton?.closest('[data-time-column]');

    const toggleActiveButton = (button: HTMLButtonElement) => {
      if (currentActiveButton) {
        currentActiveButton.setAttribute('tabindex', '-1');
        currentActiveButton.setAttribute('data-is-active', 'false');
      }
      button.setAttribute('tabindex', '0');
      button.setAttribute('data-is-active', 'true');
    };

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const nextButton = e.currentTarget
          .nextElementSibling as HTMLButtonElement | null;

        if (nextButton) {
          toggleActiveButton(nextButton);
          nextButton.focus();
        }
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const prevButton = e.currentTarget
          .previousElementSibling as HTMLButtonElement | null;

        if (prevButton) {
          toggleActiveButton(prevButton);
          prevButton.focus();
        }
        break;
      }
      case 'ArrowLeft': {
        e.preventDefault();
        if (parentColumn?.previousElementSibling) {
          const prevColumn = parentColumn.previousElementSibling.querySelector(
            '[data-is-selected="true"]'
          ) as HTMLButtonElement | null;

          if (prevColumn) {
            toggleActiveButton(prevColumn);
            prevColumn.focus();
          }
        }
        break;
      }
      case 'ArrowRight': {
        e.preventDefault();
        if (parentColumn?.nextElementSibling) {
          const nextColumn = parentColumn.nextElementSibling.querySelector(
            '[data-is-selected="true"]'
          ) as HTMLButtonElement | null;

          if (nextColumn) {
            toggleActiveButton(nextColumn);
            nextColumn.focus();
          }
        }
        break;
      }
      default:
        break;
    }
  };

  const handleApply = () => {
    let hour: number;
    if (isMilitaryTime) {
      hour = parseInt(timeValue.hour, 10);
    } else {
      hour = timeValue.pm
        ? 12 + (parseInt(timeValue.hour, 10) % 12)
        : parseInt(timeValue.hour, 10) % 12;
    }

    const updatedTime = timeState.set({
      hour,
      minute: parseInt(timeValue.minute, 10)
    });
    if (onChange) {
      setLocalDateValue(updatedTime);
      onChange(updatedTime);
    }
    setPopoverOpen(false);
  };

  return (
    <Popover open={popoverOpen} onOpenChange={(open) => setPopoverOpen(open)}>
      <PopoverTrigger asChild>
        {renderCustomTrigger ? renderCustomTrigger({ timeValue }) : (
          <Button
            color="default"
            size={size === 'lg' ? 'md' : 'sm'}
            rightIcon={<ChevronDownIcon />}
            className={className}
          >
            {initialHours}
            :
            {initialMinutes}
            {!isMilitaryTime && (
              <>
                {' '}
                {timeState.hour >= 12 ? 'PM' : 'AM'}
              </>
            )}
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent
        css={{
          width: '200px',
          padding: 0,
          border: '1px solid $neutral300',
          borderRadius: '$xl'
        }}
      >
        <Flex
          css={{
            padding: '$4 0'
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            weight="medium"
            css={{
              lineHeight: '$sm',
              color: '$neutral600'
            }}
          >
            {timeValue.hour}
            :
            {timeValue.minute}
            {!isMilitaryTime && (
              <>
                {' '}
                {timeValue.pm ? 'PM' : 'AM'}
              </>
            )}
          </Text>
        </Flex>
        <Flex
          css={{
            height: '200px',
            padding: '$4 0',
            borderBottom: '1px solid $neutral100',
            borderTop: '1px solid $neutral100'
          }}
          ref={columnsContainerRef}
        >
          <ListHours
            handleArrowKeys={handleArrowKeys}
            timeValue={timeValue}
            updateTimeValue={updateTimeValue}
            isMilitaryTime={isMilitaryTime}
          />
          <ListMinutes
            handleArrowKeys={handleArrowKeys}
            timeValue={timeValue}
            updateTimeValue={updateTimeValue}
            hasBorderRight={!isMilitaryTime}
          />
          {!isMilitaryTime && (
            <ListAmPm
              handleArrowKeys={handleArrowKeys}
              timeValue={timeValue}
              updateTimeValue={updateTimeValue}
            />
          )}
        </Flex>
        <Flex
          css={{
            padding: '$4 $8'
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            color="primary"
            variant="ghost"
            size="md"
            css={{
              width: '100%'
            }}
            onClick={handleApply}
          >
            Apply
          </Button>
        </Flex>
      </PopoverContent>
    </Popover>
  );
};

interface BaseListingColumnProps {
  timeValue: TimeValueState;
  updateTimeValue: (values: Partial<TimeValueState>) => void;
  handleArrowKeys: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}

interface ListHoursProps extends BaseListingColumnProps {
  isMilitaryTime?: boolean;
}

interface ListMinutesProps extends BaseListingColumnProps {
  hasBorderRight?: boolean;
}

const ListHours = ({
  timeValue,
  updateTimeValue,
  handleArrowKeys,
  isMilitaryTime = false
}: ListHoursProps) => {
  const columnRef = useRef<HTMLDivElement>(null);

  const hours = isMilitaryTime
    ? Array.from({ length: 24 }).map((_, index) => `${index}`.padStart(2, '0'))
    : Array.from({ length: 12 }).map((_, index) => `${index + 1}`.padStart(2, '0'));

  useEffect(() => {
    const selectedHourButton = columnRef.current?.querySelector(
      '[data-is-selected="true"]'
    ) as HTMLButtonElement | null;

    if (selectedHourButton) {
      /**
       * Request animation frame used so that hour is focused after minutes is focused.
       * The focus will scroll the container to the selected hour / minutes.
       */
      requestAnimationFrame(() => {
        selectedHourButton.focus();
      });
    }
  }, []);

  return (
    <Column gap="0" hasBorderRight ref={columnRef} data-time-column>
      {hours.map((hour) => {
        return (
          <FieldButton
            key={hour}
            color={hour === timeValue.hour ? 'selected' : 'default'}
            tabIndex={hour === timeValue.hour ? 0 : -1}
            data-is-selected={hour === timeValue.hour}
            data-is-active={hour === timeValue.hour}
            onClick={() => {
              updateTimeValue({
                hour
              });
            }}
            onKeyDown={(e) => {
              handleArrowKeys(e);
            }}
          >
            {hour}
          </FieldButton>
        );
      })}
    </Column>
  );
};

const ListMinutes = ({
  handleArrowKeys,
  timeValue,
  updateTimeValue,
  hasBorderRight = true
}: ListMinutesProps) => {
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectedMinuteButton = columnRef.current?.querySelector(
      '[data-is-selected="true"]'
    ) as HTMLButtonElement | null;

    if (selectedMinuteButton) {
      selectedMinuteButton.focus();
    }
  }, []);

  return (
    <Column gap="0" hasBorderRight={hasBorderRight} ref={columnRef} data-time-column>
      {Array.from({ length: 60 }).map((_, index) => {
        const minute = `${index}`.padStart(2, '0');

        return (
          <FieldButton
            key={minute}
            color={timeValue.minute === minute ? 'selected' : 'default'}
            tabIndex={minute === timeValue.minute ? 0 : -1}
            data-is-active={minute === timeValue.minute}
            data-is-selected={minute === timeValue.minute}
            onClick={() => {
              updateTimeValue({
                minute
              });
            }}
            onKeyDown={(e) => {
              handleArrowKeys(e);
            }}
          >
            {minute}
          </FieldButton>
        );
      })}
    </Column>
  );
};

const ListAmPm = ({
  handleArrowKeys,
  timeValue,
  updateTimeValue
}: BaseListingColumnProps) => {
  return (
    <Column gap="0" data-time-column>
      <FieldButton
        color={!timeValue.pm ? 'selected' : 'default'}
        tabIndex={!timeValue.hour ? 0 : -1}
        data-is-active={!timeValue.pm}
        data-is-selected={!timeValue.pm}
        onClick={() => {
          updateTimeValue({
            pm: false
          });
        }}
        onKeyDown={(e) => handleArrowKeys(e)}
      >
        AM
      </FieldButton>
      <FieldButton
        color={timeValue.pm ? 'selected' : 'default'}
        tabIndex={timeValue.hour ? 0 : -1}
        data-is-active={timeValue.pm}
        data-is-selected={timeValue.pm}
        onKeyDown={(e) => handleArrowKeys(e)}
        onClick={() => {
          updateTimeValue({
            pm: true
          });
        }}
      >
        PM
      </FieldButton>
    </Column>
  );
};

const Column = styled(Flex, {
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  overflow: 'auto',
  scrollbarWidth: 'thin',
  variants: {
    hasBorderRight: {
      true: {
        borderRight: '1px solid',
        borderColorOpacity: ['$secondary500', 0.08]
      },
      false: {}
    }
  },
  defaultVariants: {
    hasBorderRight: false
  }
});
