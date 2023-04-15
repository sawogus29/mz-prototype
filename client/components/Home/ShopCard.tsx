import { Image, View, StyleSheet, ViewProps } from 'react-native';
import { Text } from '@rneui/themed';
import colors from '../../theme/colors';
import Card from '../ui/Card';
import ShopCardDataItem from './ShopCardDataItem';

interface ShopCardProps extends ViewProps {
  brandName: string;
  branchName: string;
  numNotifications: number;
  numVisitor: number;
  numIssues: number;
}

export default function ShopCard({
  brandName,
  branchName,
  numNotifications,
  numVisitor,
  numIssues,
  ...props
}: ShopCardProps) {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <Card style={styles.card}>
        <Image
          style={styles.image}
          source={require('../../assets/images/splash.png')}
        />
        <View style={styles.nameContainer}>
          <Text subheader1>{brandName}</Text>
          <Text subheader4>{branchName}</Text>
        </View>
        <View style={styles.dataContainer}>
          <ShopCardDataItem
            title="새로운 알림"
            amount={numNotifications}
            unit="건"
            highlight
          />
          <ShopCardDataItem
            title="누적 방문자 수"
            amount={numVisitor}
            unit="명"
          />
          <ShopCardDataItem
            title="이슈 발생건 수"
            amount={numIssues}
            unit="건"
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 28,
    // backgroundColor: 'blue',
  },
  card: {
    width: '100%',
    // width: 200,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 100,
    marginTop: -28, // half of 56
    marginBottom: 13,
  },
  nameContainer: {
    marginBottom: 9,
    alignItems: 'center',
  },
  dataContainer: {
    width: '100%',
    alignItems: 'stretch',
    rowGap: 4,
  },
});
