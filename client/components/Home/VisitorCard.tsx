import { StyleSheet, Image, View, ViewProps } from 'react-native';

import Card from '../ui/Card';
import { Text } from '@rneui/themed';
import ProgressMeter from './ProgressMeter';
import VisitorCheeringPhrase from './VisitorCheeringPhrase';

interface VisitorCardProps extends ViewProps {
  visitorToday: number;
  visitorYesterday: number;
}

export default function VisitorCard({
  visitorToday,
  visitorYesterday,
  ...props
}: VisitorCardProps) {
  return (
    <Card {...props} style={[styles.card, props.style]}>
      <View style={styles.titleContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/splash.png')}
        />
        <View>
          <Text subheader1>짭쪼름한 오후</Text>
          <Text subheader4>신시가지점</Text>
        </View>
      </View>
      <ProgressMeter
        value={visitorToday}
        maxValue={visitorYesterday}
        unit="명"
      />
      <VisitorCheeringPhrase
        visitorToday={visitorToday}
        visitorYesterday={visitorYesterday}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 16,
    paddingHorizontal: 14,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 100,
    marginRight: 8,
  },
});
