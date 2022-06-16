import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import Login from '../Components/Login';
import Login from '../Components/Login2';
import Home from '../Components/Home';

const Screens = {
    Login: {
      screen: Login,
    }, 
    Home: {
      screen: Home, 
    },
  }
  
  const initStack = createStackNavigator(Screens);

  export default createAppContainer(initStack);