import React, {useState} from 'react';
import globoTickets from './TicketsDB';
import {
  Alert,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const TicketPurchase = ({route, navigation}) => {
  const [quantity, setQuantity] = useState('1');
  const {tickId} = route.params;
  const event = globoTickets.find(tickets => tickets.eventId === tickId);
  const purchase = () => {
    var price = event.price * quantity;
    Alert.alert(`You cost is ${price}`);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.event}</Text>
      <Image source={event.image} style={styles.image} />
      <Text style={styles.shortdescription}>{event.shortDescription}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <View style={styles.purchaserow}>
        <Text style={styles.shortDescription}>Quantity :</Text>
        <TextInput
          style={styles.input}
          onChangeText={num => setQuantity(num)}
          value={quantity}
          selectTextOnFocus={true}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.price}>Total Price: ${event.price * quantity}</Text>
      <TouchableOpacity onPress={purchase} style={styles.button}>
        <Text style={styles.buttontext}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
  },
  purchaserow: {
    flexDirection: 'row',
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '60%',
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 180,
  },
  shortdescription: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
    textAlignVertical: 'center',
  },
  description: {
    textAlign: 'left',
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    height: 38,
    width: 40,
    marginLeft: 25,
  },
  price: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
    paddingBottom: 10,
  },
  buttontext: {
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
    padding: 5,
  },
});

export default TicketPurchase;
