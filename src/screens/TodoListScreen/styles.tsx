import {StatusBar, StyleSheet} from 'react-native';
import {COLORS} from '../../res/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: COLORS.LightGrey,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: COLORS.Black,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3,
    justifyContent: 'space-between',
    backgroundColor: COLORS.White,
  },
  note: {
    fontSize: 18,
  },
  checkBox: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  blockWithNote: {
    width: '80%',
    marginHorizontal: 10,
  },
  deleteIcon: {
    color: COLORS.Emerald,
    lineHeight: 20,
    transform: [{scaleX: 2.5}, {scaleY: 2.5}],
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
    textAlign: "center"
  },
});
