import { useRouter } from 'expo-router';
import ShopNameContent from '../../../components/ShopRegistration/ShopNameContent';
import { useShopProfile } from '../../../store/shop-profile/shop-profile-context';

export default function ShopNameScreen() {
  const router = useRouter();
  const { setShopName } = useShopProfile();

  return (
    <ShopNameContent
      onNext={(brandName, branchName) => {
        // console.log('next');

        setShopName({ brandName, branchName });
        router.push('./address');
      }}
    />
  );
}
