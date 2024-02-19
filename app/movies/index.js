import { Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { movies } from "../../data/movies";
import { Image } from "expo-image";

export default function MoviePage() {
  const movieList = movies.map((movie) => (
    <View style={globalStyles.movie}>
      <Link key={movie.id} href={"movies/" + movie.id}>
        <Image
          key={movie.image}
          source={{ uri: `${movie.thumbnail}` }}
          style={[globalStyles.image, { margin: 20 }]}
        />
        <Text key={movie.title} style={globalStyles.p}>
          {movie.title}
        </Text>
      </Link>
    </View>
  ));
  return (
    <View style={globalStyles.container}>
      <ScrollView style={globalStyles.movieList}>{movieList}</ScrollView>
    </View>
  );
}
