import { useState } from 'react';
import { StyleSheet } from 'react-native';

import TitleButtonLayout from '../ui/TitleButtonLayout';
import LabledCountingTextInput from './LabeledCountingTextInput';
import CheckBox from '../ui/CheckBox';
import { ShopInfoContentProps } from './ShopInfoContent';

export default function ShopNameContent({ onNext }: ShopInfoContentProps) {
  const [hasBranch, setHasBranch] = useState(false);

  return (
    <TitleButtonLayout
      title={`매장의 이름이 무엇인가요?${'\n'}지점까지 알려주세요`}
      buttonTitle="다음"
      onButtonPress={onNext}
    >
      <LabledCountingTextInput
        label="매장 명"
        maxLength={30}
        containerStyle={styles.storeNameContainer}
        placeholder="미어제트 무인매장"
      />
      <LabledCountingTextInput
        label="지점 명"
        maxLength={30}
        containerStyle={styles.branchNameContainer}
        placeholder="강남점"
        caution="중복된 지점이에요."
        showCaution
        editable={hasBranch}
      />
      <CheckBox
        title="지점이 따로 없어요"
        checked={!hasBranch}
        onPress={() => setHasBranch((prev) => !prev)}
        containerStyle={styles.checkBoxContainer}
      />
    </TitleButtonLayout>
  );
}

const styles = StyleSheet.create({
  storeNameContainer: {
    marginTop: 24,
    marginBottom: 20,
  },
  branchNameContainer: {
    marginBottom: 18,
  },
  checkBoxText: {
    color: '#5A617C',
  },
  checkBoxContainer: {
    backgroundColor: 'none',
  },
});
