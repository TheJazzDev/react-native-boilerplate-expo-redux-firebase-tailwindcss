import * as React from 'react';
import { useEffect } from 'react';
import { Text, View } from '../components';
import { router } from 'expo-router';
import { auth } from '../config';
import { dispatch, useUserSlice } from 'src/redux';

import Logger from '../utils/logger';
import { Href } from 'expo-router';

export default function ProtectedRoute() {
  const { userDetails, loading, setLoading, setUserDetails } = useUserSlice();

  const handleAuthStateChange = async (user: any) => {
    setLoading(true);
    try {
      if (user) {
        Logger.debug('ProtectedRoute: User is authenticated', { user });
        dispatch(setUserDetails({ isAuthenticated: true, user }));
      } else {
        dispatch(setUserDetails({ isAuthenticated: false, user: null }));
      }
    } catch (error) {
      Logger.error('ProtectedRoute: onAuthStateChanged error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChange);

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      if (userDetails.isAuthenticated) {
        router.replace('/' as Href<string | object>);
      } else {
        router.replace('/signin' as Href<string | object>);
      }
    }
  }, [loading, userDetails.isAuthenticated]);


  if (loading) {
    return (
      <View className="h-full flex items-center justify-center">
        <Text className="text-7xl text-white">Loading</Text>
      </View>
    );
  }

  return null
  // return userDetails.isAuthenticated ? (
  //   <Stack>
  //     <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
  //   </Stack>
  // ) : (
  //   <Stack>
  //     <Stack.Screen name="modal" options={{ headerShown: false }} />
  //   </Stack>
  // );
}
