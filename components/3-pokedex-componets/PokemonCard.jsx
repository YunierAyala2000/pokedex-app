import { router } from "expo-router";
import { Image, StyleSheet } from "react-native";
import { styled } from "styled-components/native";

export default function PokemonCard({ pokemon }) {
  const typeColors = {
    grass: "#81c732ff",
    fire: "#E62829",
    water: "#6890F0",
    bug: "#88e202ff",
    normal: "#9FA19F",
  };

  const typeEmojis = {
    grass: "🌿",
    fire: "💥",
    water: "💦",
    bug: "💨",
    normal: "🐶",
  };

  const primaryType = pokemon.types[0];
  const typeEmoji = typeEmojis[primaryType] || "❓";
  const backgroundColor = typeColors[primaryType] || "#78C850";
  const urlPokemonGo = "https://serebii.net/pokemongo/pokemon/";

  return (
    <Container
      onPress={() =>
        router.push({
          pathname: "/detalles",
          params: {
            item: JSON.stringify(pokemon),
            imagen: `${urlPokemonGo}${`${pokemon.id}`.padStart(3, 0)}.png`,
            backgroundcolor: backgroundColor,
            emoji: typeEmoji,
            type: primaryType,
          },
        })
      }
      style={{
        borderRadius: 20,
        padding: 15,
        height: 250,
        marginTop: 30,
        backgroundColor: backgroundColor,
      }}
    >
      <Image
        style={styles.logo}
        source={{ uri: `${urlPokemonGo}${`${pokemon.id}`.padStart(3, 0)}.png` }}
      />
      <PokemonId>#{`${pokemon.id}`.padStart(3, 0)}</PokemonId>
      <PokemonName>
        {typeEmoji}
        {pokemon.name}
      </PokemonName>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radios: 20;
  background-color: red;
  padding: 15px;
  margin: 10px;
  heigth: 250px;
  position: relative;
`;
const PokemonName = styled.Text`
  font-size: 16px;
  color: #ffffffff;
  font-weight: bold;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  background-color: "#91A119";
`;

const PokemonId = styled.Text`
  font-size: 35px;
  color: #f8f8f8ff;
  font-weight: bold;
  margin-top: 5px;
  position: absolute;
  bottom: 80px;
  opacity: 0.4;
`;

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    top: -90,
  },
});
