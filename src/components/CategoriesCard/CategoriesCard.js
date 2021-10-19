import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './Categories.style';

const CategoriesCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback  onPress={onSelect}>
      <View style={styles.container}>
        <View  style={styles.image_container}>
          <Image
            style={styles.image}
            source={{uri: category.strCategoryThumb}}></Image>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
