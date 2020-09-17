import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  // AsyncStorage,
  Image,
  Platform,
  Dimensions
} from 'react-native';

import { 
	NavigationActions,
	StackActions, 
	withNavigationFocus 
} from 'react-navigation';

import { DrawerActions }    from 'react-navigation-drawer';
import { Icon } 			from 'react-native-elements';
import styles 				from './styles.js';
import {colors} 			from '../../config/styles.js';
import AsyncStorage         from '@react-native-community/async-storage';

const window = Dimensions.get('window');

export default class SideMenu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      firstName      : "",
      vendorInfo     : "" 
    };
  }	

componentDidMount(){
	
}

 


  render(){
  	const {vendorInfo}=this.state;
	  	return(
	      	<ScrollView contentContainerStyle={[styles.container]} scrollsToTop={false}>
			     <Text>Rushikeh Salunkh</Text>
	  		</ScrollView>
	  	);
	}

}

