import { Button } from '../../button';
import { DialogsManager, dialogs } from '../dialogs-manager';

export default {
  component: DialogsManager,
  title: 'Overlay/DialogsManager'
};

const Template = (args) => {
  return (
    <div>
      <DialogsManager />
      <Button onClick={args.handleClick}>Open Dialog</Button>
    </div>
  );
};

export const Default = () => (
  <Template
    handleClick={() => {
      dialogs.open('confirm', {
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
    handleClick={() => dialogs.open('alert', {
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
      dialogs.open('modal', {
        title: 'Title',
        content: 'Description',
        buttonLabel: 'Button'
      });
    }}
  />
);
