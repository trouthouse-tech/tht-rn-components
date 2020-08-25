import React from 'react';
import moment from 'moment';

import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import {MessageTypes} from '../Types';
import {Colors, Fonts} from '../styles';

export const SessionItem: React.FC<MessageTypes.SessionMessageItemProps> = (
  props
) => {
  const {
    name,
    date,
    status,
    image = 'https://via.placeholder.com/150',
    notes,
    durationInHours,
  } = props;
  return (
    <View style={styles.messageStyle}>
      <View>
        <Text style={styles.nameTextStyle}>{name}</Text>

        <Text>{notes}</Text>

        {status !== MessageTypes.MessageStatusEnum.Completed ? (
          <View style={styles.dateTextViewStyle}>
            <Text style={styles.dateDisplayTextStyle}>
              {moment(date).format('DD/MM/YY')}
            </Text>
            <Text style={styles.dateDisplayTextStyle}>
              {moment(date).format('h:mm a')}
            </Text>
            <Text style={styles.dateDisplayTextStyle}>
              {durationInHours} hr{durationInHours > 1 ? 's' : ''}
            </Text>
          </View>
        ) : (
          <Text style={styles.statusDisplayTextStyle}>{status}</Text>
        )}
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  nameTextStyle: {
    color: Colors.Black,
    fontSize: Fonts.large,
    fontWeight: '700',
  },
  dateTextViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 4,
  },
  dateDisplayTextStyle: {
    paddingHorizontal: 3,
    fontSize: Fonts.small,
    fontWeight: '600',
  },
  statusDisplayTextStyle: {
    fontSize: Fonts.small,
    fontWeight: '600',
  },
  messageImgStyle: {
    height: deviceHeight / 7,
    width: deviceHeight / 7,
    borderRadius: 200,
  },
});
