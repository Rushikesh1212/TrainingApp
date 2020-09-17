import React,{Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image, TextInput,
  Platform,
  Alert,
} from 'react-native';

import AsyncStorage                 from '@react-native-community/async-storage';
import { ifIphoneX }                from 'react-native-iphone-x-helper';
import { colors, sizes }            from '../../config/styles.js';
import FontAwesomeIcon              from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons       from 'react-native-vector-icons/MaterialCommunityIcons';
import commonStyle                  from '../../config/commonStyle.js';
import { withNavigation }           from 'react-navigation';
import Header from '../../layouts/HeaderBar/HeaderBar.js';
import {Button, Icon, Input}    from 'react-native-elements';
const window = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
   return (
      <React.Fragment>
        <Header navigation={navigation}/>
        <Text>Welcome iAssureIT</Text>
      </React.Fragment>
    );

  }
}
