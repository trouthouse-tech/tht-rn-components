import {BaseMessageProps} from '../Base/';

export enum SessionMessageTypeEnum {
  Scheduled = 'Scheduled',
  History = 'History',
}

export type SessionMessageItemProps = BaseMessageProps & {
  notes: string;
  durationInHours: number;
};

export type SessionMessageListProps = {
  sessions: SessionMessageItemProps[];
};

export type SessionTogglerProps = {
  currentMessageType: SessionMessageTypeEnum;
  onPress: (selectedMessageStatus: SessionMessageTypeEnum) => void;
};
