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

//the first component type props
export enum MessageTypeEnum {
  Sessions = 'Sessions',
  Requests = 'Requests',
}

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
export enum SessionMessageTypeEnum {
  Scheduled = 'Scheduled',
  History = 'History',
}

export type SessionMessageItemProps = BaseMessageProps & {
  notes: string;
  durationInHours: number;
  messageType: SessionMessageTypeEnum;
};

export type SessionMessageListProps = {
  messages: SessionMessageItemProps[];
};

export type SessionTogglerProps = {
  currentMessageType: SessionMessageTypeEnum;
  onPress: (selectedMessageStatus: SessionMessageTypeEnum) => void;
};
