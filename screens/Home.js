import React from 'react';
import {View, Image, Text} from 'react-native';

const introText = 'Quid ad utilitatem tantae pecuniae? Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant? Eodem modo is enim tibi nemo dabit, quod, expetendum sit, id esse laudabile. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur?';

const Home = props => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Image
        source={require('./images/_Export_globoticket-bug-black.png')}
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
