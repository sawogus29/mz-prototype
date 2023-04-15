import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import TitleButtonLayout from '../ui/TitleButtonLayout';
import { Button } from '@rneui/themed';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import OptionButton from './OptionButton';
import ScreenBackground from '../ui/ScreenBackground';
import { ShopImage } from '../../store/shop-profile/shop-profile-context';
import PlusCardButton from '../ui/PlusCardButton';

type LaunchAsync = typeof launchCameraAsync;

interface ShopImageContentProps {
  onNext: (image: ShopImage) => void;
}

export default function ShopImageContent({ onNext }: ShopImageContentProps) {
  const [image, setImage] = useState<ShopImage>(null);

  const launchAndSet = (launchAsync: LaunchAsync) => async () => {
    const { assets } = await launchAsync();
    if (!assets) {
      return;
    }
    setImage(assets[0].uri);
  };

  const launchCameraAndSet = launchAndSet(launchCameraAsync);
  const launchLibraryAndSet = launchAndSet(launchImageLibraryAsync);

  const imageOrButton = image ? (
    <Image style={styles.image} source={{ uri: image }} />
  ) : (
    <PlusCardButton
      containerStyle={styles.plusCardButton}
      title="이미지 추가하기"
      onPress={launchLibraryAndSet}
    />
  );

  return (
    <ScreenBackground>
      <TitleButtonLayout
        title={`썸네일로 사용할 거예요!${'\n'}매장 사진을 등록해주세요.`}
        buttonTitle="다음"
        footer="이제 다 왔어요!"
        buttonDisabled={!image}
        onButtonPress={() => onNext(image)}
      >
        <View style={styles.container}>
          <View style={styles.imageOrButtonContainer}>{imageOrButton}</View>
          <View style={styles.optionContainer}>
            <OptionButton
              title="갤러리에서 추가"
              onPress={launchLibraryAndSet}
            />
            <OptionButton title="카메라로 촬영" onPress={launchCameraAndSet} />
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
  imageOrButtonContainer: {
    height: 184,
    marginBottom: 7,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  optionContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: '100%',
  },
  plusCardButton: {
    height: '100%',
  },
});
