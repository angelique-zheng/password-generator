import React from 'react';
import { StyleSheet, View } from 'react-native';

type UIDividerProps = {
    direction: 'vertical' | 'horizontal';
};

export const UIDivider: React.FC<UIDividerProps> = ({ direction }) => {
    return <View style={styles[direction]} />;
};

const styles = StyleSheet.create({
    vertical: {
        height: '100%',
        width: 1,
        backgroundColor: '#A1A1A1'
    },
    horizontal: {
        height: 1,
        width: '100%',
        backgroundColor: '#A1A1A1'
    }
});
