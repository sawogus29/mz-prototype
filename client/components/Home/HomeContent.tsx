import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'expo-router';
import ShopCard from './ShopCard';
import ScreenBackground from '../ui/ScreenBackground';
import ScreenDivider from '../ui/ScreenDivier';
import { useBasisGrid } from '../../hooks/useGrid';
import VisitorCard from './VisitorCard';
import PlusCardButton from '../ui/PlusCardButton';

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
    numVisitorYesterday: 100,
  },
  {
    id: '2',
    brandName: '매장명',
    branchName: '문학점',
    numNotifications: 3,
    numVisitor: 78,
    numIssues: 5,
    numVisitorYesterday: 78,
  },
  {
    id: '3',
    brandName: '매장명',
    branchName: '문학점',
    numNotifications: 0,
    numVisitor: 78,
    numIssues: 5,
    numVisitorYesterday: 30,
  },
];

export default function HomeContent() {
  const { loading, error, data } = useQuery(HELLO_QUERY);
  const [summaryGridLayoutHandler, summaryGridStyle, summaryGridItemStyle] =
    useBasisGrid(150, 16, 20);
  const [visitorGridLayoutHandler, visitorGridStyle, visitorGridItemStyle] =
    useBasisGrid(290, 16, 12);

  return (
    <ScreenBackground scroll>
      <View style={[styles.section, styles.summarySection]}>
        <Text headline1 style={styles.sectionTitle}>
          오늘의 점포 현황
        </Text>
        <View style={summaryGridStyle} onLayout={summaryGridLayoutHandler}>
          {shopDatas.map((item, i) => (
            <ShopCard style={summaryGridItemStyle} key={item.id} {...item} />
          ))}
          <PlusCardButton
            containerStyle={[summaryGridItemStyle, styles.plusCard]}
            title="매장 추가하기"
          />
        </View>
      </View>
      <ScreenDivider />
      <View style={[styles.section, styles.visitorSection]}>
        <Text headline1 style={styles.sectionTitle}>
          어제와 비교한 오늘의 방문자수는?
        </Text>
        <View style={visitorGridStyle} onLayout={visitorGridLayoutHandler}>
          {shopDatas.map((item) => (
            <VisitorCard
              style={visitorGridItemStyle}
              key={item.id}
              visitorToday={item.numVisitor}
              visitorYesterday={item.numVisitorYesterday}
            />
          ))}
        </View>
      </View>
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
  plusCard: {
    minHeight: 200,
    marginTop: 28,
  },
  visitorSection: {
    marginTop: 36,
    marginBottom: 12,
  },
});
