import React,{Component} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Button
} from "react-native";
import { Header, Icon  }              from 'react-native-elements';
import { NavigationActions}           from 'react-navigation'
import styles                         from "./styles.js";
import { colors, sizes, projectName } from '../../config/styles.js';
import commonStyle                    from '../../config/commonStyle.js';
import AsyncStorage                   from '@react-native-community/async-storage';

export default class HeaderBar extends Component{

  constructor(props) {
    super(props);
    console.log("props",props);
  }
          
  render() {
    return (
      <Header
        placement="center"
        leftComponent={
            <TouchableOpacity style={{width:40}} onPress={()=> this.props.navigation.toggleDrawer()}>
              <Icon size={28} name='menu' type='material-community' color='#fff' />
            </TouchableOpacity>
        }
        centerComponent={
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('BookingTabView')}>
            <Text style={styles.hedaer}>iAssureIT</Text>
          </TouchableOpacity>
        }

        
        rightComponent={
          <TouchableOpacity style={{width:50} } onPress={()=> this.props.navigation.navigate('InAppNotification')}>
             <Icon size={28} name='bell' type='material-community' color='#fff' />
          </TouchableOpacity>
        }
        containerStyle={styles.container}
      />
    );
  }
}


