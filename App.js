import React from 'react';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
// import { createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContent';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: { // Fixed typo here
    title: 'Blogs',
   
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}
