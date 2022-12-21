import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';
import { Avatar } from './avatar';

type OmitAvatarProps = 'isAnonymous';
export interface AvatarGroupBaseProps {
  limit?: number | null,
  children: React.ReactElement[]
}
type AvatarGroupProps = AvatarGroupBaseProps & ComponentProps<typeof Avatar> & Omit<typeof Avatar, OmitAvatarProps>

interface AvatarNestedItemInterface extends Omit<typeof Avatar, OmitAvatarProps> { }
type AvatarNestedItemProps = {
  isFirst?: boolean,
  children: React.ReactNode
} & AvatarNestedItemInterface;


const AvatarOverlay = styled(Avatar, {
  background: "#000",
  opacity: .5,
  zIndex: 2,
  position: "absolute",
  left: 0
});

const AvatarOverlayText = styled(Avatar, {
  display: "flex",
  zIndex: 3,
  color: "#fff",
  position: "absolute",
  left: 0
});

const AvatarNestedItem: FunctionComponent<AvatarNestedItemProps> = styled('div', {
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

export const StyledAvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row'
});

export const AvatarGroup: FunctionComponent<AvatarGroupProps> = React.forwardRef(({
  limit = null, size = 'sm', rounded = 'full', children, ...rest
}: AvatarGroupProps, ref) => {

  const avatars = children || [];
  const avatarCount = avatars.length || 0;
  const avatarLimit = limit || avatarCount;
  const extraAvatars = avatarCount - avatarLimit;

  const renderAvatars = avatars.slice(0, avatarLimit).map((child: React.ReactElement, index: number): React.ReactNode => {
    const childProps = child.props;
    const isFirstChild = index === 0;
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
        extraAvatars > 0 ?
          <AvatarNestedItem size={size}>
            <Avatar
              src={avatars[avatarCount! - extraAvatars].props.src}
              size={size}
              rounded={rounded}
              css={{
                position: "relative",
                display: "flex"
              }}
            >
              <AvatarOverlay size={size} rounded={rounded} data-id="overlay-background" />
              <AvatarOverlayText size={size} rounded={rounded} data-id="overlay-text">
                + {extraAvatars}
              </AvatarOverlayText>
            </Avatar>
          </AvatarNestedItem>
          :
          null
      }
    </StyledAvatarGroup>
  )
})