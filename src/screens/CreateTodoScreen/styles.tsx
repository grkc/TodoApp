import {StyleSheet} from 'react-native';
import {COLORS} from '../../res/colors';

export const styles = StyleSheet.create({
  inputText: {
    height: '100%',
    textAlignVertical: 'top',
    padding: 20,
    paddingTop: 10,
    fontSize: 18,
    color: COLORS.Black,
  },
  optionHandleText: {
    color: COLORS.Emerald,
    fontSize: 20,
  },
  headerStyle: {
    backgroundColor: COLORS.LightGrey,
  },
  title: {
    color: COLORS.Grey,
    textAlign: 'center'
  },
});
