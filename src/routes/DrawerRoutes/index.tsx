import { createDrawerNavigator,  } from "@react-navigation/drawer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import CustomDrawer from "../../components/CustomDrawer";

import Home from "../../pages/Home";
import Home2 from "../../pages/Home2";
import NewTicket from "../../pages/newTicket";
import Tickets from "../../pages/Tickets";
import Faqs from "../../pages/Faqs";
import Profile from "../../pages/Profile";


type DrawerNavigation = {
  Home2: undefined;
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
      <Drawer.Screen name="Home2" component={Home2}
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