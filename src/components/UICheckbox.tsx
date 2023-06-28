import CheckBox from '@react-native-community/checkbox';
import React, { Dispatch, SetStateAction } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

type UICheckboxProps = {
    checked: boolean;
    setChecked: Dispatch<SetStateAction<boolean>>;
    label?: string;
    style?: StyleProp<ViewStyle>;
};

export const UICheckbox: React.FC<UICheckboxProps> = ({ checked, setChecked, label, style }) => {
    const onPress = () => setChecked(!checked);

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <CheckBox value={checked} boxType="square" style={styles.checkbox} />
            {label && <Text>{label}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        width: 20,
        height: 20,
        marginRight: 10
    }
});
