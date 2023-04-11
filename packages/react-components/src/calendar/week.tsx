import { styled } from '../../stitches.config';
import { Box } from '../box';

export const CalendarWeek = styled('span', {
  height: '$5',
  width: '$10',
  fontSize: '$sm',
  fontWeight: '$4',
  textAlign: 'center',
  color: '$neutral800'
});

export const StyledWeekContainer = styled(Box, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid $neutral100',
  height: '$11'
});
