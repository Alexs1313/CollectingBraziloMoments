import { useEffect } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CollectingBraziloMomentsLoader = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const welcomeLoaderTimer = setTimeout(() => {
      navigation.replace('CollectingBraziloMomentsOnboard');
    }, 3000);

    return () => clearTimeout(welcomeLoaderTimer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/collectingBraziloMomentsImgs/collectingBraziloMomentsBgLoader.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.containerBraziloMomentsLoader}>
          <Image
            source={require('../../assets/collectingBraziloMomentsImgs/collectingBraziloMomentsLoader1.png')}
            style={{ position: 'absolute', top: 70, left: 40 }}
          />
          <Image
            source={require('../../assets/collectingBraziloMomentsImgs/collectingBraziloMomentsLoader2.png')}
            style={{ position: 'absolute', top: 130, right: 40 }}
          />
          <Image
            source={require('../../assets/collectingBraziloMomentsImgs/collectingBraziloMomentsBgLogo.png')}
          />

          <Image
            source={require('../../assets/collectingBraziloMomentsImgs/collectingBraziloMomentsLoader3.png')}
            style={{ position: 'absolute', bottom: 190, right: 40 }}
          />
          <Image
            source={require('../../assets/collectingBraziloMomentsImgs/collectingBraziloMomentsLoader4.png')}
            style={{ position: 'absolute', bottom: 130, left: 40 }}
          />
          <Image
            source={require('../../assets/collectingBraziloMomentsImgs/collectingBraziloMomentsLoader5.png')}
            style={{ position: 'absolute', bottom: 30, right: 80 }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerBraziloMomentsLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 800,
  },
});

export default CollectingBraziloMomentsLoader;
