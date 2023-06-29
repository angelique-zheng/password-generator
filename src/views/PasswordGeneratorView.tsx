import Clipboard from '@react-native-clipboard/clipboard';
import Slider from '@react-native-community/slider';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StrengthIndicator } from '../components/StrengthIndicator';
import { UIButton } from '../components/UIButton';
import { UICheckbox } from '../components/UICheckbox';
import { UIIcon } from '../components/UIIcon';
import { icons } from '../res/icons';
import { strings } from '../res/strings';

export const PasswordGeneratorView: React.FC = () => {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(10);
    const [selectLowercase, setSelectLowercase] = useState(true);
    const [selectUppercase, setSelectUppercase] = useState(true);
    const [selectNumbers, setSelectNumbers] = useState(false);
    const [selectSymbols, setSelectSymbols] = useState(false);

    const getAlphabet = useCallback(() => {
        let alphabet = '';
        if (selectLowercase) {
            alphabet += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (selectUppercase) {
            alphabet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (selectNumbers) {
            alphabet += '0123456789';
        }
        if (selectSymbols) {
            alphabet += '^!$%&|[](){}:;.,*+-#@<>~';
        }
        return alphabet;
    }, [selectLowercase, selectUppercase, selectNumbers, selectSymbols]);

    const generatePassword = useCallback(() => {
        const alphabet = getAlphabet();
        let newPassword = '';

        for (let i = 0; i < passwordLength; i++) {
            newPassword += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        setPassword(newPassword);
    }, [passwordLength, getAlphabet]);

    useEffect(() => generatePassword(), []);

    const copyToClipboard = useCallback(() => {
        Clipboard.setString(password);
    }, [password]);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{strings.appTitle}</Text>
            <TouchableOpacity style={styles.passwordContainer} onPress={copyToClipboard}>
                <Text style={styles.password}>{password}</Text>
                <UIIcon icon={icons.copyToClipboard} width={36} height={36} />
            </TouchableOpacity>
            <StrengthIndicator password={password} />
            <View style={styles.passwordLengthContainer}>
                <Text>{strings.passwordLength}</Text>
                <Text>{passwordLength}</Text>
            </View>
            <Slider
                style={styles.passwordLengthSlider}
                value={passwordLength}
                minimumValue={2}
                maximumValue={100}
                minimumTrackTintColor="#537DD6"
                maximumTrackTintColor="#DEDCDC"
                onValueChange={setPasswordLength}
                step={1}
            />
            <Text>{strings.passwordOptions}</Text>
            <View style={styles.optionsContainer}>
                <UICheckbox
                    label="Lowercase (a-z)"
                    checked={selectLowercase}
                    setChecked={setSelectLowercase}
                    style={styles.checkbox}
                />
                <UICheckbox
                    label="Uppercase (A-Z)"
                    checked={selectUppercase}
                    setChecked={setSelectUppercase}
                    style={styles.checkbox}
                />
                <UICheckbox
                    label="Number (0-9)"
                    checked={selectNumbers}
                    setChecked={setSelectNumbers}
                    style={styles.checkbox}
                />
                <UICheckbox
                    label="Symbols (^!$%&...)"
                    checked={selectSymbols}
                    setChecked={setSelectSymbols}
                    style={styles.checkbox}
                />
            </View>
            <UIButton text={strings.generate} onPress={generatePassword} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 20
    },
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#A1A1A1',
        borderRadius: 2,
        marginTop: 20,
        paddingHorizontal: 6,
        opacity: 1
    },
    password: {
        width: '80%',
        marginHorizontal: 10,
        paddingVertical: 10
    },
    passwordLengthContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    passwordLengthSlider: {
        width: '100%'
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    checkbox: {
        width: '50%',
        marginVertical: 6
    },
    button: {
        marginVertical: 20,
        backgroundColor: '#3680F6',
        borderColor: '#3680F6',
        borderStyle: 'solid',
        borderWidth: 2,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
