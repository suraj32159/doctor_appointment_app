// TermsAndConditionsPage.js

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsAndConditionsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.sectionContent}>
          Welcome to Dr Ayurveda. By using this app, you agree to comply with and be bound
          by the following terms and conditions of use. Please review these terms carefully before
          accessing or using the app. If you do not agree to these terms, you may not use the app.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Doctor Consultation Services</Text>
        <Text style={styles.sectionContent}>
          Dr Ayurveda provides an online platform that connects users with licensed doctors
          for medical consultations.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. User Responsibilities</Text>
        <Text style={styles.sectionContent}>
          Users are solely responsible for the accuracy and completeness of the information they
          provide during consultations. Users must also ensure the security of their account
          credentials and promptly notify Dr Ayurveda of any unauthorized access or use of
          their account.
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

export default TermsAndConditionsPage;
