// SignUp Form

import React from "react";
import SignupForm from "./SignupForm";
const Signup = () => {
  return (
<SignupForm/>
  )
}
export default Signup

// // lab 6

// //  Task 01 : Practicing Basic React Native Structure. 
// import React from 'react';
// import { Text, View } from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}
//     >
//       <Text>This is basic react native structure!</Text>
//     </View>
//   )
// }
// export default HelloWorldApp;

// // Task 2:Practicing Core Components in React Native
// import React from 'react';
// import { View, Text, Image, ScrollView, TextInput } from 'react-native';

// const App = () => {
//   return (
//     <ScrollView style={{ marginTop: 100 }}>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{
//             uri: 'https://previews.123rf.com/images/monsitj/monsitj2005/monsitj200500032/147649194-programming-code-abstract-technology-background-of-software-developer-and-computer-script-banner-3d.jpg',
//           }}
//           style={{ width: 700, height: 200 }}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1
//         }}
//         defaultValue="You can type in me"
//       />
//     </ScrollView>
//   );
// }

// export default App;


// // Task 3:Practicing State in React Native
// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
// return (
// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// <Text>Home Screen</Text>
// </View>
// );
// }

// const Stack = createNativeStackNavigator();

// function App() {
// return (
// <NavigationContainer>
// <Stack.Navigator>
// <Stack.Screen name="Home" component={HomeScreen} />
// </Stack.Navigator>
// </NavigationContainer>
// );
// }

// export default App;


// // class 2
// import React, { useState, useEffect, useReducer } from 'react';
// import { StyleSheet, Text, View, Image, SafeAreaView, Appearance, useColorScheme, TouchableOpacity, TextInput } from 'react-native';
// import Login from './LoginClass';
// import Login from './LoginFunctionl';
// import Timer from './useEffectTimer';
// import TextField from './TextField';
// import useEffectclass from './useEffectclass';

// export default function App(props) {

//   const [UserName, setUserName] = useState('')
//   const [Password, setPassword] = useState('')

// return (
//   <View style={{ flex: 1, justifyContent: 'center', margin: 130 }} >
{/* <TouchableOpacity onPress={() => props.navigation.navigate('Login')} >
<Text>{'Login here Quratulain!'}</Text>
   </TouchableOpacity>
 { <Login /> } */}
{/* { <Timer/> } */ }


{/* <Image style = {{width : 60, height : 60, marginLeft: 30, marginBottom: 13}}
            source={require('./assets/login-logo.png')}
        />

        <Text>{'Username'}</Text>

        <TextField
          autoCapitalize="none"
          placeholder={"Enter User Name "}
          eye={false}
          SetEditinfo={setUserName}
          value={UserName}
          inputWidth={200}
        />

      <Text>{'Password'}</Text>
      <TextField
        value={Password}
        inputWidth={200}
        autoCapitalize="none"
        placeholder={"Enter Password "}
        eye={true}
        SetEditinfo={setPassword}
      />

      <TouchableOpacity >
        <Text style={{ marginTop: 10, padding: 5, backgroundColor: '#00264d',color: 'white', textAlign: 'center' }} >
          {'login'}</Text>
      </TouchableOpacity> */}
//       <useEffectclass/>
//     </View>)
// }


// class 1
// import React, {Fragment} from 'react';
// import CustomCard from './CustomCard';

// const App = () => {
//   let firstImage = { uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Cones500.jpg'};
//   let secondImage = { uri: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg'};
//   return (
//     <Fragment>
//       <CustomCard url={firstImage} title={"First title"}/>
//       <CustomCard url={secondImage} title={"Second title"}/>
//     </Fragment>
//   );
// };
// export default App;



// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     flexDirection: 'row',
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
