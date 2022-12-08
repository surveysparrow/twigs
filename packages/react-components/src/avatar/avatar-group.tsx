import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';
import { Avatar, AvatarBaseProps } from './avatar';

const Overlay = styled(Avatar, {
  background: "#594b4b",
  opacity: .8,
  zIndex: 9,
  position: "absolute",
  left: 0,
  variants: {
    spacing: {
      '3xl': {
        marginLeft: '-28px'
      },
      '2xl': {
        marginLeft: '-24px'
      },
      'xl': {
        marginLeft: '-20px'
      }
    }
  }
});

const OverlayText = styled(Avatar, {
  display: "flex",
  zIndex: 10,
  color: "#fff",
  position: "absolute",
  left: 0
});

const AvatarGroupRoot = styled('div', {
  display: 'flex'
})

export interface AvatarGroupBaseProps {
  limit?: number | null,
  rounded?: string,
  size?: string
  children: React.ReactNode[]
}

type AvatarGroupProps = AvatarGroupBaseProps & AvatarBaseProps;

export const AvatarGroup: FunctionComponent<AvatarGroupProps> = React.forwardRef(({
  limit = null, size, rounded, children, ...rest
}: AvatarGroupProps, ref) => {
  
  const avatars = children;
  const avatarCount = avatars.length;
  const avatarLimit = limit || avatarCount;
  const extraAvatars = avatarCount - avatarLimit;
  
  return (
    <AvatarGroupRoot
      {...rest}
      ref={ref}
    >
      {
        avatars.slice(0, avatarLimit).map((child, index) => {
          console.log({ index });
          return (
            <span style={{
              marginLeft: index === 0 ? "" : "-20px"
            }}>
              {child}
            </span>
          )
        })
      }
      {
        extraAvatars > 0 ?
          <Avatar
            src={avatars[avatarCount - extraAvatars].props.src}
            size={size}
            rounded={rounded}
            css={{
              marginLeft: "-28px",
              position: "relative",
              display: "flex"
            }}
          >
            <Overlay size={size} rounded={rounded} data-id="overlay-background" />
            <OverlayText size={size} rounded={rounded} data-id="overlay-text">
              + {extraAvatars}
            </OverlayText>
          </Avatar>
          :
          null
      }
    </AvatarGroupRoot>
  )
})