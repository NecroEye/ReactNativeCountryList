import {StyleSheet} from 'react-native';
import {color} from '../config/colors';

export const style = StyleSheet.create({

  main_menu: {justifyContent:'center',alignItems:'center',paddingTop:36,paddingHorizontal:36,paddingBottom:10},

  title: {fontSize:26, color: color.accent},

  subTitle:{fontSize:16, color:color.text_color},

  line:{
    width:190,
    height:2,
    marginTop:15,
    marginBottom:15,
    backgroundColor:color.gray,
  },



});
