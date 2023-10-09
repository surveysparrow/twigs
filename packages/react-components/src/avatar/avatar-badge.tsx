import { styled } from '../stitches.config';

export const AvatarBadge = styled('div', {
  borderRadius: '$round',
  position: 'absolute',
  background: '$negative500',
  border: '$borderWidths$xs',
  borderStyle: 'solid',
  borderColor: '$white900',
  right: 0,
  top: 0,
  height: '6px',
  width: '6px',
  transform: 'translate(25%, -25%)'
});
