type BaseProps = {
  name: string;
  date: Date;
  status: MessageStatusEnum;
  image?: string;
};

export enum MessageStatusEnum {
  Scheduled = 'Scheduled',
  Canceled = 'Canceled',
  Completed = 'Completed',
}

export enum MessageType {
  Sessions = 'Sessions',
  Requests = 'Requests',
}

export enum ScheduledMessageType {
  Scheduled = 'Scheduled',
  History = 'History',
}

//the first component type props
export type MessageItemProps = BaseProps & {
  messageType: MessageType;
};

export type MessageListProps = {
  messages: MessageItemProps[];
};

//the second component type props
export type ScheduledMessageItemProps = BaseProps & {
  notes: string;
  durationInHours: number;
  messageType: ScheduledMessageType;
};

export type ScheduledMessageListProps = {
  messages: ScheduledMessageItemProps[];
};
