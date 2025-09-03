import React, {
  ComponentProps,
  ReactNode,
  useState
} from 'react';
import clsx from 'clsx';
import { prefixClassName } from '@src/utils';
import { Box, BoxProps } from '../box';
import { styled } from '../stitches.config';

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        // eslint-disable-next-line max-len
        d="M2.5 10a7.5 7.5 0 1015.001-.001A7.5 7.5 0 002.5 10zm4.448 3.052a.781.781 0 010-1.104L8.895 10 6.948 8.052a.781.781 0 011.104-1.104L10 8.895l1.948-1.947a.781.781 0 111.104 1.104L11.105 10l1.947 1.948a.781.781 0 11-1.104 1.104L10 11.105l-1.948 1.947a.781.781 0 01-1.104 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const StyledCloseButton = styled('button', {
  border: 'none',
  background: 'transparent',
  color: 'inherit',
  cursor: 'pointer',
  borderRadius: '$round',
  outline: 'none',
  padding: 0,

  '&:focus-visible': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 3px $colors$negative300'
  },

  svg: {
    width: '100%',
    height: '100%',
    display: 'block'
  }
});

const SideElementContainer = styled('span', {
  display: 'inline-flex',

  svg: {
    width: '100%',
    height: '100%'
  }
});

const StyledChipContent = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  height: '100%',
  position: 'relative',
  borderRadius: 'inherit',
  backgroundColor: 'inherit'
});

const CLASSNAMES = {
  addonElementStart: prefixClassName('addon-element--start'),
  addonElementEnd: prefixClassName('addon-element--end'),
  chip: prefixClassName('chip'),
  chipContent: prefixClassName('chip__content'),
  chipWithAddonStart: `${prefixClassName('chip')}--with-addon-start`,
  chipWithAddonEnd: `${prefixClassName('chip')}--with-addon-end`
};

const StyledChip = styled(Box, {
  display: 'inline-flex',
  flexShrink: '0',
  alignItems: 'center',
  outline: 'none',
  position: 'relative',
  '&:focus-visible': {
    $$shadowColor: '$colors$primary300',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  '&:before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    borderRadius: 'inherit',
    backgroundColor: '$white900'
  },
  [`& .${CLASSNAMES.addonElementEnd}`]: {
    color: '$black600'
  },
  variants: {
    size: {
      xl: {
        height: '$10',
        fontSize: '$md',
        fontWeight: '$5',
        lineHeight: '$md',

        [`& ${StyledChipContent}`]: {
          gap: '$2',
          padding: '0 $7'
        },
        [`&.${CLASSNAMES.chipWithAddonStart} ${StyledChipContent}`]: {
          paddingLeft: '$5'
        },
        [`&.${CLASSNAMES.chipWithAddonEnd} ${StyledChipContent},
          &.closable ${StyledChipContent}`]: {
          paddingRight: '$5'
        },
        [`& ${StyledCloseButton}`]: {
          height: '$5',
          width: '$5'
        },
        [`& ${SideElementContainer}`]: {
          width: '$5',
          height: '$5'
        }
      },
      lg: {
        height: '$8',
        fontSize: '$sm',
        fontWeight: '$5',
        lineHeight: '$sm',

        [`& ${StyledChipContent}`]: {
          gap: '$2',
          padding: '0 $5'
        },
        [`&.${CLASSNAMES.chipWithAddonStart} ${StyledChipContent}`]: {
          paddingLeft: '$3'
        },
        [`&.${CLASSNAMES.chipWithAddonEnd} ${StyledChipContent},
          &.closable ${StyledChipContent}`]: {
          paddingRight: '$3'
        },
        [`& ${StyledCloseButton}`]: {
          height: '$5',
          width: '$5'
        },
        [`& ${SideElementContainer}`]: {
          width: '$5',
          height: '$5'
        }
      },
      md: {
        height: '$6',
        fontSize: '$xs',
        fontWeight: '$5',
        lineHeight: '$xs',

        [`& ${StyledChipContent}`]: {
          gap: '$1',
          padding: '0 $4'
        },
        [`&.${CLASSNAMES.chipWithAddonStart} ${StyledChipContent}`]: {
          paddingLeft: '$2'
        },
        [`&.${CLASSNAMES.chipWithAddonEnd} ${StyledChipContent},
          &.closable ${StyledChipContent}`]: {
          paddingRight: '$2'
        },
        [`& ${StyledCloseButton}`]: {
          height: '$4',
          width: '$4'
        },
        [`& ${SideElementContainer}`]: {
          width: '$4',
          height: '$4'
        }
      },
      sm: {
        height: '$5',
        fontSize: '$xs',
        fontWeight: '$5',
        lineHeight: '$xs',

        [`& ${StyledChipContent}`]: {
          gap: '$1',
          padding: '0 $3'
        },
        [`&.${CLASSNAMES.chipWithAddonStart} ${StyledChipContent}`]: {
          paddingLeft: '$2'
        },
        [`&.${CLASSNAMES.chipWithAddonEnd} ${StyledChipContent},
          &.closable ${StyledChipContent}`]: {
          paddingRight: '$2'
        },
        [`& ${StyledCloseButton}`]: {
          height: '$4',
          width: '$4'
        },
        [`& ${SideElementContainer}`]: {
          width: '$4',
          height: '$4'
        }
      },
      xs: {
        height: '$4',
        fontSize: '$xs',
        fontWeight: '$5',
        lineHeight: '$xxs',
        letterSpacing: '0.444px',

        [`& ${StyledChipContent}`]: {
          gap: '$1',
          padding: '0 $3'
        },
        [`&.${CLASSNAMES.chipWithAddonStart} ${StyledChipContent}`]: {
          paddingLeft: '$2'
        },
        [`&.${CLASSNAMES.chipWithAddonEnd} ${StyledChipContent},
          &.closable ${StyledChipContent}`]: {
          paddingRight: '$2'
        },
        [`& ${StyledCloseButton}`]: {
          height: '14px',
          width: '14px'
        },
        [`& ${SideElementContainer}`]: {
          width: '14px',
          height: '14px'
        }
      },
      '2xs': {
        height: '$3',
        fontSize: '$xxs',
        fontWeight: '$7',
        lineHeight: '$xxs',
        letterSpacing: '0.185px',

        [`& ${StyledChipContent}`]: {
          gap: '$1',
          padding: '0 $2'
        },
        [`&.${CLASSNAMES.chipWithAddonStart} ${StyledChipContent}`]: {
          paddingLeft: '$1'
        },
        [`&.${CLASSNAMES.chipWithAddonEnd} ${StyledChipContent},
          &.closable ${StyledChipContent}`]: {
          paddingRight: '$1'
        },
        [`& ${StyledCloseButton}`]: {
          height: '$2',
          width: '$2'
        },
        [`& ${SideElementContainer}`]: {
          width: '$2',
          height: '$2'
        }
      }
    },
    color: {
      default: {
        color: '$neutral900',
        backgroundColor: '$neutral100',

        [`& ${StyledCloseButton}`]: {
          color: '$neutral500'
        },
        [`&.closable ${StyledCloseButton}:hover,
          &.closable ${StyledCloseButton}:focus-within`]: {
          color: '$neutral800'
        },

        [`& .${CLASSNAMES.addonElementStart}`]: {
          color: '$neutral800'
        }
      },
      primary: {
        color: '$primary700',
        backgroundColor: '$primary50',

        [`& ${StyledCloseButton}`]: {
          color: '$primary400'
        },
        [`&.closable ${StyledCloseButton}:hover,
          &.closable ${StyledCloseButton}:focus-within`]: {
          color: '$primary500'
        },

        [`& .${CLASSNAMES.addonElementStart}`]: {
          color: '$primary500'
        }
      },
      secondary: {
        color: '$white900',
        backgroundColor: '$secondary500',

        [`& ${StyledCloseButton}`]: {
          color: '$white800'
        },
        [`&.closable ${StyledCloseButton}:hover,
          &.closable ${StyledCloseButton}:focus-within`]: {
          color: '$white900'
        },

        [`& .${CLASSNAMES.addonElementStart}`]: {
          color: '$secondary500'
        }
      },
      error: {
        color: '$negative800',
        backgroundColor: '$negative100',

        [`& ${StyledCloseButton}`]: {
          color: '$negative600'
        },
        [`&.closable ${StyledCloseButton}:hover,
          &.closable ${StyledCloseButton}:focus-within`]: {
          color: '$negative800'
        },

        [`& .${CLASSNAMES.addonElementStart}`]: {
          color: '$negative500'
        }
      },
      warning: {
        color: '$warning800',
        backgroundColor: '$warning100',

        [`& ${StyledCloseButton}`]: {
          color: '$warning700'
        },
        [`&.closable ${StyledCloseButton}:hover,
          &.closable ${StyledCloseButton}:focus-within`]: {
          color: '$warning800'
        },

        [`& .${CLASSNAMES.addonElementStart}`]: {
          color: '$warning500'
        }
      },
      success: {
        color: '$positive800',
        backgroundColor: '$positive100',

        [`& ${StyledCloseButton}`]: {
          color: '$positive600'
        },
        [`&.closable ${StyledCloseButton}:hover,
          &.closable ${StyledCloseButton}:focus-within`]: {
          color: '$positive800'
        },

        [`& .${CLASSNAMES.addonElementStart}`]: {
          color: '$positive500'
        }
      },
      accent: {
        color: '$accent800',
        backgroundColor: '$accent100',

        [`& ${StyledCloseButton}`]: {
          color: '$accent500'
        },
        [`&.closable ${StyledCloseButton}:hover,
          &.closable ${StyledCloseButton}:focus-within`]: {
          color: '$accent800'
        },

        [`& .${CLASSNAMES.addonElementStart}`]: {
          color: '$accent500'
        }
      }
    },
    rounded: {
      sm: {
        borderRadius: '$sm'
      },
      full: {
        borderRadius: '$pill'
      }
    },
    variant: {
      outline: {
        backgroundColor: '$white900',
        borderWidth: '1px',
        borderStyle: 'solid',
        color: '$secondary800'
      },
      solid: {
        unset: 'none'
      }
    },
    selectable: {
      true: {
        color: '$secondary800',
        cursor: 'pointer',

        [`& ${StyledChipContent}`]: {
          color: '$secondary800'
        }
      }
    }
  },
  compoundVariants: [
    {
      size: 'lg',
      rounded: 'sm',
      css: {
        borderRadius: '$lg'
      }
    },
    {
      size: 'md',
      rounded: 'sm',
      css: {
        borderRadius: '$lg'
      }
    },
    {
      size: '3xs',
      rounded: 'sm',
      css: {
        borderRadius: '$xs'
      }
    },
    /* Outline variants */
    {
      color: 'default',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$black900', 0.15],
        backgroundColor: '$white900',
        color: '$secondary900',

        [`& ${StyledCloseButton}`]: {
          color: '$black500'
        },
        [`&.closable ${StyledCloseButton}:hover, 
          &.closable ${StyledCloseButton}:focus-within`]: {
          color: '$black600'
        }
      }
    },
    {
      color: 'primary',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$primary500', 0.2],
        backgroundColor: '$white900',
        color: '$secondary800',

        [`& ${StyledCloseButton}`]: {
          color: '$primary500'
        }
      }
    },
    {
      color: 'secondary',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$secondary500', 0.2],
        backgroundColor: '$white900',
        color: '$secondary800',
        [`& ${StyledCloseButton}`]: {
          color: '$secondary500'
        }
      }
    },
    {
      color: 'success',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$positive500', 0.2],
        backgroundColor: '$white900',
        color: '$secondary800',
        [`& ${StyledCloseButton}`]: {
          color: '$positive500'
        }
      }
    },
    {
      color: 'warning',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$warning500', 0.2],
        backgroundColor: '$white900',
        color: '$secondary800',
        [`& ${StyledCloseButton}`]: {
          color: '$warning500'
        }
      }
    },
    {
      color: 'error',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$negative500', 0.2],
        backgroundColor: '$white900',
        color: '$secondary800',
        [`& ${StyledCloseButton}`]: {
          color: '$negative500'
        }
      }
    },
    {
      color: 'accent',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$accent500', 0.2],
        backgroundColor: '$white900',
        color: '$secondary800',
        [`& ${StyledCloseButton}`]: {
          color: '$accent500'
        }
      }
    },
    /* Solid selectable badge variants */
    {
      color: 'primary',
      variant: 'solid',
      selectable: true,
      css: {
        color: '$secondary800',
        backgroundColorOpacity: ['$primary500', 0.1],

        '&:hover': {
          backgroundColorOpacity: ['$primary500', 0.15]
        },
        '&.active': {
          backgroundColorOpacity: ['$primary500', 0.2]
        }
      }
    },
    {
      color: 'secondary',
      variant: 'solid',
      selectable: true,
      css: {
        backgroundColorOpacity: ['$secondary500', 0.1],

        '&:hover': {
          backgroundColorOpacity: ['$secondary500', 0.15]
        },
        '&.active': {
          backgroundColorOpacity: ['$secondary500', 0.2]
        }
      }
    },
    {
      color: 'default',
      variant: 'solid',
      selectable: true,
      css: {
        backgroundColorOpacity: ['$black900', 0.1],

        '&:hover': {
          backgroundColorOpacity: ['$black900', 0.15]
        },
        '&.active': {
          backgroundColorOpacity: ['$black900', 0.2]
        }
      }
    },
    {
      color: 'accent',
      variant: 'solid',
      selectable: true,
      css: {
        backgroundColorOpacity: ['$accent500', 0.1],

        '&:hover': {
          backgroundColorOpacity: ['$accent500', 0.15]
        },
        '&.active': {
          backgroundColorOpacity: ['$accent500', 0.2]
        }
      }
    },
    {
      color: 'success',
      variant: 'solid',
      selectable: true,
      css: {
        backgroundColorOpacity: ['$positive500', 0.1],

        '&:hover': {
          backgroundColorOpacity: ['$positive500', 0.15]
        },
        '&.active': {
          backgroundColorOpacity: ['$positive500', 0.2]
        }
      }
    },
    {
      color: 'warning',
      variant: 'solid',
      selectable: true,
      css: {
        backgroundColorOpacity: ['$warning600', 0.1],

        '&:hover': {
          backgroundColorOpacity: ['$warning600', 0.15]
        },
        '&.active': {
          backgroundColorOpacity: ['$warning600', 0.2]
        }
      }
    },
    {
      color: 'error',
      variant: 'solid',
      selectable: true,
      css: {
        backgroundColorOpacity: ['$negative600', 0.1],

        '&:hover': {
          backgroundColorOpacity: ['$negative600', 0.15]
        },
        '&.active': {
          backgroundColorOpacity: ['$negative600', 0.2]
        }
      }
    },
    /* Outline selectable badge variants */
    {
      color: 'primary',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          backgroundColorOpacity: ['$primary500', 0.05]
        },
        '&.active': {
          borderColor: '$primary400',
          backgroundColorOpacity: ['$primary500', 0.1]
        }
      }
    },
    {
      color: 'secondary',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          backgroundColorOpacity: ['$secondary500', 0.05]
        },
        '&.active': {
          borderColor: '$secondary400',
          backgroundColorOpacity: ['$secondary500', 0.1]
        }
      }
    },
    {
      color: 'default',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          backgroundColorOpacity: ['$black900', 0.05]
        },
        '&.active': {
          borderColor: '$black400',
          backgroundColorOpacity: ['$black900', 0.1]
        }
      }
    },
    {
      color: 'error',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          backgroundColorOpacity: ['$negative600', 0.05]
        },
        '&.active': {
          borderColor: '$negative400',
          backgroundColorOpacity: ['$negative600', 0.1]
        }
      }
    },
    {
      color: 'warning',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          backgroundColorOpacity: ['$warning600', 0.05]
        },
        '&.active': {
          borderColor: '$warning400',
          backgroundColorOpacity: ['$warning600', 0.1]
        }
      }
    },
    {
      color: 'success',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          backgroundColorOpacity: ['$positive500', 0.05]
        },
        '&.active': {
          borderColor: '$positive400',
          backgroundColorOpacity: ['$positive500', 0.1]
        }
      }
    },
    {
      color: 'accent',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          backgroundColorOpacity: ['$accent500', 0.05]
        },
        '&.active': {
          borderColor: '$accent400',
          backgroundColorOpacity: ['$accent500', 0.1]
        }
      }
    }
  ],
  defaultVariants: {
    size: 'sm',
    color: 'default',
    variant: 'solid',
    rounded: 'sm'
  }
});

export interface ChipBaseProps {
  closable?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  active?: boolean;
  defaultActive?: boolean;
  onActiveStateChange?: (active: boolean) => void;
}

export type ChipProps = ChipBaseProps &
  ComponentProps<typeof StyledChip> &
  BoxProps;

export const Chip = React.forwardRef<typeof StyledChip, ChipProps>(
  (
    {
      color,
      onClose,
      closable,
      children,
      leftElement,
      rightElement,
      defaultActive,
      active,
      onActiveStateChange,
      ...props
    },
    ref
  ) => {
    const [isActive, setIsActive] = useState(defaultActive ?? false);

    const handleChange = () => {
      if (typeof active === 'boolean') {
        if (onActiveStateChange) {
          onActiveStateChange(!active);
        } else {
          // eslint-disable-next-line no-console
          console.warn(
            "You provided 'active' prop without 'onActiveStateChange'"
          );
        }
        return;
      }
      if (onActiveStateChange) {
        onActiveStateChange(!isActive);
      }
      setIsActive(!isActive);
    };

    return (
      <StyledChip
        ref={ref}
        data-testid="chip"
        tabIndex={0}
        color={color}
        onClick={handleChange}
        onKeyDown={(e) => {
          if (e.key === ' ') {
            e.preventDefault();
            handleChange();
          }
        }}
        {...props}
        className={clsx(
          CLASSNAMES.chip,
          {
            active: active ?? isActive,
            closable,
            [CLASSNAMES.chipWithAddonStart]: !!leftElement,
            [CLASSNAMES.chipWithAddonEnd]: !!rightElement
          },
          props.className
        )}
      >
        <StyledChipContent className={CLASSNAMES.chipContent}>
          {leftElement && (
            <SideElementContainer
              className={CLASSNAMES.addonElementStart}
              data-testid="left-element"
            >
              {leftElement}
            </SideElementContainer>
          )}
          {children}
          {closable && (
            <StyledCloseButton
              data-testid="close-button"
              type="button"
              {...(onClose && { onClick: onClose })}
            >
              <CloseIcon />
            </StyledCloseButton>
          )}
          {rightElement && (
            <SideElementContainer
              className={CLASSNAMES.addonElementEnd}
              data-testid="right-element"
            >
              {rightElement}
            </SideElementContainer>
          )}
        </StyledChipContent>
      </StyledChip>
    );
  }
);
