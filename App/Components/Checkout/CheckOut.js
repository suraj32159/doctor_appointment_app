// Cart.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../Shared/PageHeader';

import { CFPaymentGatewayService } from 'react-native-cashfree-pg-sdk';
import {
  CFDropCheckoutPayment,
  CFEnvironment,
  CFPaymentComponentBuilder,
  CFPaymentModes,
  CFSession,
  CFThemeBuilder,
} from 'cashfree-pg-api-contract';

const IMAGE =
  'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800';

const Cart = () => {
  const [order, setOrder] = useState({
    payment_session_id: '',
    order_id: '',
    order_expiry_time: 'order_expiry_time',
  });

  const [orderStatus, setOrderStatus] = useState();
  const navigation = useNavigation();

  const createOrder = () => {
    return new Promise((resolve, reject) => {
      fetch('https://sandbox.cashfree.com/pg/orders', {
        headers: {
          'X-Client-Secret': 'cfsk_ma_test_b837b40d155a36bec59067de9fb73a5d_a1fe529c',
          'X-Client-Id': 'TEST10262846753b1c21cc9fcc5fe95b64826201',
          'Content-Type': 'application/json',
          'x-api-version': '2023-08-01',
        },
        method: 'POST',
        body: JSON.stringify({
          order_amount: 500.1,
          order_currency: 'INR',
          customer_details: {
            customer_id: 'USER123',
            customer_name: 'joe',
            customer_email: 'joe.s@cashfree.com',
            customer_phone: '+919876543210',
          },
          order_meta: {
            return_url: 'https://b8af79f41056.eu.ngrok.io?order_id=order_123',
          },
        }),
      })
        .then(response => response.json())
        .then(result => {
          setOrder(result);
          resolve(result);
        })
        .catch(err => reject(err));
    });
  };

  useEffect(() => {
    const onReceivedEvent = (eventName, map) => {
      console.log(
        'Event received on screen: ' + eventName + ' map: ' + JSON.stringify(map),
      );
    };

    const onVerify = orderId => {
      console.log('Order ID is: ' + orderId);
      updateStatus(orderId);
    };

    const onError = (error, orderId) => {
      console.log(
        'Exception is: ' + JSON.stringify(error) + '\nOrder ID is: ' + orderId,
      );
      updateStatus(JSON.stringify(error));
    };

    CFPaymentGatewayService.setEventSubscriber({ onReceivedEvent });
    CFPaymentGatewayService.setCallback({ onVerify, onError });

    return () => {
      console.log('UNMOUNTED');
      CFPaymentGatewayService.removeCallback();
      CFPaymentGatewayService.removeEventSubscriber();
    };
  }, []);

  const updateStatus = (message) => {
    setOrderStatus(message);
  };

  const _startCheckout = async () => {
    try {
      const session = getSession();
      const paymentModes = new CFPaymentComponentBuilder()
        .add(CFPaymentModes.CARD)
        .add(CFPaymentModes.UPI)
        .add(CFPaymentModes.NB)
        .add(CFPaymentModes.WALLET)
        .add(CFPaymentModes.PAY_LATER)
        .build();
      const theme = new CFThemeBuilder()
        .setNavigationBarBackgroundColor('#94ee95')
        .setNavigationBarTextColor('#FFFFFF')
        .setButtonBackgroundColor('#FFC107')
        .setButtonTextColor('#FFFFFF')
        .setPrimaryTextColor('#212121')
        .setSecondaryTextColor('#757575')
        .build();
      const dropPayment = new CFDropCheckoutPayment(
        session,
        paymentModes,
        theme,
      );
      console.log(JSON.stringify(dropPayment));
      CFPaymentGatewayService.doPayment(dropPayment);
    } catch (e) {
      console.log(e);
    }
  };

  const getSession = () => {
    return new CFSession(
      order.payment_session_id, // sessionId
      order.order_id, // orderId
      CFEnvironment.SANDBOX,
    );
  };

  useEffect(() => {
    createOrder();
  }, []);

  const handleBack = () => {
    navigation.goBack(); // Navigate back to previous screen
  };

  return (
    <View style={styles.container}>
      <PageHeader title={''} onPressBack={handleBack} />
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={styles.btn} onPress={_startCheckout}>
            <Text>Continue To Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: '90%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#94ee95',
    width: '50%',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Cart;
