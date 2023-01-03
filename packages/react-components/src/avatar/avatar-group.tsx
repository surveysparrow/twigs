import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';
import { Avatar } from './avatar';

type OmitAvatarProps = 'isAnonymous' | 'rounded';

export type AvatarGroupProps = {
  limit?: number | null,
  children: React.ReactElement[]
} & Omit<ComponentProps<typeof Avatar>, OmitAvatarProps>
  & React.HTMLAttributes<HTMLDivElement> & {
    as?: React.ElementType
  };

const AvatarOverlay = styled('div', {
  height: '100%',
  width: '100%',
  background: "$colors$black900",
  opacity: .5,
  zIndex: 2,
  position: "absolute",
  left: 0
});

const AvatarOverlayText = styled('span', {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 3,
  color: "$colors$white900",
  position: "absolute",
  left: 0
});

const AvatarNestedItem = styled('div', {
  borderColor: '$colors$white900',
  borderStyle: 'solid',
  borderRadius: '100%',
  backgroundColor: '$tertiary200',
  variants: {
    size: {
      '3xl': {
        borderWidth: '2px',
        marginLeft: '-$sizes$6',
      },
      '2xl': {
        borderWidth: '2px',
        marginLeft: '-$sizes$6',
      },
      xl: {
        borderWidth: '2px',
        marginLeft: '-$sizes$6',
      },
      lg: {
        borderWidth: '2px',
        marginLeft: '-$sizes$5',
      },
      md: {
        borderWidth: '2px',
        marginLeft: '-$sizes$4',
      },
      sm: {
        borderWidth: '1px',
        marginLeft: '-$sizes$4',
      },
      xs: {
        borderWidth: "1px",
        marginLeft: '-$sizes$3',
      }
    },
    isFirst: {
      true: {
        marginLeft: '0 !important',
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

const StyledAvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row'
});

export const AvatarGroup: FunctionComponent<AvatarGroupProps> = React.forwardRef(({
  limit = 0, size, children, ...rest
}: AvatarGroupProps, ref) => {

  const avatars = children || [];
  const avatarCount = avatars.length || 0;
  const avatarLimit = limit || avatarCount;
  const extraAvatarsCount = avatarCount - avatarLimit;

  const renderAvatars = avatars.slice(0, avatarLimit).map((child: React.ReactElement, index: number): React.ReactNode => {
    const isFirstChild = index === 0;
    const childProps = {
      ...child.props,
      rounded: 'full'
    }
    return (
      <AvatarNestedItem size={size} isFirst={isFirstChild}>
        {React.cloneElement(child, childProps)}
      </AvatarNestedItem>
    )
  })

  return (
    <StyledAvatarGroup
      ref={ref}
      {...rest}
      role="group"
    >
      {renderAvatars}

      {
        extraAvatarsCount > 0 ?
          <AvatarNestedItem size={size}>
            <Avatar
              src={avatars[avatarCount! - extraAvatarsCount].props.src}
              name={avatars[avatarCount! - extraAvatarsCount].props.name}
              size={size}
              rounded={'full'}
              css={{
                position: "relative",
                display: "flex"
              }}
            >
              <AvatarOverlay />
              <AvatarOverlayText >
                + {extraAvatarsCount}
              </AvatarOverlayText>
            </Avatar>
          </AvatarNestedItem>
          :
          null
      }
    </StyledAvatarGroup>
  )
})