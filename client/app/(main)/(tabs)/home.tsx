import {
  useFocusEffect,
  useNavigation,
  usePathname,
  useRootNavigationState,
} from 'expo-router';
import HomeContent from '../../../components/Home/HomeContent';

// Clear 'Root Navigation State' to exit normally.
// There seems to be a BUG in expo-router.
// (At app/index.tsx) <Redirect /> does not remove 'Root Navigation State' properly
function useClearNavigationState() {
  const pathname = usePathname();
  const navigation = useNavigation();
  const rootNavigationState = useRootNavigationState();

  useFocusEffect(() => {
    if (
      pathname === '/home' &&
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

  return <HomeContent />;
}
