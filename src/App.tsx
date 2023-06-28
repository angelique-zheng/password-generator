/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { PasswordGeneratorView } from './views/PasswordGeneratorView';

export const App: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PasswordGeneratorView />
        </SafeAreaView>
    );
};
