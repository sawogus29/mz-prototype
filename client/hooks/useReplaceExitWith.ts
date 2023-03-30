import { useNavigation, useRouter } from 'expo-router';
import { Href } from 'expo-router/build/link/href';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

// Prevent Android BackButton from exiting
// instead it redirects to href
export function useReplaceExitWith(href: Href) {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    const subscribe = BackHandler.addEventListener('hardwareBackPress', () => {
      // Can't Go Back, so replace exit with href
      if (!navigation.canGoBack()) {
        console.log('instead of exit, go ' + href);
        router.replace(href);
        return true;
      }

      // Can Go Back, so let default behavior happen
      return false;
    });

    return () => subscribe.remove();
  }, [BackHandler, router, navigation, href]);
}
