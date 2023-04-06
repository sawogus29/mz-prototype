import { useNavigation, useRouter } from 'expo-router';
import ShopAddressContent from '../../../components/ShopRegistration/ShopAddressContent';
import { useContext, useEffect, useState } from 'react';
import { useShopProfile } from '../../../store/shop-profile/shop-profile-context';

export default function ShopAddressScreen() {
  const router = useRouter();
  const { shopProfile, setShopAddress } = useShopProfile();

  return (
    <ShopAddressContent
      buildingAddress={shopProfile.address?.buildingAddress || ''}
      onSearch={() => {
        router.push('./address-search');
      }}
      onNext={(buildingAddress, detailAddress) => {
        setShopAddress({ buildingAddress, detailAddress });
        router.push('./category');
      }}
    />
  );
}
