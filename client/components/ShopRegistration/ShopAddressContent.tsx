import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import TitleButtonLayout from '../ui/TitleButtonLayout';
import { ShopInfoContentProps } from './ShopInfoContent';
import { Button } from '@rneui/themed';
import colors from '../../theme/colors';
import TextInput from '../ui/TextInput';
import ScreenBackground from '../ui/ScreenBackground';

export default function ShopAddressContent({ onNext }: ShopInfoContentProps) {
  const [hasBranch, setHasBranch] = useState(false);

  return (
    <ScreenBackground>
      <TitleButtonLayout
        title="매장의 위치를 알려주세요."
        buttonTitle="다음"
        onButtonPress={onNext}
      >
        <View style={styles.container}>
          <View style={styles.buildingAddressContainer}>
            <TextInput style={styles.buildingAddressInput} editable={false} />
            <Button
              title="주소검색"
              color={colors.AI_BLUE_LIGHT}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
          </View>
          <TextInput style={styles.detailAddressInput} />
        </View>
      </TitleButtonLayout>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    marginTop: 30,
  },
  buildingAddressContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginBottom: 8,
  },
  buildingAddressInput: {
    // borderColor: 'green',
    flexGrow: 1,
    height: 46, // fixed height is not ideal, but no choice because of RNE Button
  },
  detailAddressInput: {
    // borderColor: 'green',
    height: 46, // fixed height is not ideal, but no choice because of RNE Button
  },
  buttonContainer: {
    // backgroundColor: 'purple',
    marginLeft: 8,
  },
  button: {
    // backgroundColor: 'cyan',
    height: 46, // fixed height is not ideal, but no choice because of RNE Button
    paddingHorizontal: 23,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.AI_BLUE,
  },
});
