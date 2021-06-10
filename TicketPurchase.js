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
  container: {},
  title: {},
  image: {},
  shortdescription: {},
  description: {},
  input: {},
  price: {},
});

export default TicketPurchase;
