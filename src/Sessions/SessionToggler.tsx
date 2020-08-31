import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {SessionTypes} from '../Types';
import {Colors, Fonts} from '../styles';

export const SessionToggler: React.FC<SessionTypes.SessionTogglerProps> = (
  props
) => {
  const {currentMessageType, onPress} = props;

  return (
    <View style={styles.tabsStyle}>
      {Object.values(SessionTypes.SessionMessageTypeEnum).map(
        (key: SessionTypes.SessionMessageTypeEnum, index: number) => {
          const isSelected = currentMessageType === key;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                onPress(key);
              }}
              style={[
                styles.tabStyle,
                isSelected ? styles.selectedTabStyle : null,
              ]}>
              <Text
                style={[
                  styles.tabTextStyle,
                  isSelected ? styles.selectedTabTextStyle : null,
                ]}>
                {SessionTypes.SessionMessageTypeEnum[key]}
              </Text>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsStyle: {
    flexDirection: 'row',
    borderBottomColor: Colors.Grey2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 5,
    marginHorizontal: 5,
  },
  tabStyle: {
    fontSize: Fonts.normal,
    color: Colors.Grey,
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
  tabTextStyle: {
    color: Colors.Black,
    fontSize: Fonts.large,
  },
  selectedTabStyle: {
    fontSize: Fonts.normal,
    borderBottomColor: Colors.Black,
    borderBottomWidth: 3,
  },
  selectedTabTextStyle: {
    fontWeight: 'bold',
  },
});
