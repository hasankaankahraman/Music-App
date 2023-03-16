import React from "react";
import { StyleSheet, TextInput,View } from "react-native";
import styles from './Search.style';

const Search = (props) =>{


    return(
        <View style={styles.container}>
            <TextInput placeholder="Müzik Ara.." onChangeText={props.musicSearch} />
            <TextInput placeholder="Artist Ara.." onChangeText={props.artistSearch} />
            <TextInput placeholder="İkisini bir arama kutusu.." onChangeText={props.bothSearch} />


        </View>

    )
}

export default Search;