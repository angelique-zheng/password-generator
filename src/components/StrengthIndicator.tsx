import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import zxcvbn from 'zxcvbn';

type StrengthIndicatorProps = {
    password: string;
};

export const StrengthIndicator: React.FC<StrengthIndicatorProps> = ({ password }) => {
    const { score } = useMemo(() => zxcvbn(password), [password]);
    const width = useMemo(() => (score * 100) / 4, [score]);
    const textIndicator = useMemo(() => {
        switch (score) {
            case 0:
                return 'Very weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fear';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return '';
        }
    }, [score]);
    const indicatorColor = useMemo(() => {
        switch (score) {
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9BC158';
            case 4:
                return '#00B500';
            default:
                return 'none';
        }
    }, [score]);

    return (
        <>
            <View style={styles.indicatorContainer}>
                <View style={[styles.indicator, { backgroundColor: indicatorColor, width: `${width}%` }]} />
            </View>
            <Text style={styles.textIndicator}>{textIndicator}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    indicatorContainer: {
        height: 4,
        backgroundColor: '#EBEDEE',
        marginTop: 12,
        marginHorizontal: 2
    },
    indicator: {
        height: 4,
        backgroundColor: '#FFAD00'
    },
    textIndicator: {
        alignSelf: 'flex-end'
    }
});
