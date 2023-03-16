import React from "react";
import { View,Image,Text } from "react-native";
import styles from './SongCard.style';

const SongCard = ({music}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: music.imageUrl}}/>
                <View style={styles.inner_container}>
                    <Text style={styles.title}>{music.title}</Text>
                    <View style={styles.info_container}>
                        <Text>{music.artist}</Text>
                        <Text style={styles.year}>{music.year}</Text>
                    </View>
                    {music.isSoldOut &&(
                    <View style={styles.soldcontainer}>
                        <Text style={styles.sold}>Tükendi</Text>
                    </View>
                    )}
                </View>
        </View>
    );
};
export default SongCard;