import { useState } from 'react';
import { StyleSheet } from 'react-native';

import TitleButtonLayout from '../ui/TitleButtonLayout';
import LabledCountingTextInput from './LabeledCountingTextInput';
import CheckBox from '../ui/CheckBox';
import ScreenBackground from '../ui/ScreenBackground';

function verifyBranchName(branchName: string) {
  // TODO: implement REAL verification
  return !(branchName === '중복'); // Mock
}

function verifyNext(brandName: string, branchName: string, hasBranch: boolean) {
  return (
    brandName.length > 0 &&
    (!hasBranch || (branchName.length > 0 && verifyBranchName(branchName)))
  );
}

interface ShopNameContentProps {
  onNext: (brandName: string, branchName: string) => void;
}

export default function ShopNameContent({ onNext }: ShopNameContentProps) {
  const [brandName, setBrandName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [hasBranch, setHasBranch] = useState(true);
  const [isValidBranchName, setIsValidBranchName] = useState(true);

  const clearBranchName = () => {
    setBranchName('');
    setIsValidBranchName(true);
  };

  return (
    <ScreenBackground>
      <TitleButtonLayout
        title={`매장의 이름이 무엇인가요?${'\n'}지점까지 알려주세요`}
        buttonTitle="다음"
        buttonDisabled={!verifyNext(brandName, branchName, hasBranch)}
        onButtonPress={() => onNext(brandName, branchName)}
      >
        <LabledCountingTextInput
          label="매장 명"
          maxLength={30}
          containerStyle={styles.brandNameContainer}
          placeholder="미어제트 무인매장"
          value={brandName}
          onChangeText={setBrandName}
        />
        <LabledCountingTextInput
          label="지점 명"
          maxLength={30}
          containerStyle={styles.branchNameContainer}
          placeholder="강남점"
          caution="중복된 지점이에요."
          showCaution={!isValidBranchName}
          editable={hasBranch}
          value={branchName}
          onChangeText={(text) => {
            setBranchName(text);
            setIsValidBranchName(verifyBranchName(text));
          }}
        />
        <CheckBox
          title="지점이 따로 없어요"
          checked={!hasBranch}
          onPress={() => {
            setHasBranch((prev) => !prev);
            clearBranchName();
          }}
          containerStyle={styles.checkBoxContainer}
        />
      </TitleButtonLayout>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  brandNameContainer: {
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
