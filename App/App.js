import React, { useState } from "react";
import { SafeAreaView,View,Text,Button,FlatList,Switch, StyleSheet} from "react-native";
import SongCard from "./components/SongCard";
import music_data from './music_data.json';
import Search from "./SearchBar/Search";


function App(){

const Seperator= ()=> <View style={styles.seperator}/>;

const musicSearch = text =>{
  const filteredList =music_data.filter(music =>{
    const searchedText =text.toLowerCase();
    const currentTitle =music.title.toLowerCase();

    return currentTitle.indexOf(searchedText)>-1;

  });
  setList(filteredList);
};

const artistSearch = (text) => {
  const filteredList = music_data.filter((music) => {
    const searchedText = text.toLowerCase();
    const currentArtist = music.artist.toLowerCase();
    return currentArtist.indexOf(searchedText) > -1;
  });
  setList(filteredList);
};

const bothSearch = (text) => {
  const searchedText = text.toLowerCase();
  const filteredList = music_data.filter((music) => {
    const currentTitle = music.title.toLowerCase();
    const currentArtist = music.artist.toLowerCase();
    return currentTitle.indexOf(searchedText) > -1 || currentArtist.indexOf(searchedText) > -1;
  });
  setList(filteredList);
};

const[list,setList]=useState(music_data);

  return(
    <SafeAreaView style={styles.container} >
      <View style={styles.container}>
        <Search  musicSearch={musicSearch} artistSearch={artistSearch} bothSearch={bothSearch}/>
        <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={({item}) => <SongCard music={item}/>}
        ItemSeparatorComponent={Seperator}
        />
      </View>
    </SafeAreaView>
  )
}
export default App;

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  seperator:{
    borderWidth:1,
    borderColor:'#eceff1',
  }
})