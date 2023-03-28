import { Button } from '@rneui/themed';
import { View, Text } from 'react-native';
import { useCameraPermissions } from 'expo-image-picker';

interface PermissionContentProps {
  requestPermissions: () => void;
}

export default function PermissionContent(props: PermissionContentProps) {
  return (
    <View>
      <Text>Permission Screen</Text>
      <Text>Permission Screen</Text>
      <Text>Permission Screen</Text>
      <Text>Permission Screen</Text>
      <Text>Permission Screen</Text>
      <Text>Permission Screen</Text>
      <Text>Permission Screen</Text>
      <Button
        title="hi"
        onPress={() => {
          props.requestPermissions();
        }}
      />
    </View>
  );
}
