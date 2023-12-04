/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import colors from '../../common/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useRouteContext} from '../../context';

const CustomTabBar = () => {
  const navigation = useNavigation();
  const active = useRouteContext();
  const [activeRouteName, setActiveRouteName] = useState('Home');
  const activeSize = 36;
  const activeFamily = 'Lato-Bold';

  const handleNavigation = name => {
    setActiveRouteName(name);
    navigation.navigate(name);
  };

  return (
    <View
      style={{
        height: 75,
        backgroundColor: colors.primaryGreen,
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity onPress={() => handleNavigation('Home')}>
        <AntDesign
          style={{alignSelf: 'center', marginBottom: 4}}
          name="home"
          size={activeRouteName === 'Home' ? activeSize : 30}
          color={colors.white}
        />
        <Text
          style={{
            fontSize: 16,
            color: colors.white,
            fontFamily:
              activeRouteName === 'Home' ? activeFamily : 'Lato-Light',
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Products')}>
        <AntDesign
          style={{alignSelf: 'center', marginBottom: 4}}
          name="inbox"
          size={30}
          color={colors.white}
        />
        <Text
          style={{
            fontSize: 16,
            color: colors.white,
            fontFamily:
              activeRouteName === 'Products' ? activeFamily : 'Lato-Light',
          }}>
          Products
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Orders')}>
        <AntDesign
          style={{alignSelf: 'center', marginBottom: 4}}
          name="database"
          size={30}
          color={colors.white}
        />
        <Text
          style={{
            fontSize: 16,
            color: colors.white,
            fontFamily:
              activeRouteName === 'Orders' ? activeFamily : 'Lato-Light',
          }}>
          Orders
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Profile')}>
        <AntDesign
          style={{alignSelf: 'center', marginBottom: 4}}
          name="user"
          size={30}
          color={colors.white}
        />
        <Text
          style={{
            fontSize: 16,
            color: colors.white,
            fontFamily:
              activeRouteName === 'Profile' ? activeFamily : 'Lato-Light',
          }}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomTabBar;
