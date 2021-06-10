import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Contact = ({navigation}) => {
  const [name, setName] = useState('Enter Name');
  const [email, setEmail] = useState('Enter Email');
  const [phone, setPhone] = useState('Enter Phone');
  const [message, setMessage] = useState('Let us know whats on your mind');

  const submit = () => {
    if (!name || !email || !message) {
      Alert.alert('Please enter info in all required fields');
    } else {
      Alert.alert(`Thank you ${name}`);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.labels}>Name: *required</Text>
      <TextInput
        style={styles.txtinput}
        onChangeText={input => setName(input)}
        value={name}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Email: *required</Text>
      <TextInput
        style={styles.txtinput}
        onChangeText={input => setEmail(input)}
        value={email}
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Phone:</Text>
      <TextInput
        style={styles.txtinput}
        onChangeText={input => setPhone(input)}
        value={phone}
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Message: *required</Text>
      <TextInput
        style={styles.multitxtinput}
        onChangeText={input => setMessage(input)}
        value={message}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}
      />
      <Button title="Contact Us" color="#708090" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 18,
  },
  labels: {
    fontFamily: 'Ubuntu-Regular',
  },
  multitxtinput: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    width: '90%',
    height: 120,
    marginBottom: 50,
  },
  txtinput: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    width: '80%',
    paddingBottom: 15,
  },
});

export default Contact;
