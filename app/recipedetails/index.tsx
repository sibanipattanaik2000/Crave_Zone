import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RecipeDetails() {
  const params = useLocalSearchParams();

  const recipe = params.recipe
    ? JSON.parse(decodeURIComponent(params.recipe as string))
    : null;

  if (!recipe) {
    return (
      <View style={styles.center}>
        <Text>No Recipe Found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: recipe.image }} style={styles.image} />

      <Text style={styles.title}>{recipe.title}</Text>

      <View style={styles.row}>
        <Text style={styles.meta}>⏱ {recipe.duration || "20 min"}</Text>
        <Text style={styles.meta}>🔥 {recipe.calories || "300 kcal"}</Text>
        <Text style={styles.meta}>⭐ {recipe.rating}</Text>
      </View>
      {/* INGREDIENTS SECTION */}
      <Text style={styles.sectionTitle}>Ingredients</Text>

      {(recipe.ingredients || ["Ingredient details missing"]).map(
        (item: string, index: number) => (
          <Text key={index} style={styles.step}>
            • {item}
          </Text>
        )
      )}

      {/* Steps section */}
      <Text style={styles.sectionTitle}>Steps</Text>

      {(recipe.steps || ["Prep ingredients", "Cook properly", "Serve hot"]).map(
        (step: string, index: number) => (
          <Text key={index} style={styles.step}>
            {index + 1}. {step}
          </Text>
        )
      )}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#FFF8F2",
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: 230, borderRadius: 16 },
  title: { fontSize: 28, fontWeight: "700", marginTop: 15 },
  row: { flexDirection: "row", gap: 16, marginVertical: 10 },
  meta: { fontSize: 16, fontWeight: "500", color: "#444" },
  sectionTitle: {
    marginTop: 15,
    marginBottom: 8,
    fontSize: 20,
    fontWeight: "600",
  },
  step: { fontSize: 16, marginBottom: 6 },
});
