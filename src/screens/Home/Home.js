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
import styles                    from './styles.js'
const window = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    var payload = this.props.navigation.getParam('payload');
    console.log("payload",payload);
    this.setState({payload:payload});
  }


  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const {payload}=this.state;
   return (
      <React.Fragment>
        <Header navigation={navigation}/>
        <View style={commonStyle.container}>
          <Text style={styles.header}>Welcome iAssureIT</Text>
          <View style={styles.viewBox}>
            <Text style={styles.label}>First Name:</Text>
            <Text style={styles.text}>{payload && payload.firstName}</Text>
          </View>  
         <View style={styles.viewBox}>
            <Text style={styles.label}>Middle Name:</Text>
            <Text style={styles.text}>{payload && payload.middleName}</Text>
          </View> 
          <View style={styles.viewBox}>
            <Text style={styles.label}>Last Name:</Text>
            <Text style={styles.text}>{payload && payload.lastName}</Text>
          </View>   
         </View> 
      </React.Fragment>
    );

  }
}
