export interface ISubscription {
    id: number;
    pledge: number;
    title: string;
    description: string;
    quantity: number;
    disable: boolean;
    buttonLabel: string;
    principal: boolean;
}

export interface ISubBoxProps {
    subscription: ISubscription;
  }