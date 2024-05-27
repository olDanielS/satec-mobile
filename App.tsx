import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { bg_primary,gray_primary } from './src/defaultColors';

import { LogBox } from 'react-native';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();

import Routes from './src/routes/routes';
import { StatusBar } from 'react-native';

import AuthProvider from './src/contexts/Auth';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={gray_primary} />
      <AuthProvider>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}
