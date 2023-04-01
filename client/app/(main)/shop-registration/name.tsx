import { useRouter } from 'expo-router';
import ShopNameContent from '../../../components/ShopRegistration/ShopNameContent';

export default function ShopNameScreen() {
  const router = useRouter();
  return (
    <ShopNameContent
      onNext={() => {
        router.push('./address');
      }}
    />
  );
}
