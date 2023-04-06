import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Postcode from '@actbase/react-daum-postcode';
import { useShopProfile } from '../../../store/shop-profile/shop-profile-context';

export default function ShopAddressSearchScreen() {
  const router = useRouter();
  const { setShopAddress } = useShopProfile();

  return (
    <Postcode
      style={styles.postCode}
      //@ts-expect-error
      jsOptions={{ height: '100%' }} // for web
      onSelected={(data) => {
        setShopAddress({
          buildingAddress: data.roadAddress,
          detailAddress: '',
        });
        router.back();
      }}
      onError={() => {}}
    />
  );
}

const styles = StyleSheet.create({
  postCode: {
    flex: 1,
  },
});
