import React,{useState} from 'react'
import { View,Text,Button,TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import styles from "./Input.style"

function Input(){
    const[todo,setTodo]=useState("")
    const dispatch=useDispatch()
    const handleADD=()=>{
        dispatch({type:"ADD_TODO", payload:{name:todo}})
    }

    return(
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.top_text}>Create Your ToDo Task's</Text>
            </View>
            <View style={styles.middle_container}>
                <TextInput style={styles.input} value={todo} onChangeText={setTodo} placeholder="Add Your Task's" />
                <View style={styles.inner_container}>
                    <TouchableOpacity  style={styles.btn}  onPress={handleADD} >
                        <Text style={styles.btn_text}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Input