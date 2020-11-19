import React, { useState } from 'react';
import { Text, View } from 'react-native';

function Tweet(props) {
  const [valor, setValor] = useState(0);

  function somar() {
    setValor(valor + 1);
  }

  return (
    <View>
      <Text onPress={somar}>{props.nome}</Text>
      <Text>{valor}</Text>
    </View>
  );
}

export default Tweet;
