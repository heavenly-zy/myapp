/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import AppNavigation from '@/app/layout';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}