type BaseMessageProps = {
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
export type MessageItemProps = BaseMessageProps & {
  messageType: MessageType;
};

export type MessageListProps = {
  messages: MessageItemProps[];
};

export type MessageTogglerProps = {
  currentMessageType: MessageType;
  onPress: (selectedMessageStatus: MessageType) => void;
};

//the second component type props
export type ScheduledMessageItemProps = BaseMessageProps & {
  notes: string;
  durationInHours: number;
  messageType: ScheduledMessageType;
};

export type ScheduledMessageListProps = {
  messages: ScheduledMessageItemProps[];
};
