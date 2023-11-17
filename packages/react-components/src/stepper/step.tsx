import { TickIcon } from '@sparrowengg/twigs-react-icons';
import { styled } from '../stitches.config';
import { Flex } from '../flex';
import { Text } from '../text';

const StyledContainer = styled(Flex, {
  gap: '$4',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$7',
  backgroundColorOpacity: ['$accent500', 0.06],
  borderBottomStyle: 'solid',
  borderBottomWidth: '$xs',
  borderColorOpacity: ['$accent500', 0.15]
});

const StyledCounter = styled(Text, {
  height: '$5',
  width: '$5',
  borderWidth: '$xs',
  borderStyle: 'solid',
  borderColor: '$neutral700',
  borderRadius: '$round',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const StyledStep = styled('button', {
  background: 'transparent',
  border: 'none',
  borderBottomStyle: 'solid',
  borderBottomWidth: '$xs',
  borderColor: 'transparent',
  height: '$11',
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$neutral400',
  fontWeight: '$7',
  padding: '0px !important',
  [`& ${StyledCounter}`]: {
    fontSize: '$xs'
  },
  variants: {
    active: {
      true: {
        borderColor: '$accent500',
        color: '$accent500',
        [`& ${StyledCounter}`]: {
          borderColor: '$accent500',
          fontWeight: '$7'
        }
      }
    },
    completed: {
      true: {
        color: '$neutral700',
        [`& ${StyledCounter}`]: {
          backgroundColor: '$neutral700'
        }
      }
    },
    cursor: {
      pointer: {
        cursor: 'pointer'
      },
      default: {
        cursor: 'default'
      }
    }
  }
});

type StepperCountProps = {
  completed: boolean,
  label: number
};

const StepperCount = ({ completed, label }: StepperCountProps) => {
  return (
    <StyledCounter>
      {
        completed
          ? (
            <TickIcon
              size={14}
              color="#fff"
            />
          )
          : label
      }
    </StyledCounter>
  );
};

export const Step = StyledStep;
export const Container = StyledContainer;
export { StepperCount };
