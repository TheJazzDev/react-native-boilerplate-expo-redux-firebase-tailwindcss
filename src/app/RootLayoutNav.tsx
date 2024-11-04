import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'src/hooks';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store, rrfProps, useUserSlice } from 'src/redux';
import { supressError } from 'src/utils';

export function RootLayoutNav() {
  const colorScheme = useColorScheme();

  supressError();

  return (
    <Provider store={store}>
      {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </GestureHandlerRootView>
      {/* </ReactReduxFirebaseProvider> */}
    </Provider>
  );
}
