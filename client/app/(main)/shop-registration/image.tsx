import { useRouter } from 'expo-router';
import ShopImageContent from '../../../components/ShopRegistration/ShopImageContent';
import { useShopProfile } from '../../../store/shop-profile/shop-profile-context';

export default function ShopImageScreen() {
  const router = useRouter();
  const { setShopImage } = useShopProfile();
  return (
    <ShopImageContent
      onNext={(image) => {
        setShopImage(image);
        router.push('home');
      }}
    />
  );
}
