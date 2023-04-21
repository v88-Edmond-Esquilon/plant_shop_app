import React, { useCallback } from "react";
/** Redux */
import { Provider } from "react-redux";
import Store from "./store";
/** Plugin */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
/** Screens */
import { Cart, Dashboard, Plant } from "./src/views/screens";
/** Styling */
import { SAFE_AREA_VIEW } from "./src/_constants/constants.styles";


export default function App() {
    const Stack = createNativeStackNavigator();

    const [fontsLoaded] = useFonts({
        "Satoshi-Medium": require("./assets/fonts/Satoshi-Medium.ttf"),
        "Satoshi-Regular": require("./assets/fonts/Satoshi-Regular.ttf"),
        "Config-Regular": require("./assets/fonts/Config-Regular.otf"),
        "Config-Semibold": require("./assets/fonts/Config-Semibold.otf"),
        "Satoshi-Bold": require("./assets/fonts/Satoshi-Bold.otf"),
        "Satoshi-Italic": require("./assets/fonts/Satoshi-Italic.otf"),
    });
    
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    
    if (!fontsLoaded) {
        return null;
    }
    

    return (
        <Provider store={Store}>
            <GestureHandlerRootView style={{ flex: 1}} >
                <NavigationContainer onLayoutRootView={onLayoutRootView}>
                    {/* Screens */}
                    <SafeAreaView style={SAFE_AREA_VIEW.main_flex}>
                        <Stack.Navigator initialRouteName="Dashboard">
                            <Stack.Screen name="Dashboard" component={Dashboard}/>
                            <Stack.Screen name="Plant" component={Plant}/>
                            <Stack.Screen name="Cart" component={Cart}/>
                        </Stack.Navigator>
                    </SafeAreaView>
                </NavigationContainer>
            </GestureHandlerRootView>
        </Provider>
    );
}



