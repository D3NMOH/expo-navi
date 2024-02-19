import { Text, View, ImageBackground, Image } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { actors } from "../../data/actors";
import { movies } from "../../data/movies";

export default function MovieDetailsPage() {
  const { id } = useLocalSearchParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));
  if (!movie) {
    return (
      <View
        style={[
          globalStyles.container,
          { flex: 1, justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={[globalStyles.h1, globalStyles[404]]}>4 0 4</Text>
        <Text style={[globalStyles.h1]}>es gibt keine</Text>
        <Text style={[globalStyles.h1]}>シ</Text>
      </View>
    );
  }
  const background = { uri: `${movie.image}` };
  // const getActorNameById = (id) => {
  //   const actor = actors.find((actor) => actor.id === id);
  //   return actor ? actor.name : "Unknown";
  // };
  //   const getActorPhotoById = (id) => {
  //     const actor = actors.find((actor) => actor.id === id);
  //     return actor ? actor.image : "Unknown";
  //   };

  // const cast = movies.cast.map((actorInfo, index) => (
  //   <View key={index}>
  //     <Image
  //       source={{ uri: `${getActorPhotoById(actorInfo.id)}` }}
  //       style={globalStyles.image}
  //     />
  //     <View style={globalStyles.p}>
  //       <Text style={globalStyles.p}>{getActorNameById(actorInfo.id)}</Text>
  //       <Text style={globalStyles.p}>{actorInfo.character}</Text>
  //     </View>
  //   </View>
  // ));

  return (
    <View style={[globalStyles.container, { paddingVertical: 0 }]}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={globalStyles.background}
      >
        {/* <View
          style={[
            {
              position: "absolute",
              alignSelf: "flex-start",
              top: 20,
              left: 20,
              flexDirection: "row",
              zIndex: 999,
              gap: 10,
            },
          ]}
        >
          <View style={[globalStyles.navButton]}>
            <Link href="/" style={globalStyles.navLink}>
              Home
            </Link>
          </View>
          <View style={[globalStyles.navButton]}>
            <Link href="/movies" style={globalStyles.navLink}>
              Movie List
            </Link>
          </View>
        </View> */}
        <View style={globalStyles.movieData}>
          <Text style={globalStyles.h1}>{movie.title}</Text>
          <Text
            style={([globalStyles.p], { fontStyle: "italic", color: "#fff" })}
          >
            {movie.tagline}
          </Text>
        </View>
        {/* <Text>{cast}</Text> */}
      </ImageBackground>
    </View>
  );
}
