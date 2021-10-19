import React from "react";
import { View ,Text, FlatList} from "react-native";
import MealCard from '../../components/MealCard/MealCard';
import useFetch from "../../Hooks/useFetch/useFetch";
import {API_MEALS} from '../../common';
const Meal= ({navigation,route})=> 
{
const {strCategory}=route.params;
const{data,loading,error}=useFetch(`${API_MEALS}=${strCategory}`);
const renderKey = item => item.idMeal;
const handleMealSelect=idMeal=>
{
    navigation.navigate('Detail',{idMeal});
};

const renderMeal= ({item})=>(
    <MealCard meals={item} onSelect={()=>handleMealSelect(item.idMeal) } />
);



    return(
        <View>
            <FlatList  data={data.meals}
          keyExtractor={renderKey}
          renderItem={renderMeal}/>
        </View>
    );
}

export default Meal;