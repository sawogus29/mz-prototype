import { Text, Button } from '@rneui/themed';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import colors from '../../theme/colors';

interface TitleButtonLayoutProps {
  children: React.ReactNode;
  title: string;
  buttonTitle: string;
  onButtonPress?: (event: GestureResponderEvent) => void;
}

export default function TitleButtonLayout({
  children,
  title,
  buttonTitle,
  onButtonPress,
}: TitleButtonLayoutProps) {
  return (
    <View style={styles.layoutContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        {children}
      </View>
      <Button
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
        title={buttonTitle}
        onPress={onButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 600,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  contentContainer: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  buttonContainer: { marginBottom: 62 },
  button: { paddingVertical: 15 },
  buttonTitle: { fontSize: 16, fontWeight: '400', color: colors.GREY800 },
});
