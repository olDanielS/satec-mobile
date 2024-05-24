import { createNativeStackNavigator,NativeStackNavigationProp } from '@react-navigation/native-stack';

import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';


type StackNavigation = {
  SignIn: undefined;
  SignUp: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackRoutes() {
  const Stack = createNativeStackNavigator();


 return (
    <Stack.Navigator>
      <Stack.Screen 
      name="SignIn" 
      component={SignIn}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="SignUp"
       component={SignUp}
       options={{
        headerShown:false
      }}
       />
    </Stack.Navigator>
  );
}