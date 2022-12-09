import React, { FunctionComponent } from 'react';
import { styled } from '../../stitches.config';
import { Avatar, AvatarBaseProps } from './avatar';

const AvatarOverlay = styled(Avatar, {
  background: "#594b4b",
  opacity: .8,
  zIndex: 9,
  position: "absolute",
  left: 0
});

const AvatarOverlayText = styled(Avatar, {
  display: "flex",
  zIndex: 10,
  color: "#fff",
  position: "absolute",
  left: 0
});

const AvatarGroupRoot = styled('div', {
  display: 'flex'
});

const AvatarWrapper = styled('span', {});

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
  
  const childAvatars = avatars.slice(0, avatarLimit).map((child: React.ReactNode, index: number) => {
    const childProps = {
      css: {
        marginInlineStart: index === 0 ? '' : '-24px'
      },
      size,
      rounded
    }

    return React.cloneElement(child, childProps)
  })

  return (
    <AvatarGroupRoot
      ref={ref}
      {...rest}
      role="group"
    >
      {childAvatars}
      {
        extraAvatars > 0 ?
          <Avatar
            src={avatars[avatarCount - extraAvatars].props.src}
            size={size}
            rounded={rounded}
            css={{
              marginInlineStart: "-28px",
              position: "relative",
              display: "flex"
            }}
          >
            <AvatarOverlay size={size} rounded={rounded} data-id="overlay-background" />
            <AvatarOverlayText size={size} rounded={rounded} data-id="overlay-text">
              + {extraAvatars}
            </AvatarOverlayText>
          </Avatar>
          :
          null
      }
    </AvatarGroupRoot>
  )
})