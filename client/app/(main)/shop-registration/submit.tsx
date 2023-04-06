import { useRouter } from 'expo-router';

import {
  ShopProfile,
  useShopProfile,
} from '../../../store/shop-profile/shop-profile-context';
import { useEffect } from 'react';

function verifyShopProfile(shopProfile: ShopProfile) {
  const { name, address, category, image } = shopProfile;

  // TODO: Implement real verification
  return name && address && category;
}

function submitToServer(shopProfile: ShopProfile) {
  // TODO: Implement real submission
  console.log('submit to server');
}

export default function SubmitScreen() {
  const router = useRouter();
  const { shopProfile } = useShopProfile();

  /*
  if (!verifyShopProfile(shopProfile)) {
    router.back();
    return;
  }
  */

  // implement submission
  submitToServer(shopProfile);

  // TODO: handle submit error

  // after submission success, go home
  useEffect(() => {
    router.replace({
      pathname: '/(main)/(tabs)/home',
      params: {
        afterShopRegistration: true,
      },
    });
  }, []);

  // TODO: handle Loading State
  return;
}
