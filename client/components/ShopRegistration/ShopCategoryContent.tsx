import { Text, View, StyleSheet } from 'react-native';

import colors from '../../theme/colors';
import TitleButtonLayout from '../ui/TitleButtonLayout';
import { ShopInfoContentProps } from './ShopInfoContent';
import ChipGroup from '../ui/ChipGroup';
import ScreenBackground from '../ui/ScreenBackground';

const CATEGRIES = [
  '가챠샵',
  '자판기',
  '카페',
  '아이스크림',
  '패스트푸드',
  '편의점',
  '도소매',
];

export default function ShopCategoryContent({ onNext }: ShopInfoContentProps) {
  return (
    <ScreenBackground>
      <TitleButtonLayout
        title="매장의 카테고리를 선택해주세요!"
        buttonTitle="다음"
        footer="한가지만 선택할 수 있어요."
        onButtonPress={onNext}
      >
        <View style={styles.container}>
          <ChipGroup titles={CATEGRIES} />
        </View>
      </TitleButtonLayout>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});
