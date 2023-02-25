import React,{useState} from 'react'
import { View,Text,TouchableOpacity,FlatList } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import styles from "./Output.style"
import OutputCard from '../../components/OutputCard'


function Output(){
    const list=useSelector(s=>s.nameList)
    const dispatch=useDispatch()
    const handleClear=()=>{
        dispatch({type:"CLEAR"})
    }
    return(
        <View style={styles.container}>
            
            <View style={styles.top_container}>
                
                <Text style={styles.top_text}>Active ToDo List :4</Text>
            </View>
            
            <View style={styles.middle_container}>
                <FlatList
                keyExtractor={(_,index)=>index.toString()}
                data={list}
                renderItem={({item})=><OutputCard items={item} />}
                />
            </View>
            <View style={styles.inner_container}>
                <TouchableOpacity style={styles.btn} onPress={handleClear}>
                    <Text>Clear All</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    return{color}
}

export default Output