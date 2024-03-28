import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PrivacyPolicyPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.sectionContent}>
          Welcome to Dr Ayurveda. This Privacy Policy describes how we collect, use, and
          disclose information about you when you use our app. By accessing or using the app, you
          agree to the terms of this Privacy Policy.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Information We Collect</Text>
        <Text style={styles.sectionContent}>
          We may collect personal information, such as your name, email address, and other
          information you provide when you register an account or use our services. We may also
          collect usage data and device information to improve our services and provide a better
          user experience.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
        <Text style={styles.sectionContent}>
          We may use the information we collect to provide and improve our services, personalize
          your experience, communicate with you, and comply with legal obligations. We will not
          share your information with third parties except as described in this Privacy Policy.
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

export default PrivacyPolicyPage;
