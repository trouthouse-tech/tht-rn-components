import React from 'react';
import moment from 'moment';

import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import {MessageItemProps, MessageStatusEnum} from './Types';
import {Colors} from '../styles/Color';

export const MessageItem: React.FC<MessageItemProps> = (props) => {
  const {
    name,
    date,
    messageType,
    status,
    image = 'https://via.placeholder.com/150',
  } = props;
  return (
    <View style={styles.messageStyle}>
      <View>
        <Text style={styles.nameTextStyle}>{name}</Text>

        {status !== MessageStatusEnum.Completed ? (
          <View style={styles.dateTextViewStyle}>
            <Text style={styles.dateDisplayTextStyle}>
              {moment(date).format('DD/MM/YY')}
            </Text>
            <Text style={styles.dateDisplayTextStyle}>
              {moment(date).format('h:mm a')}
            </Text>
          </View>
        ) : (
          <Text style={styles.statusDisplayTextStyle}>{status}</Text>
        )}
        <Text>{messageType}</Text>
      </View>
      <Image source={{uri: image}} style={styles.messageImgStyle} />
    </View>
  );
};

const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  messageStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  nameTextStyle: {
    color: Colors.Black,
    fontSize: 20,
    fontWeight: '700',
  },
  dateTextViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 4,
  },
  dateDisplayTextStyle: {
    paddingHorizontal: 3,
    fontSize: 16,
    fontWeight: '600',
  },
  statusDisplayTextStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  messageImgStyle: {
    height: deviceHeight / 7,
    width: deviceHeight / 7,
    borderRadius: 200,
  },
});
