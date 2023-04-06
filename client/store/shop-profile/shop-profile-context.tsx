import React, { useReducer, useState } from 'react';

type ShopName = {
  brandName: string;
  branchName: string;
};

type ShopAddress = {
  buildingAddress: string;
  detailAddress: string;
};

export const CATEGORIES = [
  '가챠샵',
  '자판기',
  '카페',
  '아이스크림',
  '패스트푸드',
  '편의점',
  '도소매',
] as const;
export type ShopCategory = typeof CATEGORIES[number];

type ImageUri = string;
export type ShopImage = ImageUri | null;

type ShopProfile = {
  name: ShopName | undefined;
  address: ShopAddress | undefined;
  category: ShopCategory | undefined;
  image: ShopImage | undefined;
};

type ShopProfileContextObj = {
  shopProfile: ShopProfile;
  setShopProfile: (shopProfile: ShopProfile) => void;
  setShopName: (shopName: ShopName) => void;
  setShopAddress: (shopAddress: ShopAddress) => void;
  setShopCategory: (shopCategory: ShopCategory) => void;
  setShopImage: (shopImage: ShopImage) => void;
};

const ShopProfileContext = React.createContext<ShopProfileContextObj>(
  {} as ShopProfileContextObj
);

export function useShopProfile() {
  return React.useContext(ShopProfileContext);
}

export function ShopProfileProvider(props: React.PropsWithChildren) {
  const [name, setName] = useState<ShopName | undefined>(undefined);
  const [address, setAddress] = useState<ShopAddress | undefined>(undefined);
  const [category, setCategory] = useState<ShopCategory | undefined>(undefined);
  const [image, setImage] = useState<ShopImage | undefined>(undefined);

  const shopProfile = {
    name,
    address,
    category,
    image,
  };

  const setShopProfile = (shopProfile: ShopProfile) => {
    setName(shopProfile.name);
    setAddress(shopProfile.address);
    setCategory(shopProfile.category);
    setImage(shopProfile.image);
  };

  return (
    <ShopProfileContext.Provider
      value={{
        shopProfile,
        setShopProfile,
        setShopName: setName,
        setShopAddress: setAddress,
        setShopCategory: setCategory,
        setShopImage: setImage,
      }}
    >
      {props.children}
    </ShopProfileContext.Provider>
  );
}
