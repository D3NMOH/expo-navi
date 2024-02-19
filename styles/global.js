import { StyleSheet } from "react-native";
import { COLORS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  navLink: {
    color: COLORS.link,
  },
  navButton: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 7,
    borderWidth: 1,
    shadowColor: "#f00",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
  },
  p: { color: COLORS.light },
  h1: { color: COLORS.light, fontSize: 42 },
  navList: { position: "absolute", flexDirection: "row", gap: 10, margin: 20 },
  image: {
    height: 100,
    width: 80,
    borderRadius: 7,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  movieList: {
    flex: 1,
    left: 20,
    flexDirection: "column",
    zIndex: 999,
    gap: 10,
  },
  movie: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
  },
  404: { fontSize: 100 },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  movieData: {
    position: "absolute",
    backgroundColor: "#00000055",
    bottom: 0,
    width: "100%",
    alignContent: "stretch",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    padding: 20,
  },
});
