import {BaseMessageProps} from '../Base/';

export type SessionTabProps = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
};

export type SessionMessageItemProps = BaseMessageProps & {
  notes: string;
  durationInHours: number;
};

export type SessionMessageListProps = {
  sessions: SessionMessageItemProps[];
};

export type SessionTogglerProps = {
  showScheduled: boolean;
  onPress: (showScheduled: boolean) => void;
};
