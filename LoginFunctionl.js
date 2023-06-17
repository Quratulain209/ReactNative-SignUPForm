import React, { useState } from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'

// class Login extends React.Component{

const Login = (props) => {
// constructor(props){
//     super(props)
//     this.state = {
//         email: 'info@fuuasr.com'
//     }
// }

const [email , setEmail ] = useState('info@fuuasr.com')

// render(){
   return(
       <View>
           <Text style = {{fontSize: 35, marginTop: 20}} >
               User Name
           </Text>
           <TextInput
           editable = {true}
           style = {{ width: '100%', borderColor: '#000', fontSize: 32 }}
           placeholder='enter user name'
           // onChangeText={(text)=> {this.setState({email: text})}}
           onChangeText={(text) => setEmail(text)}
           // value={this.state.email}
           value={email}
           />

           <Text style = {{fontSize: 35, marginTop: 20}} >{this.state.email}</Text>

           <TouchableOpacity onPress={()=> {
               alert('or bhae kya hal hn ?')
           }} >
           <Text>{'Submit'}</Text>
           </TouchableOpacity>
       </View>
   )
// }

}
export default Login