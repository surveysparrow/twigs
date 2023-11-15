import { Button } from '../../button';
import { Dialogs, dialogs } from '../dialogs';

export default {
  component: Dialogs,
  title: 'Overlay/Dialogs'
};

const Template = (args) => {
  return (
    <div>
      <Dialogs />
      <Button onClick={args.handleClick}>Open Dialog</Button>
    </div>
  );
};

export const Default = () => (
  <Template
    handleClick={() => {
      dialogs.openDialog('confirm', {
        title: 'Are you sure you want to perform this action',
        content: 'You can perform this action again.',
        labels: {
          confirm: 'Yes, I am sure',
          cancel: 'Cancel'
        },
        confirmButtonProps: {
          color: 'error'
        }
      });
    }}
  />
);

export const AlertDialog = () => (
  <Template
    handleClick={() => dialogs.openDialog('alert', {
      title: 'You just performed an action',
      content: 'You can perform this action again.',
      labels: {
        action: 'Yes, I am sure'
      },
      actionButtonProps: {
        color: 'primary'
      }
    })}
  />
);

export const GeneralDialog = () => (
  <Template
    handleClick={() => {
      dialogs.openDialog('modal', {
        title: 'Title',
        content: 'Description',
        buttonLabel: 'Button'
      });
    }}
  />
);
