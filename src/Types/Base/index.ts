export type BaseMessageProps = {
  name: string;
  date: number;
  status: MessageStatusEnum;
  image?: string;
};

export enum MessageStatusEnum {
  Scheduled = 'Scheduled',
  Canceled = 'Canceled',
  Completed = 'Completed',
}
