import { useRouter } from 'expo-router';
import ShopAddressContent from '../../../components/ShopRegistration/ShopAddressContent';

export default function ShopAddressScreen() {
  const router = useRouter();
  return (
    <ShopAddressContent
      onNext={() => {
        router.push('./category');
      }}
    />
  );
}
