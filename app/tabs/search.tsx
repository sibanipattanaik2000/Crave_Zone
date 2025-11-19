import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const trendingSearches = [
  "Smoked paprika pasta",
  "Protein bowls",
  "Vegan desserts",
  "5-min dips",
  "Pan-seared salmon",
  "Tropical smoothies",
];

const curatedCollections = [
  {
    title: "For Cozy Nights",
    description: "Slow stews, layered lasagnas, soul-soothing broths",
    recipes: 24,
  },
  {
    title: "Plant-Powered",
    description: "Peak-season veggies and bright herbaceous sauces",
    recipes: 18,
  },
  {
    title: "Energy Boost",
    description: "Crunchy bowls, grains, and mood-lifting snacks",
    recipes: 16,
  },
];

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.searchWrap}>
          <Ionicons name="search" color="#FF6B00" size={22} />
          <TextInput
            placeholder="Search cravings, chefs, ingredients..."
            placeholderTextColor="#A0A0A0"
            style={styles.input}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" color="#fff" size={18} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending searches</Text>
          <View style={styles.chipWrap}>
            {trendingSearches.map((item) => (
              <TouchableOpacity key={item} style={styles.chip}>
                <Text style={styles.chipText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Curated collections</Text>
          {curatedCollections.map((collection) => (
            <TouchableOpacity key={collection.title} style={styles.card}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{collection.title}</Text>
                <Text style={styles.cardDescription}>
                  {collection.description}
                </Text>
                <Text style={styles.cardMeta}>
                  {collection.recipes} recipes
                </Text>
              </View>
              <Ionicons name="arrow-forward" size={18} color="#FF6B00" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Search filters</Text>
          <View style={styles.filterGrid}>
            {["Time", "Calories", "Cuisine", "Diet", "Tools", "Occasion"].map(
              (filter) => (
                <TouchableOpacity key={filter} style={styles.filterTile}>
                  <Text style={styles.filterTitle}>{filter}</Text>
                  <Ionicons name="chevron-down" size={16} color="#FF6B00" />
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF8F2",
  },
  container: {
    padding: 20,
    gap: 24,
  },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
    shadowColor: "#00000008",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#1B1B1B",
  },
  filterButton: {
    backgroundColor: "#FF6B00",
    width: 40,
    height: 40,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B1B1B",
  },
  chipWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  chip: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#FFE0CC",
  },
  chipText: {
    color: "#1B1B1B",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
    shadowColor: "#00000005",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1B1B1B",
  },
  cardDescription: {
    color: "#6B6B6B",
    marginVertical: 4,
  },
  cardMeta: {
    color: "#FF6B00",
    fontWeight: "600",
  },
  filterGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  filterTile: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#00000005",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  filterTitle: {
    fontWeight: "600",
    color: "#1B1B1B",
  },
});

export default SearchScreen;
