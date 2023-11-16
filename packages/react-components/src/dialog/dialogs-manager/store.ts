interface Data {
  name: string;
  options: any;
  __dialogId: number;
}

export class ModalStore {
  data: Data[];

  private subId: number;

  private subscribers: Record<number, Function>;

  private dialogId: number;

  constructor() {
    this.data = [];
    this.subId = 1;
    this.subscribers = {};
    this.dialogId = 0;
  }

  subscribe = (fn: (state: Data[]) => void) => {
    const { subId } = this;
    this.subscribers[subId] = fn;
    this.subId += 1;

    return {
      id: subId,
      unsubscribe: async () => {
        delete this.subscribers[subId];
      }
    };
  };

  getLastSubscriber() {
    return Object.keys(this.subscribers).at(-1);
  }

  publish = (data: Data[]) => {
    this.data = data;
    Object.values(this.subscribers).forEach((sub) => {
      sub(this.data);
    });
  };

  getDialogId() {
    this.dialogId += 1;
    return this.dialogId;
  }
}

export const store = new ModalStore();
