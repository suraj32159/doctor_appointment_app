import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomerSupportPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Support</Text>
      <Text style={styles.description}>For any assistance, please contact us:</Text>
      <Text style={styles.contactInfo}>Email: support@example.com</Text>
      <Text style={styles.contactInfo}>Phone: +1 (123) 456-7890</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB', // Sky blue color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', // White color
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ffffff', // White color
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ffffff', // White color
  },
});

export default CustomerSupportPage;
