import React from 'react';
import { Text, View } from 'react-native';
import Tweet from '../components/Tweet';

function MyTweets() {
  return (
    <View>
      <Text>Tela Meus Tweets</Text>
      <Tweet nome="Batata" />
      <Tweet nome="Beterraba" />
      <Tweet nome="Cenoura" />
      <Tweet nome="Tomate" />
      <Tweet nome="Banana" />
    </View>
  );
}

export default MyTweets;
