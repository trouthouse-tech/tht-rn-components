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

export enum MessageTypeEnum {
  Sessions = 'Sessions',
  Requests = 'Requests',
}

export enum ScheduledMessageTypeEnum {
  Scheduled = 'Scheduled',
  History = 'History',
}

//the first component type props
export type MessageItemProps = BaseMessageProps & {
  messageType: MessageTypeEnum;
};

export type MessageListProps = {
  messages: MessageItemProps[];
};

export type MessageTogglerProps = {
  currentMessageType: MessageTypeEnum;
  onPress: (selectedMessageStatus: MessageTypeEnum) => void;
};

//the second component type props
export type ScheduledMessageItemProps = BaseMessageProps & {
  notes: string;
  durationInHours: number;
  messageType: ScheduledMessageTypeEnum;
};

export type ScheduledMessageListProps = {
  messages: ScheduledMessageItemProps[];
};
