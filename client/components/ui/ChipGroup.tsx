import { Button } from '@rneui/themed';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

interface ChipGroupProps {
  titles: string[];
  onChange?: (index: number) => void;
}

export default function ChipGroup({ titles, onChange }: ChipGroupProps) {
  const [index, setIndex] = useState(-1);

  const pressHandler = (i: number) => {
    const newIndex = i === index ? -1 : i;

    setIndex(newIndex);
    onChange && onChange(newIndex);
  };

  return (
    <View style={styles.container}>
      {titles.map((title, i) => (
        <Button
          title={title}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          titleStyle={[
            styles.title,
            i !== index ? { color: colors.GREY200 } : null,
          ]}
          color={i === index ? 'primary' : colors.GREY800}
          onPress={() => pressHandler(i)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
    marginVertical: -4,
  },
  buttonContainer: {
    borderRadius: 200,
    marginHorizontal: 6,
    marginVertical: 4,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
});
