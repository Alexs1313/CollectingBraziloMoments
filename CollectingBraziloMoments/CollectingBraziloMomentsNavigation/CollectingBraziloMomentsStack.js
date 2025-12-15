import { createStackNavigator } from '@react-navigation/stack';

import CollectingBraziloMomentsOnboard from '../CollectingBraziloMomentsScreens/CollectingBraziloMomentsOnboard';
import CollectingBraziloMomentsTabs from './CollectingBraziloMomentsTabs';
import CollectingBraziloMomentsLocationsDet from '../CollectingBraziloMomentsScreens/CollectingBraziloMomentsLocationsDet';
import CollectingBraziloMomentsQuiz from '../CollectingBraziloMomentsScreens/CollectingBraziloMomentsQuiz';
import CollectingBraziloMomentsLoader from '../CollectingBraziloMomentsComponents/CollectingBraziloMomentsLoader';

const Stack = createStackNavigator();

const CollectingBraziloMomentsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CollectingBraziloMomentsLoader"
        component={CollectingBraziloMomentsLoader}
      />
      <Stack.Screen
        name="CollectingBraziloMomentsOnboard"
        component={CollectingBraziloMomentsOnboard}
      />
      <Stack.Screen
        name="CollectingBraziloMomentsTabs"
        component={CollectingBraziloMomentsTabs}
      />
      <Stack.Screen
        name="CollectingBraziloMomentsLocationsDet"
        component={CollectingBraziloMomentsLocationsDet}
      />
      <Stack.Screen
        name="CollectingBraziloMomentsQuiz"
        component={CollectingBraziloMomentsQuiz}
      />
    </Stack.Navigator>
  );
};

export default CollectingBraziloMomentsStack;
