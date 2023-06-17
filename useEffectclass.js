import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class useEffectclass extends React.Component {

    constructor() {
        this.state = {
            setcount : 0
        }
    }

    render() {
        return (
            <View>
                <Text>See count {count}  </Text>
                <TouchableOpacity onPress={() => setCount((c) => c + 1)}><Text>{'Add Count'}</Text></TouchableOpacity>
                <Text>See Data  </Text>
            </View>
        )

    }
}
export default useEffectclass