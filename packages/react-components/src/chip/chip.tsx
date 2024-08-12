import React, {
  ComponentProps,
  FunctionComponent,
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

  '&&:hover': {
    color: '$negative500',

    svg: {
      color: 'inherit'
    }
  },

  '&:focus-visible': {
    color: '$negative500',
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

const StyledChipContainer = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  height: '100%',
  zIndex: 1,
  borderRadius: 'inherit'
});

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
    backgroundColor: '$white900',
    zIndex: -1
  },
  [`& .${prefixClassName('addon-element--end')}`]: {
    color: '$black600'
  },
  variants: {
    size: {
      lg: {
        height: '$10',
        fontSize: '$md',
        fontWeight: '$5',
        lineHeight: '$md',
        gap: '$2',

        [`& ${StyledChipContainer}`]: {
          padding: '0 $7'
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
        height: '$8',
        fontSize: '$sm',
        fontWeight: '$5',
        lineHeight: '$sm',
        gap: '$2',

        [`& ${StyledChipContainer}`]: {
          padding: '0 $6'
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
      sm: {
        height: '$6',
        fontSize: '$xs',
        fontWeight: '$5',
        lineHeight: '$xs',
        gap: '$1',

        [`& ${StyledChipContainer}`]: {
          padding: '0 $5'
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
        height: '$5',
        fontSize: '$xs',
        fontWeight: '$5',
        lineHeight: '$xs',
        gap: '$1',

        [`& ${StyledChipContainer}`]: {
          padding: '0 $5'
        },
        [`& ${StyledCloseButton}`]: {
          marginInlineStart: '$1',
          height: '$4',
          width: '$4'
        },
        [`& ${SideElementContainer}`]: {
          width: '$4',
          height: '$4'
        }
      },
      '2xs': {
        height: '$4',
        fontSize: '$xs',
        fontWeight: '$5',
        lineHeight: '$xs',
        gap: '$1',

        [`& ${StyledChipContainer}`]: {
          padding: '0 $3'
        },
        [`& ${StyledCloseButton}`]: {
          marginInlineStart: '$1',
          height: '$3',
          width: '$3'
        },
        [`& ${SideElementContainer}`]: {
          width: '$3',
          height: '$3'
        }
      },
      '3xs': {
        height: '$3',
        fontSize: '$xxs',
        fontWeight: '$7',
        lineHeight: '$xxs',
        gap: '$1',

        [`& ${StyledChipContainer}`]: {
          padding: '0 $2'
        },
        [`& ${StyledCloseButton}`]: {
          marginInlineStart: '$1',
          height: '$3',
          width: '$3'
        },
        [`& ${SideElementContainer}`]: {
          width: '$3',
          height: '$3'
        }
      }
    },
    color: {
      default: {
        color: '$neutral900',

        [`& ${StyledChipContainer}`]: {
          background: '$neutral100'
        },

        [`& .${prefixClassName('addon-element--start')}`]: {
          color: '$neutral500'
        }
      },
      primary: {
        color: '$primary700',

        [`& ${StyledChipContainer}`]: {
          backgroundColorOpacity: ['$primary500', 0.15]
        },

        [`& .${prefixClassName('addon-element--start')}`]: {
          color: '$primary500'
        }
      },
      secondary: {
        color: '$secondary700',
        [`& ${StyledChipContainer}`]: {
          backgroundColorOpacity: ['$secondary500', 0.08]
        },

        [`& .${prefixClassName('addon-element--start')}`]: {
          color: '$secondary500'
        }
      },
      error: {
        color: '$negative700',
        [`& ${StyledChipContainer}`]: {
          background: '$negative100'
        },

        [`& .${prefixClassName('addon-element--start')}`]: {
          color: '$negative500'
        }
      },
      warning: {
        color: '$warning700',
        [`& ${StyledChipContainer}`]: {
          background: '$warning100'
        },

        [`& .${prefixClassName('addon-element--start')}`]: {
          color: '$warning500'
        }
      },
      success: {
        color: '$positive600',
        [`& ${StyledChipContainer}`]: {
          background: '$positive100'
        },

        [`& .${prefixClassName('addon-element--start')}`]: {
          color: '$positive500'
        }
      },
      accent: {
        color: '$accent500',
        [`& ${StyledChipContainer}`]: {
          background: '$accent100'
        },

        [`& .${prefixClassName('addon-element--start')}`]: {
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
        color: '$secondary800',

        [`& ${StyledChipContainer}`]: {
          backgroundColor: '$white900'
        }
      },
      solid: {
        unset: 'none'
      }
    },
    selectable: {
      true: {
        color: '$secondary800',
        cursor: 'pointer',

        [`& ${StyledChipContainer}`]: {
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
    /* Outline variants */
    {
      color: 'default',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$black900', 0.15],
        color: '$secondary800',

        [`& ${StyledCloseButton}`]: {
          color: '$black300'
        },
        [`& ${StyledChipContainer}`]: {
          backgroundColor: '$white900'
        }
      }
    },
    {
      color: 'primary',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$primary500', 0.2],
        color: '$secondary800',

        [`& ${StyledCloseButton}`]: {
          color: '$primary500'
        },
        [`& ${StyledChipContainer}`]: {
          backgroundColor: '$white900'
        }
      }
    },
    {
      color: 'secondary',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$secondary500', 0.2],
        color: '$secondary800',
        [`& ${StyledCloseButton}`]: {
          color: '$secondary500'
        },
        [`& ${StyledChipContainer}`]: {
          backgroundColor: '$white900'
        }
      }
    },
    {
      color: 'success',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$positive500', 0.2],
        color: '$secondary800',
        [`& ${StyledCloseButton}`]: {
          color: '$positive500'
        },
        [`& ${StyledChipContainer}`]: {
          backgroundColor: '$white900'
        }
      }
    },
    {
      color: 'warning',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$warning500', 0.2],
        color: '$secondary800',
        [`& ${StyledCloseButton}`]: {
          color: '$warning500'
        },
        [`& ${StyledChipContainer}`]: {
          backgroundColor: '$white900'
        }
      }
    },
    {
      color: 'error',
      variant: 'outline',
      css: {
        borderColorOpacity: ['$negative500', 0.2],
        color: '$secondary800',
        [`& ${StyledCloseButton}`]: {
          color: '$negative500'
        },
        [`& ${StyledChipContainer}`]: {
          backgroundColor: '$white900'
        }
      }
    },
    {
      color: 'accent',
      variant: 'outline',
      css: {
        color: '$secondary800',
        borderColorOpacity: ['$accent500', 0.2],
        [`& ${StyledCloseButton}`]: {
          color: '$accent500'
        },
        [`& ${StyledChipContainer}`]: {
          backgroundColor: '$white900'
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
        [`& ${StyledChipContainer}`]: {
          backgroundColorOpacity: ['$primary500', 0.1]
        },

        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$primary500', 0.15]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$primary500', 0.2]
          }
        }
      }
    },
    {
      color: 'secondary',
      variant: 'solid',
      selectable: true,
      css: {
        [`& ${StyledChipContainer}`]: {
          backgroundColorOpacity: ['$secondary500', 0.1]
        },

        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$secondary500', 0.15]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$secondary500', 0.2]
          }
        }
      }
    },
    {
      color: 'default',
      variant: 'solid',
      selectable: true,
      css: {
        [`& ${StyledChipContainer}`]: {
          backgroundColorOpacity: ['$black900', 0.1]
        },

        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$black900', 0.15]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$black900', 0.2]
          }
        }
      }
    },
    {
      color: 'accent',
      variant: 'solid',
      selectable: true,
      css: {
        [`& ${StyledChipContainer}`]: {
          backgroundColorOpacity: ['$accent500', 0.1]
        },

        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$accent500', 0.15]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$accent500', 0.2]
          }
        }
      }
    },
    {
      color: 'success',
      variant: 'solid',
      selectable: true,
      css: {
        [`& ${StyledChipContainer}`]: {
          backgroundColorOpacity: ['$positive500', 0.1]
        },

        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$positive500', 0.15]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$positive500', 0.2]
          }
        }
      }
    },
    {
      color: 'warning',
      variant: 'solid',
      selectable: true,
      css: {
        [`& ${StyledChipContainer}`]: {
          backgroundColorOpacity: ['$warning600', 0.1]
        },

        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$warning600', 0.15]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$warning600', 0.2]
          }
        }
      }
    },
    {
      color: 'error',
      variant: 'solid',
      selectable: true,
      css: {
        [`& ${StyledChipContainer}`]: {
          backgroundColorOpacity: ['$negative600', 0.1]
        },

        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$negative600', 0.15]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$negative600', 0.2]
          }
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
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$primary500', 0.05]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$primary500', 0.1]
          }
        }
      }
    },
    {
      color: 'secondary',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$secondary500', 0.05]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$secondary500', 0.1]
          }
        }
      }
    },
    {
      color: 'default',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$black900', 0.05]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$black900', 0.1]
          }
        }
      }
    },
    {
      color: 'error',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$negative600', 0.05]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$negative600', 0.1]
          }
        }
      }
    },
    {
      color: 'warning',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$warning600', 0.05]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$warning600', 0.1]
          }
        }
      }
    },
    {
      color: 'success',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$positive500', 0.05]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$positive500', 0.1]
          }
        }
      }
    },
    {
      color: 'accent',
      variant: 'outline',
      selectable: true,
      css: {
        '&:hover': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$accent500', 0.05]
          }
        },
        '&.active': {
          [`${StyledChipContainer}`]: {
            backgroundColorOpacity: ['$accent500', 0.1]
          }
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

export const Chip: FunctionComponent<ChipProps> = React.forwardRef(
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
    }: ChipProps,
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
        {...props}
        className={clsx({ active: active ?? isActive }, props.className)}
        onClick={handleChange}
        onKeyDown={(e) => {
          if (e.key === ' ') {
            e.preventDefault();
            handleChange();
          }
        }}
      >
        <StyledChipContainer>
          {leftElement && (
            <SideElementContainer
              className={prefixClassName('addon-element--start')}
            >
              {leftElement}
            </SideElementContainer>
          )}
          {children}
          {closable && (
            <StyledCloseButton
              css={{
                borderRadius: '$round',
                marginInlineStart: '$2'
              }}
              type="button"
              {...(onClose && { onClick: onClose })}
            >
              <CloseIcon />
            </StyledCloseButton>
          )}
          {rightElement && (
            <SideElementContainer
              className={prefixClassName('addon-element--end')}
            >
              {rightElement}
            </SideElementContainer>
          )}
        </StyledChipContainer>
      </StyledChip>
    );
  }
);
