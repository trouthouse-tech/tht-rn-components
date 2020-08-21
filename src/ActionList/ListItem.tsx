import React from 'react';

import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

import { ActionListItemProps } from './ListTypes';
import { Colors } from '../styles/Color';

const ListItem: React.FC<ActionListItemProps> = ({ title, route }) => {
    const onPress = () => {
        console.log(route);
    };

    return (
        <View style={styles.listItemStyle}>
            <TouchableOpacity onPress={onPress} style={styles.touchStyle}>
                <View>
                    <Text style={styles.textStyle}>{title}</Text>
                </View>
                <Image
                    width={20}
                    height={20}
                    source={require('./img/rightArrow.png')}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    listItemStyle: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 20,
        paddingVertical: 20,
        borderRadius: 15,
    },
    touchStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.Black,
    },
});
