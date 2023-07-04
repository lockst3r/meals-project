import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './FavoritesScreen';
import CategoriesScreen from './CategoriesScreen';

const Drawer = createDrawerNavigator();




export function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#3f2f25' },
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
          }}
        />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
    );
  }