import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {SessionTypes} from '../Types';
import {Colors, Fonts} from '../styles';

const SessionTab: React.FC<SessionTypes.SessionTabProps> = ({
  title,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tabStyle, isSelected ? styles.selectedTabStyle : null]}>
      <Text
        style={[
          styles.tabTextStyle,
          isSelected ? styles.selectedTabTextStyle : null,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const SessionToggler: React.FC<SessionTypes.SessionTogglerProps> = (
  props
) => {
  const {showScheduled, onPress} = props;

  return (
    <View style={styles.tabsStyle}>
      <SessionTab
        title="Scheduled"
        onPress={() => {
          onPress(true);
        }}
        isSelected={showScheduled}
      />
      <SessionTab
        title="History"
        onPress={() => {
          onPress(false);
        }}
        isSelected={!showScheduled}
      />
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
