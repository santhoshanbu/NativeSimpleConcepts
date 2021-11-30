import { View, Text ,Button} from 'react-native'
import React from 'react'
import style from '../style'

export default function Head({ navigation }) {
    return (
        <View>
            <View style={style.bgc}>
                <Text style={style.head}> Welcome</Text>
            </View>
            <View style={style.flex}>
                <Text>Home</Text>
                <Text>Images</Text>
                <Button
                    title="Go to login"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    )
}