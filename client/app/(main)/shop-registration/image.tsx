import { useRouter } from 'expo-router';
import ShopImageContent from '../../../components/ShopRegistration/ShopImageContent';

export default function ShopImageScreen() {
  const router = useRouter();
  return (
    <ShopImageContent
      onNext={() => {
        router.push('home');
      }}
    />
  );
}
