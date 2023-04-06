import { useRouter } from 'expo-router';
import ShopCategoryContent from '../../../components/ShopRegistration/ShopCategoryContent';
import { useShopProfile } from '../../../store/shop-profile/shop-profile-context';

export default function ShopCategoryScreen() {
  const router = useRouter();
  const { setShopCategory } = useShopProfile();

  return (
    <ShopCategoryContent
      onNext={(category) => {
        setShopCategory(category);
        router.push('./image');
      }}
    />
  );
}
