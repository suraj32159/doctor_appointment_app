import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { getLocalUser } from '../Context/UserContext';

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getLocalUser({ setLoading, setUserInfo });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      {userInfo && (
        <View style={styles.profileContainer}>
          <Image source={{ uri: userInfo.photoURL }} style={styles.profileImage} />
          <Text style={styles.profileText}>{userInfo.displayName}</Text>
          <Text style={styles.profileText}>{userInfo.email}</Text>
        </View>
      )}
      <Button title="Sign Out" onPress={async () => await signOut(auth)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
