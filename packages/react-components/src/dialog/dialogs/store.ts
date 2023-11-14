interface Data {
  name: string;
  options: any;
  __modalId: number;
}

export class ModalStore {
  data: Data[];

  private subId: number;

  private subscribers: Record<number, Function>;

  private modalId: number;

  constructor() {
    this.data = [];
    this.subId = 1;
    this.subscribers = {};
    this.modalId = 0;
  }

  subscribe = (fn: (state: Data[]) => void) => {
    const { subId } = this;
    this.subscribers[subId] = fn;
    this.subId += 1;

    return async () => {
      delete this.subscribers[subId];
    };
  };

  publish = (data: Data[]) => {
    this.data = data;
    Object.values(this.subscribers).forEach((sub) => {
      sub(this.data);
    });
  };

  getModalId() {
    this.modalId += 1;
    return this.modalId;
  }
}

export const store = new ModalStore();
