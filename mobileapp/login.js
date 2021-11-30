import React,{useState} from "react";
import style from "../style";
import {View,Text, TextInput, Button} from 'react-native';


function Login({ navigation }){

    const [lists,uplists]=useState(['santhosh'])
    const [input,upinput]=useState('')

    const click=()=>{
        const item=[...lists]
          item.push(input)
        uplists(item)
        upinput('')
    }

    return(
        <View >
        <View  style={style.margin }>
            <Text>Name</Text>
           <View style={style.flex}>
               <TextInput value={input} onChange={(e)=>upinput(e.nativeEvent.text)} style={{borderColor:'black',borderWidth:1,borderStyle:'solid',padding:5,margin:5,width:300}} />
               <Button onPress={click} title="Learn More" />
            </View>
           <Text>Email</Text>
           <TextInput style={style.input} />
           <Text>Password</Text>
           <TextInput style={style.input} />
           <View>
           {
               lists.map((item)=>(<Text>{item}</Text>))
           }
           </View>
        </View>
        <Button title="Main" onPress={() => navigation.navigate('Main')} />
        </View>
    )
}

export default Login