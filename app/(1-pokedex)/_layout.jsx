import { MaterialIcons } from "@expo/vector-icons";
import { Tabs, Stack } from "expo-router";

export default function Tablayout() {
  return (
    // <Tabs screenOptions={{headerShown:false}} >
    //     <Tabs.Screen name="index"
    //      options={ {title:"Inicio", 
    //      tabBarIcon:() =>  (<MaterialIcons name="home" zise={20} />)
    //      }}
    //      />
    //     <Tabs.Screen name="detalles" 
    //        options={ {title:"detalle", 
    //        tabBarIcon:() =>  (<MaterialIcons name="airplay" zise={20} />)
    //      }}
    //     />
    // </Tabs>
    <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
             <Stack.Screen name="detalles" />
    </Stack>
  );
}