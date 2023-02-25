import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        
    },
    inner_container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10,

    },
    text:{
        flex:1,
        margin:5,
        // backgroundColor:"red",
        justifyContent:"flex-end",
        color:"black"
    },


    checkBox:{
        margin:5,
        // flexWrap:"wrap",
        width:20,
        borderRadius:50,
        alignSelf:"center"
    },
    seperator:{
        borderBottomWidth:1,
        borderColor:"#bdbdbd"
    }
})