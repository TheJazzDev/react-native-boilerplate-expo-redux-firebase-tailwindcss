
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useUserSlice } from 'src/redux';

const AuthLayout = () => {
  const { userDetails, loading } = useUserSlice()

  // useEffect(() => {
  //   if (!userDetails.isAuthenticated && !loading) {
  //     router.replace('/');
  //   }
  // }, [loading, userDetails.isAuthenticated]);

  return (
    <>
      <Stack>
        <Stack.Screen name='signin' options={{ headerShown: false }} />
        <Stack.Screen name='signup' options={{ headerShown: false }} />
      </Stack>

      {/* <StatusBar backgroundColor='#161622' style='light' /> */}
    </>
  );
};

export default AuthLayout;
