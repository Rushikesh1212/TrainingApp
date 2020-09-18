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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName : "",
      middleName : "",
      lastName : "",
      password : "",
    };
  }

  redirectToHome(){
    var payload ={
       firstName:this.state.firstName,
       middleName:this.state.middleName,
       lastName:this.state.lastName,
       password:this.state.password
    }
    this.props.navigation.navigate('Home',{payload:payload})
  }

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
   return (
      <React.Fragment>
        <Header navigation={navigation}/>
        <ScrollView>
         <Input
            placeholder='First Name'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            value={this.state.firstName}
            onChangeText={(firstName)=>this.setState({firstName})}
          />
          <Input
            placeholder='Middle Name'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            value={this.state.middleName}
            onChangeText={(middleName)=>this.setState({middleName})}
          />
          <Input
            placeholder='Last Name'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            value={this.state.lastName}
            onChangeText={(lastName)=>this.setState({lastName})}
          />
          <Input 
            placeholder="Password" secureTextEntry={true}  
            rightIcon={{ type: 'font-awesome', name: 'eye' }}
            value={this.state.password}
            onChangeText={(password)=>this.setState({password})}
            />
          <Button
            title="Submit"
            onPress={()=>this.redirectToHome()}
          />
         </ScrollView> 
      </React.Fragment>
    );

  }
}
