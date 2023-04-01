import { useRouter } from 'expo-router';
import ShopCategoryContent from '../../../components/ShopRegistration/ShopCategoryContent';

export default function ShopCategoryScreen() {
  const router = useRouter();
  return (
    <ShopCategoryContent
      onNext={() => {
        router.push('./image');
      }}
    />
  );
}
