import { router, useLocalSearchParams } from "expo-router";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import tinycolor2 from "tinycolor2";
import {LinearGradient} from "expo-linear-gradient"
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles"

export default function Detalles() {
  const { item, imagen, backgroundcolor, emoji, type } = useLocalSearchParams()
  const pokemon = JSON.parse(item)
  const rgbacolor = tinycolor2(backgroundcolor).setAlpha(0.5).toRgbString()
  const pokemonGif = `https://play.pokemonshowdown.com/sprites/ani/${pokemon.name}.gif`

  return (
    <Container > 
     <LinearGradientContent  style={globalStyles.container} colors={[rgbacolor, backgroundcolor]}>
     <Header>
     <TouchableOpacity onPress={() => router.back()} >
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
     </TouchableOpacity>
      <MaterialIcons name="star-border" size={24} color="#fff" />
     </Header>

     <Content>
      <ContentImagen  >
         <Image 
          source={require("../../assets/images/1.png")} 
          style={{
            width:300, 
            height: 300,
            position: "absolute",
            top: -90,
            opacity:0.8
          }} 
         />
        <Image 
          source={{uri:pokemonGif}} 
          style={{width:250, height:250, objectFit:'contain'}} 
        />
      </ContentImagen>
      <PokemonName>{emoji}{pokemon.name}</PokemonName>
      <InfoContainer>
          <Stat>
            <StatValue>{pokemon.weight} kg</StatValue>
            <StatLabel>WEIGHT</StatLabel>
          </Stat>
          <Stat>
            <StatValue>{type}</StatValue>
            <StatLabel>TYPE</StatLabel>
          </Stat>
          <Stat>
            <StatValue>{pokemon.height} M</StatValue>
            <StatLabel>HEIGTH</StatLabel>
          </Stat>
      </InfoContainer>
       <InfoContainer>
          <Stat>
            <StatValue>{pokemon.stardust}</StatValue>
            <StatLabel>STARDUST</StatLabel>
          </Stat>
          <Stat>
            <StatValue>{pokemon.stats}</StatValue>
            <StatLabel>CANDY</StatLabel>
          </Stat>
      </InfoContainer>

      <Image 
          source={require("../../assets/images/Pokebola2.png")} 
          style={{
            width:100, 
            height: 100,
            opacity:0.8
          }} 
         />
     </Content>
      
      </LinearGradientContent>
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const LinearGradientContent = styled(LinearGradient)`
    flex: 1;
    padding: 20px;
    width: 100%
`;

const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
  
`;
const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ContentImagen = styled.View`
   position: relative;
   justify-content: center;
   aling-items: center;
`;

const PokemonName = styled.Text`
    color: white;
    font-zise: 40px;
    font-weight: bold;
    margin-top: 10px;
    border-radios: 50px;
    padding: 5px;
`;

//#region  InfoPkemon
const InfoContainer = styled.View`
   flex-direction: row;
   justify-content: space-around;
   width: 100%;
   background-color: rgba(255,255,255, 0.1);
   padding: 10px;
   border-radios: 20px;
   margin: 10px;
`;

const Stat = styled.View`
    justify-content: center;
    aling-items: center;
`;

const StatValue = styled.Text`
    color: white;
    font-zise: 16px;
    font-weight: bold;
`;

const StatLabel = styled.Text`
    color: white;
    font-zise: 12px;
    font-weight: bold;
`;


//#endregion