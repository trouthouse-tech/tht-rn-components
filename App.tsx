/**
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import ActionList from './src/ActionList/ActionList';
import { ActionListProps } from './src/ActionList/Interface';

declare const global: { HermesInternal: null | {} };

const App = () => {
    const actions: ActionListProps = {
        items: [
            {
                title: 'Edit Account',
                route: 'EditAccount',
            },
            {
                title: 'Traffic',
                route: 'Traffic',
            },
            {
                title: 'Terms and Conditions',
                route: 'TermsAndConditions',
            },
            {
                title: 'Notifications',
                route: 'Notifications',
            },
        ],
    };

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Settings</Text>
                    <ActionList items={actions.items} />
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 40,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        paddingVertical: 10,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
