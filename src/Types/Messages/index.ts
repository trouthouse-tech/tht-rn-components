import {BaseMessageProps} from '../Base/';

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
