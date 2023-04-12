import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'expo-router';
import ShopCard from './ShopCard';
import ScreenBackground from '../ui/ScreenBackground';
import ScreenDivider from '../ui/ScreenDivier';
import useGrid from '../../hooks/useGrid';

const HELLO_QUERY = gql`
  {
    hello
  }
`;

const shopDatas = [
  {
    id: '1',
    brandName: '매장명',
    branchName: '문학점',
    numNotifications: 3,
    numVisitor: 78,
    numIssues: 5,
  },
  {
    id: '2',
    brandName: '매장명',
    branchName: '문학점',
    numNotifications: 3,
    numVisitor: 78,
    numIssues: 5,
  },
  {
    id: '3',
    brandName: '매장명',
    branchName: '문학점',
    numNotifications: 0,
    numVisitor: 78,
    numIssues: 5,
  },
];

export default function HomeContent() {
  const { loading, error, data } = useQuery(HELLO_QUERY);
  const [gridLayoutHandler, gridStyle, gridItemStyle] = useGrid(2, 16, 20);

  return (
    <ScreenBackground>
      <View style={[styles.section, styles.summarySection]}>
        <Text headline1 style={styles.sectionTitle}>
          오늘의 점포 현황
        </Text>
        <View style={gridStyle} onLayout={gridLayoutHandler}>
          {shopDatas.map((item, i) => (
            <ShopCard style={gridItemStyle} key={item.id} {...item} />
          ))}
        </View>
      </View>
      <ScreenDivider />
      <View style={[styles.section, styles.visitorSection]}>
        <Text headline1 style={styles.sectionTitle}>
          어제와 비교한 오늘의 방문자수는?
        </Text>
      </View>
      <Link href="/(main)/shop-registration">
        <Text h1>매장등록</Text>
      </Link>
      <Text>Hello {data ? data.hello : '?'}</Text>
      <Text bigTitle>bigTitle</Text>
      <Text headline1>headline1</Text>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
  section: {
    width: '100%',
  },
  sectionTitle: {
    marginBottom: 24,
  },
  summarySection: {
    marginTop: 12,
    marginBottom: 40,
  },
  visitorSection: {
    marginTop: 36,
  },
});
