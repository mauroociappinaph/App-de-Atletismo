
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import Landing from './Landing';
import FormAtleta from './FormAtleta';
import store from './store';

const StackNavigator = createStackNavigator();
const AppContainer = createAppContainer(StackNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <StackNavigator.Screen name="Landing" component={Landing} />
        <StackNavigator.Screen name="FormAtleta" component={FormAtleta} />
      </AppContainer>
    </Provider>
  );
}
