import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import TitleButtonLayout from '../ui/TitleButtonLayout';
import ChipGroup from '../ui/ChipGroup';
import ScreenBackground from '../ui/ScreenBackground';
import {
  CATEGORIES,
  ShopCategory,
} from '../../store/shop-profile/shop-profile-context';

interface ShopCategoryContentProps {
  onNext: (category: ShopCategory) => void;
}

export default function ShopCategoryContent({
  onNext,
}: ShopCategoryContentProps) {
  const [category, setCategory] = useState<ShopCategory | undefined>(undefined);

  return (
    <ScreenBackground>
      <TitleButtonLayout
        title="매장의 카테고리를 선택해주세요!"
        buttonTitle="다음"
        footer="한가지만 선택할 수 있어요."
        buttonDisabled={!category}
        onButtonPress={() => onNext(category!)}
      >
        <View style={styles.container}>
          <ChipGroup
            titles={[...CATEGORIES]}
            onChange={(i) => {
              setCategory(CATEGORIES[i]);
            }}
          />
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
