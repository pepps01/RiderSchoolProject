import {StyleSheet} from 'react-native';
import color from '../../../assets/theme/color';
export default StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    flex: 1,
  },
  wrapper: {
    height: 42,
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row-reverse',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
});
