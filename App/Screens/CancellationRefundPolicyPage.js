import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const CancellationRefundPolicyPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cancellation & Refund Policy</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Cancellation Policy</Text>
        <Text style={styles.sectionContent}>
          Users may cancel their scheduled consultations at any time before the appointment time.
          To cancel, users should navigate to the appointment details screen and follow the
          cancellation instructions provided within the app.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Refund Policy</Text>
        <Text style={styles.sectionContent}>
          Refunds may be provided in certain circumstances, such as if a scheduled consultation
          is canceled by the doctor or if technical issues prevent the consultation from taking place.
          Users may request a refund by contacting customer support and providing relevant details
          about the canceled consultation.
        </Text>
        <Text style={styles.sectionContent}>
          Please note that refunds are subject to review and approval by Dr Ayurveda.
          Refunds will be processed within 5-7 business days of approval and issued back to the
          original payment method used for the consultation.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default CancellationRefundPolicyPage;
