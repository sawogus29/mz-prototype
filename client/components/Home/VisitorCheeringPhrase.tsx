import { StyleSheet, Image, View } from 'react-native';
import { Text } from '@rneui/themed';
import colors from '../../theme/colors';

interface VisitorCheeringPhraseProps {
  visitorToday: number;
  visitorYesterday: number;
}

export default function VisitorCheeringPhrase({
  visitorToday,
  visitorYesterday,
}: VisitorCheeringPhraseProps) {
  const PHRASES = [
    {
      icon: '🔥',
      title: (
        <Text>
          어제보다{' '}
          <Text style={styles.number}>{visitorYesterday - visitorToday}명</Text>{' '}
          덜 왔어요.
        </Text>
      ),
      sub: '조금만 더 노력하면 목표에 근접해지겠네요!',
    },
    {
      icon: '👍',
      title: `어제와 같은 방문자 수 달성!`,
      sub: '나쁘지 않은데요? 이대로만 가면 되겠어요!',
    },
    {
      icon: '🎉',
      title: (
        <Text>
          어제보다{' '}
          <Text style={styles.number}>{visitorToday - visitorYesterday}명</Text>{' '}
          더 왔어요.
        </Text>
      ),
      sub: '축하해요! 점점 방문자가 늘어날거예요!',
    },
  ];

  const { icon, title, sub } =
    PHRASES[1 + Math.sign(visitorToday - visitorYesterday)];

  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <Text title2>{icon}</Text>
        <Text subheader4> {title}</Text>
      </View>
      <Text caption2>{sub}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    color: colors.AI_BLUE,
  },
});
