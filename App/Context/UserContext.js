// userUtils.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLocalUser = async ({ setLoading, setUserInfo }) => {
  try {
    setLoading(true);
    const userJSON = await AsyncStorage.getItem('@user');
    const userData = userJSON ? JSON.parse(userJSON) : null;
    setUserInfo(userData);
  } catch (error) {
    console.error('Error getting local user:', error);
  } finally {
    setLoading(false);
  }
};
