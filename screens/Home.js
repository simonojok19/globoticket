import React from 'react';
import {View, Image, Text} from 'react-native';

let introText = 'Welcome here';

const Home = props => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Image
        source={require('./images/_Export_globoticket-')}
        style={styles.globologo}
      />
      <Text style={styles.title}>Welcome TO GloboTicket</Text>
      <Text style={style.subtitle}>{props.username}</Text>
      <View style={styles.textcontainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
  </View>
  );
};

export default Home;
