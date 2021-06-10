import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Menu from "./Menu";

const introText =
  'Quid ad utilitatem tantae pecuniae? Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant? Eodem modo is enim tibi nemo dabit, quod, expetendum sit, id esse laudabile. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur?';

const Home = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/_Export_globoticket-bug-black.png')}
        style={styles.globologo}
      />
      <Text style={styles.title}>Welcome TO GloboTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <Image style={styles.heroimage} source={require('./images/boxing.jpg')} />
      <View style={styles.textcontainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
  },
  textcontainer: {
    padding: 20,
  },
  globologo: {
    height: 100,
    width: 150,
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
  },
  subtitle: {
    paddingTop: 5,
    fontFamily: 'Ubuntu-Regular',
  },
  content: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '300',
  },
  heroimage: {
    height: 170,
    width: '100%',
  },
  menu: {
    position: 'absolute',
    bottom: 10,
  },
});

export default Home;
