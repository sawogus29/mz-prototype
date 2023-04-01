import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';
import ShopNameContent from './ShopNameContent';
import ShopAddressContent from './ShopAddressContent';
import ShopCategoryContent from './ShopCategoryContent';
import ShopImageContent from './ShopImageContent';

const PAGES = [
  ShopNameContent,
  ShopAddressContent,
  ShopCategoryContent,
  ShopImageContent,
];

export default function ShopRegistrationContent() {
  const [pageIndex, setPageIndex] = useState(3);

  const PageContent = PAGES[pageIndex];

  const nextHandler = () => {
    setPageIndex((prev) => prev + 1);
  };

  return (
    <View style={styles.background}>
      <PageContent onNext={nextHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.GREY900,
  },
});
