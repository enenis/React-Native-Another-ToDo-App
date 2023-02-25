import React,{useState} from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import styles from "./OutputCard.style"
import CheckBox from "react-native-check-box"
import Output from '../../pages/Output'
function Card({items,}){
    const [isChecked, setIsChecked] = useState(false)
    return(
        <View style={styles.container}>
            
            <View style={styles.inner_container}>
            <Text style={styles.text}>{items}</Text>
            {/* {
                items>37?<View><Text style={styles.text}>{items}</Text></View>:<Text style={styles.text}>{items}</Text>
            } */}
                    
                
            <CheckBox style={styles.checkBox} isChecked={isChecked} onClick={()=>setIsChecked(!isChecked)} 
            checkBoxColor="green"
            />
            </View>
            <View style={styles.seperator}></View>
        </View>
    )
}

export default Card