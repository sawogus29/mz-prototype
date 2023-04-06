import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
  usePathname,
  useRootNavigation,
  useRootNavigationState,
  useRouter,
} from 'expo-router';
import HomeContent from '../../../components/Home/HomeContent';
import AfterShopRegistrationOverlay from '../../../components/Home/AfterRegistrationOverlay';

// Clear 'Root Navigation State' to exit normally.
// There seems to be a BUG in expo-router.
// (At app/index.tsx) <Redirect /> does not remove 'Root Navigation State' properly
function useClearNavigationState() {
  const pathname = usePathname();
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const rootNavigationState = useRootNavigationState();

  useFocusEffect(() => {
    if (
      pathname === '/home' &&
      Object.keys(params).length === 0 &&
      rootNavigationState &&
      rootNavigationState.routes.length > 1
    ) {
      //@ts-expect-error
      // navigation.reset() works as Expected, but TypeScript emits Error
      // I don't know why...
      navigation.reset({ routes: [{ name: '(main)' }] });
    }
  });
}

export default function HomeScreen() {
  useClearNavigationState();
  const { afterShopRegistration } = useLocalSearchParams();

  return (
    <>
      <HomeContent />
      {afterShopRegistration && <AfterShopRegistrationOverlay />}
    </>
  );
}
