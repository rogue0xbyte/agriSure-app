import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const CreateAccount = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Unique FPO ID" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>Already have an account? Sign in</Text>
    </View>
  );
};

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello Aaditya!</Text>
      <Text>User ID #02</Text>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('LiveWeather')}>
          <Image source={require('./assets/weather-icon.png')} style={styles.icon} />
          <Text>Live Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('AddLand')}>
          <Image source={require('./assets/add-icon.png')} style={styles.icon} />
          <Text>Add Land</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('RemoteSensing')}>
          <Image source={require('./assets/remote-sensing-icon.png')} style={styles.icon} />
          <Text>Remote Sensing Analysis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('./assets/qr-icon.png')} style={styles.icon} />
          <Text>Share ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('./assets/schedule-icon.png')} style={styles.icon} />
          <Text>Manage Schedules</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LiveWeather = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Live Weather</Text>
      <View style={styles.weatherContainer}>
        <Text>Land LND-192-4321 Weather</Text>
        <Text>Location: Shadnagar, TS, IN</Text>
        <Text>Crop: Wheat</Text>
        <Image source={require('./assets/telangana-map.png')} style={styles.mapImage} />
        {/* Add weather forecast table here */}
      </View>
    </View>
  );
};

const AddLand = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Land</Text>
      <TextInput style={styles.input} placeholder="Survey #" />
      <TextInput style={styles.input} placeholder="Subdivision #" />
      <TextInput style={styles.input} placeholder="Taluk #" />
      <TextInput style={styles.input} placeholder="State" />
      <TextInput style={styles.input} placeholder="Land ID" />
      <TextInput style={styles.input} placeholder="Land Name" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const RemoteSensing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Remote Sensing</Text>
      <Text>Soil Health Analysis from Remote Sensing Analysis</Text>
      <View style={styles.dropdown}>
        <Text>LND-192-4321</Text>
      </View>
      <Image source={require('./assets/remote-sensing-image.png')} style={styles.remoteImage} />
      <Text>Calculating Indices...</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateAccount">
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="LiveWeather" component={LiveWeather} />
        <Stack.Screen name="AddLand" component={AddLand} />
        <Stack.Screen name="RemoteSensing" component={RemoteSensing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 20,
    color: 'blue',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  weatherContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  mapImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  remoteImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default App;