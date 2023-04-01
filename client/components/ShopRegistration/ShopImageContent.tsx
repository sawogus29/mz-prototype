import { Text, View, StyleSheet, Pressable } from 'react-native';

import colors from '../../theme/colors';
import TitleButtonLayout from '../ui/TitleButtonLayout';
import { ShopInfoContentProps } from './ShopInfoContent';
import { Button, ButtonProps } from '@rneui/themed';
import IconPlus from '../../assets/images/icon-circle-plus.svg';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import OptionButton from './OptionButton';
import ScreenBackground from '../ui/ScreenBackground';

export default function ShopImageContent({ onNext }: ShopInfoContentProps) {
  return (
    <ScreenBackground>
      <TitleButtonLayout
        title={`썸네일로 사용할 거예요!${'\n'}매장 사진을 등록해주세요.`}
        buttonTitle="다음"
        footer="이제 다 왔어요!"
        onButtonPress={onNext}
      >
        <View style={styles.container}>
          <View style={styles.imagePlusContainer}>
            <Button
              title="이미지 추가하기"
              icon={
                <View>
                  <IconPlus width={40} height={40} />
                </View>
              }
              iconPosition="top"
              color={colors.GREY800}
              containerStyle={styles.plusContainer}
              style={styles.plus}
              buttonStyle={styles.plusButton}
              titleStyle={styles.plusText}
              onPress={() => launchImageLibraryAsync()}
            />
          </View>
          <View style={styles.optionContainer}>
            <OptionButton
              title="갤러리에서 추가"
              onPress={() => launchImageLibraryAsync()}
            />
            <OptionButton
              title="카메라로 촬영"
              onPress={() => launchCameraAsync()}
            />
          </View>
        </View>
      </TitleButtonLayout>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  imagePlusContainer: {
    height: 184,
    marginBottom: 7,
  },
  plusContainer: {
    height: '100%',
  },
  plus: {
    height: '100%',
  },
  plusButton: {
    height: '100%',
  },
  plusText: {
    color: colors.GREY450,
    marginTop: 12,
  },
  optionContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: '100%',
  },
});
