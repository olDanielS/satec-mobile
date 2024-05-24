import { createDrawerNavigator,  } from "@react-navigation/drawer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import CustomDrawer from "../../components/CustomDrawer";

import Home from "../../pages/Home";
import NewTicket from "../../pages/newTicket";
import Tickets from "../../pages/Tickets";
import Faqs from "../../pages/Faqs";
import Profile from "../../pages/Profile";


type DrawerNavigation = {
  Home: undefined;
  NewTicket: undefined;
  Tickets: undefined;
  Faqs: undefined;
  Profile: undefined;
}


export type DrawerTypes = NativeStackNavigationProp<DrawerNavigation>;

export default function DrawerRoutes() {
 
  const Drawer = createDrawerNavigator();
 
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
      <Drawer.Screen name="Home" component={Home}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen name="NewTicket" component={NewTicket}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen name="Tickets" component={Tickets}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen name="Faqs" component={Faqs}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen name="Profile" component={Profile}
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
}