import React from 'react';

import { View, FlatList, StyleSheet } from 'react-native';

import { ActionListProps, ActionListItemProps } from './Interface';
import ListItem from './ListItem';

const ActionList: React.FC<ActionListProps> = ({ items }) => {
    return (
        <View style={styles.listStyle}>
            <FlatList
                keyExtractor={(item: ActionListItemProps, index: number) =>
                    index.toString()
                }
                data={items}
                renderItem={({ item }: { item: ActionListItemProps }) => (
                    <ListItem title={item.title} route={item.route} />
                )}
            />
        </View>
    );
};

export default ActionList;

const styles = StyleSheet.create({
    listStyle: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 15,
    },
});
