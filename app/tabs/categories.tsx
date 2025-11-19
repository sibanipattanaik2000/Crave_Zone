import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categoryData = [
  {
    id: "ct1",
    title: "Global Street Food",
    description: "Bold sauces, open-fire grills, handheld bites.",
    palettes: ["#FFE8D4", "#FFD0A8"],
    icon: "fast-food",
  },
  {
    id: "ct2",
    title: "Mindful Greens",
    description: "Seasonal salads, superfood toppings, citrus dressings.",
    palettes: ["#E3F9E5", "#C4EED3"],
    icon: "leaf",
  },
  {
    id: "ct3",
    title: "Coastal Catch",
    description: "Seafood feasts, coastal herbs, citrus brines.",
    palettes: ["#E1F0FF", "#C8E2FF"],
    icon: "fish",
  },
  {
    id: "ct4",
    title: "Sweet Lab",
    description: "Small-batch desserts, caramel drips, molten centers.",
    palettes: ["#FFEAF1", "#FFD6E4"],
    icon: "ice-cream",
  },
  {
    id: "ct5",
    title: "Fuel & Flow",
    description: "Protein bowls, complex carbs, restorative broths.",
    palettes: ["#FFF1D6", "#FFE1A8"],
    icon: "barbell",
  },
];

const CategoriesScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        contentContainerStyle={styles.content}
        data={categoryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.paletteRow}>
              {item.palettes.map((color) => (
                <View key={color} style={[styles.palette, { backgroundColor: color }]} />
              ))}
            </View>
            <View style={styles.cardHeader}>
              <View style={styles.iconBadge}>
                <Ionicons
                  name={`${item.icon}-outline` as any}
                  size={18}
                  color="#FF6B00"
                />
              </View>
              <Ionicons name="chevron-forward" size={18} color="#FF6B00" />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <View style={styles.metaRow}>
              <Ionicons name="book-outline" size={16} color="#FF6B00" />
              <Text style={styles.metaText}>12 recipe journeys</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF8F2",
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 26,
    padding: 20,
    shadowColor: "#0000000f",
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 2,
  },
  paletteRow: {
    flexDirection: "row",
    gap: 8,
  },
  palette: {
    flex: 1,
    height: 8,
    borderRadius: 999,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },
  iconBadge: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: "#FFF0E4",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B1B1B",
    marginTop: 12,
  },
  cardDescription: {
    color: "#616161",
    lineHeight: 20,
    marginTop: 6,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
  },
  metaText: {
    color: "#FF6B00",
    fontWeight: "600",
  },
});

export default CategoriesScreen;

