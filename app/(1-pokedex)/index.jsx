import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Platform } from "react-native";
import { styled } from "styled-components/native";
import PokemonCard from "../../components/3-pokedex-componets/PokemonCard";
import { globalStyles } from "../../styles/globalStyles"

export default function Index() {

  const getPokemons = async ({pageParam = "https://pokeapi.co/api/v2/pokemon?limit=20"}) => {
    
    const response = await axios.get(pageParam);
    const results = await Promise.all(
        response.data.results.map( async (pokemon) => {
            try{
                const pokemonDetail = await axios.get(pokemon.url)
                return{
                    id: pokemonDetail.data.id,
                    name: pokemon.name,
                    weight: pokemonDetail.data.weight,
                    height: pokemonDetail.data.height,
                    stardust: pokemonDetail.data.base_experience,
                    types: pokemonDetail.data.types.map((t) => t.type.name),
                    stats: pokemonDetail.data.stats[0].base_stat

                }
            }catch (error){
                return {
                    id: null,
                    name: "Error",
                    types: [],
                }
            }
        } )
    );

    return{
        ...response.data, results
    }
  }

     const { data, isLoading, error, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["GetPokemons"],
        queryFn: getPokemons,
        getNextPageParam: (p) => p.next || undefined
      });
    
      if (isLoading) {
        return (
          <ContainerLoading>
            <ActivityIndicator size="large" color="#2947f2ff" />
            <Text>Cargando...</Text>
          </ContainerLoading>
        );
      }
    
      if (isError) {
        return <Text>{error.message}</Text>;
      }

      const allPokemons = data?.pages?.flatMap( (page) => page.results) ?? [];
      const renderItem = ( { item} ) =>{
        return(
           <PokemonCard pokemon={item} />
        );
      };

  return (
    <Container style={globalStyles.container} >
     {/* <StatusBar style="light" /> */}
     <ImageFondo source={require("../../assets/images/pokeball.jpg")} />
      <Title>POKEDEX - REACT-NATIVE. By Junier</Title>

      <FlatList 
       key={(item, index) => index}
       numColumns={2}
       data={allPokemons}
       renderItem={renderItem}
       onEndReachedThreshold={0.6}
       onEndReached={ () =>  {
        if(hasNextPage)fetchNextPage()
       }}
       ListFooterComponent={
         isFetchingNextPage?(<ActivityIndicator size="large" color="#2947f2ff" />) : null
       }
     />

    </Container>
  );
}


const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const TextLoading = styled.Text`
    font-size: 24px;
    color: #fff;
    
`;

const Container = styled.View`
    flex: 1;
    padding: 10px;
    position: relative;
    background-color: #000;
`;



const Text = styled.Text`
    font-size: 20px;
    color: #fff;
`;
const ImageFondo = styled.Image`
   position: absolute;
   width: 100%;
   heigth: 100%;
   top: 0;
   opacity: 0.4;
`;



//#region HeaderCabecera

const Title = styled.Text`
    font-size: 24px;
    color: #fff;
    position: relative;

`;

//#endregion


