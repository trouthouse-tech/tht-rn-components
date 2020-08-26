import {BaseMessageProps} from '../Base/';

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
