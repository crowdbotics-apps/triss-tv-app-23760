import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList191550Navigator from '../features/ArticleList191550/navigator';
import ArticleList191549Navigator from '../features/ArticleList191549/navigator';
import ArticleList191548Navigator from '../features/ArticleList191548/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList191550: { screen: ArticleList191550Navigator },
ArticleList191549: { screen: ArticleList191549Navigator },
ArticleList191548: { screen: ArticleList191548Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
