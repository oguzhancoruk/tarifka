import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import useFetch from '../../Hooks/useFetch/useFetch';
import {API_CATEGORY} from '../../common';
import styles from './Categories.style';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';

const Categories = ({navigation}) => {
  const {loading, data, error} = useFetch(`${API_CATEGORY}`);

  const handleCategorySelect = strCategory => {
    navigation.navigate('Meal', {strCategory});
  };

  const renderCategory = ({item}) => (
    <CategoriesCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}></CategoriesCard>
  );

 
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.categories}
        keyExtractor={item => item.idCategory}
        renderItem={renderCategory}></FlatList>
    </SafeAreaView>
  );
};

export default Categories;