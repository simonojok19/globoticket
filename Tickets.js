import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import globoTickets from './TicketsDB';

const Tickets = () => {
  const TicketItem = ({item}) => {
    return (
      <View style={styles.tickets}>
        <View>
          <Image source={item.image} />
        </View>
        <View>
          <Text style={styles.tickettitle}>{item.event}</Text>
          <Text style={styles.ticketshortdescription}>
            {item.shortDescription}
          </Text>
          <Text
            style={styles.ticketdescription}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.description}
          </Text>
          <Text style={styles.ticketshortdescription}>Price: {item.price}</Text>
          <Text style={styles.ticketbutton}>Get Tickets</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={globoTickets}
        renderItem={TicketItem}
        keyExtractor={item => item.eventId}
      />
    </View>
  );
};

// eslint-disable-next-line no-undef
const styles = StyleSheet.create({
  tickets: {},
  tickettitle: {},
  ticketshortdescription: {},
  ticketdescription: {},
  container: {},
});
