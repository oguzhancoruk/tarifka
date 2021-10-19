import React from "react";
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../src/pages/MealCatagories/Categories';
import Meal from '../src/pages/Meal/Meal';
import Detail from '../src/pages/Detail/Detail';
const Stack= createNativeStackNavigator();

const Router=()=> 
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={Categories} options={{ 
          headerTitleAlign:'center',
          headerTintColor:'orange'
        }} />
        <Stack.Screen name='Meal' component={Meal} options={{ 
          headerTitleAlign:'center',
          headerTintColor:'orange'}}  />
        <Stack.Screen name='Detail' component={Detail} options={{ 
          headerTitleAlign:'center',
          headerTintColor:'orange' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;