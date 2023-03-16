import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {margin:10,flexDirection:'row'},
    image:{width:100,height:100,borderRadius:50,},
    inner_container:{backgroundColor:'white',padding:10,flex:1,justifyContent:'center'},
    title:{fontWeight:'bold',fontSize:25},
    year:{marginLeft:10,color:'gray',fontWeight:'bold'},
    info_container:{flexDirection:'row'},
    soldcontainer:{borderWidth:1,borderColor:'red',borderRadius:5,position: "absolute", bottom: 0, alignSelf: "flex-end"},
    sold:{color:'red',}
})