import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type UIButtonProps = {
    text: string;
    onPress?: () => void;
};

export const UIButton: React.FC<UIButtonProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
