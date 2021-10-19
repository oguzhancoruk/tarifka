import React from "react";
import { View ,FlatList } from "react-native";
import useFetch from '../../Hooks/useFetch/useFetch';
import {API_DETAIL} from '../../common';
import DetailCard from '../../components/DetailCard/DetailCard';
const Detail = ({route,onPress})=> 
{ const {idMeal}=route.params;
const {data,error,loading}= useFetch(`${API_DETAIL}=${idMeal}`);
const renderDetail=({item})=> <DetailCard details={item}/>
const renderKey = item => item.idMeal;




    return(
        <View>
            <FlatList
        data={data.meals}
        keyExtractor={renderKey}
        renderItem={renderDetail}
      />
        </View>
    );
}

export default Detail;