import React from 'react';
import { createSwitchNavigator }  from 'react-navigation';
import { createDrawerNavigator }  from 'react-navigation-drawer';
import { createStackNavigator }   from 'react-navigation-stack';
import { createAppContainer }     from '@react-navigation/native';

import AuthLoadingScreen          from '../layouts/AuthLoading/AuthLoading.js'; 
import SideMenu                   from '../layouts/SideMenu/SideMenu.js';
import Login                    from '../screens/Login/Login.js';
import Home                    from '../screens/Home/Home.js';
import Header                     from '../layouts/HeaderBar/HeaderBar.js'
const HomeStack = createStackNavigator({
  
  Home:{
    screen:Home,
    navigationOptions:{
      headerShown: null,
    }
  },
});


const AuthStack = createStackNavigator({
 Login:{
    screen:Login,
    navigationOptions:{
      headerShown: null,
    }
  },
});

const drawer = createDrawerNavigator({
	Home : {
		screen: HomeStack
	}
},{
  drawerLockMode: 'locked-closed',
  contentComponent: SideMenu,
  drawerPosition: 'left'
});




// export default HomeStack;
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: drawer,
    Auth: AuthStack,
  },
  {
    unmountInactiveRoutes: true,
    initialRouteName: 'AuthLoading',
  }
));