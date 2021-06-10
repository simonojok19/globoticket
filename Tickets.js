import React from 'react';
import { Image, Text, View } from "react-native";

const Tickets = () => {
  const TicketItem = ({item}) => {
    return (
      <View style={styles.tickets}>
        <View>
          <Image source={item.image} />
        </View>
        <View>
          <Text style={styles.tickettitle}>
            {item.event}
          </Text>
          <Text style={styles.ticketshortdescription}>
            {item.shortDescription}
          </Text>
          <Text style={styles.ticketdescription}
                numberOfLines={2}
                ellipsizeMode='tail'>
            {item.description}
          </Text>
          <Text style={styles.ticketshortdescription}>
            Price: {item.price}
          </Text>
          <Text style={styles.ticketbutton}>
            Get Tickets
          </Text>
        </View>
      </View>
    );
  }
  return ();
}

const styles = StyleSheet.create({
  tickets: {},
  tickettitle: {},
  ticketshortdescription: {},
  ticketdescription: {}
})
