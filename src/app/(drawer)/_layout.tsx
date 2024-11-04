import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import DrawerItem from '~/components/DrawerItem';
// import { useUserSlice } from 'src/redux';

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userDetailsWrapper}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john@email.com</Text>
      </View>
      <DrawerItem label="Home" route="/" iconName="home" />
      <DrawerItem label="Profile" route="/profile" iconName="user" />
      <DrawerItem
        label="Notifications"
        route="/notifications"
        iconName="bell"
      />
    </DrawerContentScrollView>
  );
};

export default function DrawerLayout() {
  // const { useDetails, loading } = useUserSlice();

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    />
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
    backgroundColor: '#fff',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
