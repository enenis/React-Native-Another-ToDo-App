export default function(state,action){
    switch (action.type) {
        case "ADD_TODO":
            const{name}=action.payload
            const newList=[...state.nameList,name]
            return{...state,nameList:newList}
        case "CLEAR":
            return{...state,nameList:[]}
        default:
            return{...state}
    }
}