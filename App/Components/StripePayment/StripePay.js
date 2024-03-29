import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { StripeProvider } from '@stripe/stripe-react-native';

const STRIPE_KEY =
'pk_test_51OzCSySAqgza5Jc9FDSQy2SPPvKD7Builay2tcL7PwKdLlOt6L7vwk0z5msjIy0uTUprIEOsGSTQHXrONxF70PMZ00rjv0c0bT';

export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_KEY}>
        <Navigation />
      </StripeProvider>

      <StatusBar style="auto" />
    </Provider>
  );
}