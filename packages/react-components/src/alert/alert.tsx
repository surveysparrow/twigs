import React, { ComponentProps, FunctionComponent } from 'react';
import {
  AlertIcon, CloseIcon, InfoIcon, TickCircleIcon, WarningIcon
} from '@sparrowengg/twigs-react-icons';
import { styled } from '../../stitches.config';
import { Box } from '../box';
import { IconButton } from '../button';

const STATUSES = {
  info: { name: 'info', icon: InfoIcon },
  warning: { name: 'warning', icon: WarningIcon },
  success: { name: 'success', icon: TickCircleIcon },
  error: { name: 'error', icon: AlertIcon }
};

const StyledCloseButton = styled(IconButton, {
  marginLeft: 'auto'
});

const StyledAlertDescription = styled(Box, {});
const StyledAlertIcon = styled('span', {
  display: 'flex'
});

const StyledAlert = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  padding: '$4',
  width: '100%',
  borderWidth: '$xs',
  borderStyle: 'solid',
  borderRadius: '$lg',
  [`${StyledAlertDescription}`]: {
    flex: 1,
    minWidth: 0
  },
  variants: {
    size: {
      sm: {
        padding: '$3 $5',
        [`${StyledAlertIcon}`]: {
          marginInlineEnd: '$2'
        },
        [`${StyledAlertDescription}`]: {
          fontSize: '$sm'
        },
        [`${IconButton}`]: {
          height: '$5',
          width: '$5',
          marginInlineStart: '$2'
        }
      },
      md: {
        padding: '$4',
        [`${StyledAlertIcon}`]: {
          marginInlineEnd: '$4'
        },
        [`${StyledAlertDescription}`]: {
          fontSize: '$md'
        },
        [`${IconButton}`]: {
          height: '$6',
          width: '$6',
          marginInlineStart: '$1'
        }
      }
    },
    status: {
      [STATUSES.success.name]: {
        backgroundColor: '$positive50',
        borderColor: '$positive100',
        [`${StyledAlertIcon} svg`]: {
          color: '$positive500'
        }
      },
      [STATUSES.info.name]: {
        backgroundColor: '$system100',
        borderColor: '$system200',
        [`${StyledAlertIcon} svg`]: {
          color: '$system500'
        }
      },
      [STATUSES.error.name]: {
        backgroundColor: '$negative100',
        borderColor: '$negative200',
        [`${StyledAlertIcon} svg`]: {
          color: '$negative500'
        }
      },
      [STATUSES.warning.name]: {
        backgroundColor: '$attention100',
        borderColor: '$attention200',
        [`${StyledAlertIcon} svg`]: {
          color: '$attention500'
        }
      }
    }
  },
  defaultVariants: {
    size: 'sm',
    status: STATUSES.info.name
  }
});

export type AlertProps = {
  children: React.ReactElement,
  closable?: boolean,
  onClose?: React.MouseEventHandler<HTMLButtonElement>
  status: 'info' | 'error' | 'success' | 'warning'
} & ComponentProps<typeof StyledAlert>

export const Alert: FunctionComponent<AlertProps> = React.forwardRef(
  ({
    closable,
    size,
    onClose,
    status,
    children,
    ...rest
  }: AlertProps, ref) => {
    const ValidAlertIcon = STATUSES[status]?.icon;
    if (!ValidAlertIcon) {
      throw new Error(`Invalid status: ${status}`);
    }
    return (
      <StyledAlert
        role="alert"
        ref={ref}
        size={size}
        status={status}
        {...rest}
      >
        <StyledAlertIcon
          role="img"
          aria-label={`${status}-icon`}
        >
          <ValidAlertIcon
            size={size === 'sm' ? 20 : 24}
            aria-hidden
          />
        </StyledAlertIcon>
        {children}
        {
          closable
            ? (
              <StyledCloseButton
                icon={<CloseIcon />}
                aria-label="close"
                variant="default"
                {...(onClose && { onClick: onClose })}
              />
            )
            : null
        }
      </StyledAlert>
    );
  }
);

export const AlertDescription = StyledAlertDescription;
