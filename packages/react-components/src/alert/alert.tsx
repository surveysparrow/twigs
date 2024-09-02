import React, { cloneElement, ComponentProps, FunctionComponent } from 'react';
import {
  AlertIcon, CloseIcon, InfoIcon, TickCircleIcon, WarningIcon
} from '@sparrowengg/twigs-react-icons';
import { styled } from '../stitches.config';
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

const StyledAlertDescription = styled(Box, {
  lineHeight: '$md'
});
const StyledAlertIcon = styled('span', {
  display: 'flex'
});

const StyledAlert = styled(Box, {
  display: 'flex',
  alignItems: 'start',
  width: '100%',
  borderWidth: '$xs',
  borderStyle: 'solid',
  [`${StyledAlertDescription}`]: {
    flex: 1,
    minWidth: 0
  },
  variants: {
    size: {
      sm: {
        padding: '$3 $4',
        borderRadius: '$lg',
        [`${StyledAlertIcon}`]: {
          marginInlineEnd: '$2'
        },
        [`${StyledAlertDescription}`]: {
          fontSize: '$sm',
          lineHeight: '$sm'
        },
        [`${StyledCloseButton}`]: {
          height: '$5',
          width: '$5',
          marginInlineStart: '$2'
        }
      },
      md: {
        padding: '$8',
        borderRadius: '$xl',
        [`${StyledAlertIcon}`]: {
          marginInlineEnd: '$4'
        },
        [`${StyledAlertDescription}`]: {
          fontSize: '$md',
          lineHeight: '$md'
        },
        [`${StyledCloseButton}`]: {
          height: '$6',
          width: '$6',
          marginInlineStart: '$4'
        }
      }
    },
    status: {
      [STATUSES.success.name]: {
        backgroundColor: '$positive50',
        borderColor: '$positive200',
        [`${StyledAlertIcon} svg`]: {
          color: '$positive500'
        }
      },
      [STATUSES.info.name]: {
        backgroundColorOpacity: ['$accent500', 0.04],
        borderColorOpacity: ['$accent500', 0.2],
        [`${StyledAlertIcon} svg`]: {
          color: '$accent500'
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
        backgroundColor: '$warning100',
        borderColor: '$warning200',
        [`${StyledAlertIcon} svg`]: {
          color: '$warning600'
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
  status: 'info' | 'error' | 'success' | 'warning',
  icon?: React.ReactElement,
} & ComponentProps<typeof StyledAlert>

export const Alert: FunctionComponent<AlertProps> = React.forwardRef(
  ({
    closable,
    size = 'sm',
    onClose,
    status = 'info',
    children,
    icon,
    ...rest
  }: AlertProps, ref) => {
    const ValidAlertIcon = icon || STATUSES[status]?.icon;
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
          {
            icon
              ? cloneElement(icon)
              : (
                <ValidAlertIcon
                  size={size === 'sm' ? 20 : 24}
                  aria-hidden
                />
              )
          }

        </StyledAlertIcon>
        {children}
        {
          closable
            ? (
              <StyledCloseButton
                icon={<CloseIcon />}
                aria-label="close"
                color="default"
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
