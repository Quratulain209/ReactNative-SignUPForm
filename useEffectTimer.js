import React, { useState, useEffect } from "react";
import { View, Text,TouchableOpacity } from 'react-native'

function Timer() {
  const [count, setCount] = useState(0);
  const [data, setCdata] = useState(0);
 
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[data]);


  return (
  <View>
    <Text>See count {count}  </Text>
    <TouchableOpacity onPress={() => setCount((c) => c + 1)}><Text>{'Add Count'}</Text></TouchableOpacity>
    <Text>See Data  </Text>
  </View>)
}

export default Timer