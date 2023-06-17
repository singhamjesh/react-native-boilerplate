import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: number | string;
  width?: number | string;
};

const Brand = ({ height, width }: Props) => {
  const { Layout, Images } = useTheme();

  return (
    <View
      testID={'brand-img-wrapper'}
      style={[Layout.fullWidth, { height: 50 }]}
    >
      <View style={[Layout.row, Layout.justifyContentBetween]}>
        <Text style={[styles.box]}>Back 01</Text>
        <Text style={[styles.box]}>Back 02</Text>
      </View>

      {/* <Image
        testID={'brand-img'}
        style={Layout.fullSize}
        source={Images.logo}
        resizeMode={mode}
      /> */}
    </View>
  );
};

Brand.defaultProps = {
  height: 50,
  width: '100%',
};

export default Brand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});
