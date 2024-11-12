import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'src/hooks';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from 'src/redux';
import { supressError } from 'src/utils';
import ProtectedRoute from 'src/auth/ProtectedRoute';
import { Slot } from 'expo-router';

export function RootLayoutNav() {
  const colorScheme = useColorScheme();

  supressError();

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Slot />
          <ProtectedRoute />
        </ThemeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
