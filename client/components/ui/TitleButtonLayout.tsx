import { Text, Button } from '@rneui/themed';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import colors from '../../theme/colors';
import React from 'react';

interface TitleButtonLayoutProps {
  children: React.ReactNode;
  title: string;
  buttonTitle: string;
  header?: string;
  footer?: string;
  onButtonPress?: (event: GestureResponderEvent) => void;
}

export default function TitleButtonLayout({
  children,
  title,
  buttonTitle,
  header,
  footer,
  onButtonPress,
}: TitleButtonLayoutProps) {
  return (
    <View style={styles.layoutContainer}>
      {header}
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        {children}
      </View>
      {footer && <Text style={styles.footer}>{footer}</Text>}
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
  footer: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.GREY450,
    marginTop: -36,
    marginBottom: 20,
  },
});
