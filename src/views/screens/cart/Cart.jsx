/** React Native */
import { View, Text } from "react-native";
/** React */
import React, { useLayoutEffect } from "react";
/** Plugin */
import { useNavigation } from "@react-navigation/native";


const Cart = () => {
     const navigation = useNavigation();

     useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        }); 
    }, []);  

    return (
        <View>
            <Text>Cart</Text>
        </View>
    )
}

export default Cart;