import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type CategoryKey = "breakfast" | "bowls" | "drinks" | "desserts";

const ITEMS: Record<CategoryKey, any[]> = {
  breakfast: [
    {
      id: "1",
      name: "Fluffy Pancakes",
      image:
        "https://images.unsplash.com/photo-1644561146633-34f3f9c5c58e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "15 min",
      calories: "320 kcal",
    },
    {
      id: "2",
      name: "Veggie Omelette",
      image:
        "https://plus.unsplash.com/premium_photo-1667807521536-bc35c8d8b64b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10 min",
      calories: "280 kcal",
    },
    {
      id: "3",
      name: "Avocado Toast",
      image:
        "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXZvY2FkbyUyMFRvYXN0fGVufDB8fDB8fHww",
      time: "8 min",
      calories: "410 kcal",
    },
    {
      id: "4",
      name: "Chia Seed Pudding",
      image:
        "https://plus.unsplash.com/premium_photo-1663840225455-1f385f41bf9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpYSUyMFNlZWQlMjBQdWRkaW5nfGVufDB8fDB8fHww",
      time: "8 min",
      calories: "410 kcal",
    },
  ],
  bowls: [
    {
      id: "1",
      name: "Chicken Bowl",
      image:
        "https://images.unsplash.com/photo-1668665771757-4d42737d295a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMGJvd2x8ZW58MHx8MHx8fDA%3D",
      time: "20 min",
      calories: "520 kcal",
    },
    {
      id: "2",
      name: "Vegan Bowl",
      image:
        "https://images.unsplash.com/photo-1599904191183-015402e01e82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFZlZyUyMEJvd2x8ZW58MHx8MHx8fDA%3D",
      time: "18 min",
      calories: "380 kcal",
    },
  ],
  drinks: [
    {
      id: "1",
      name: "Lemon Mint Ice Tea",
      image: "https://images.unsplash.com/photo-1656936632096-59fcacae533f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVtb24lMjBNaW50JTIwSWNlJTIwVGVhfGVufDB8fDB8fHww",
      time: "5 min",
      calories: "90 kcal",
    },
    {
      id: "2",
      name: "Strawberry Protein Shake",
      image: "https://plus.unsplash.com/premium_photo-1726765809820-80c09e800f3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVycnklMjBQcm90ZWluJTIwU2hha2V8ZW58MHx8MHx8fDA%3D",
      time: "7 min",
      calories: "120 kcal",
    },
    {
      id: "3",
      name: "Latte",
      image: "https://plus.unsplash.com/premium_photo-1674327105076-36c4419864cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGF0dGV8ZW58MHx8MHx8fDA%3D",
      time: "7 min",
      calories: "120 kcal",
    },
    {
      id: "4",
      name: "Mojito",
      image: "https://media.istockphoto.com/id/518151736/photo/mojito-cocktail-and-ingredients.webp?a=1&b=1&s=612x612&w=0&k=20&c=xDec7NPma-58nvfhMmQKEGC5rLkTF2Fg2nKVpiXzzxU=",
      time: "7 min",
      calories: "120 kcal",
    },
  ],
  desserts: [
    {
      id: "1",
      name: "Molten Chocolate Cake",
      image:
        "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.jpg?s=2048x2048&w=is&k=20&c=Rj0l6vAW2X9fEkyWcn90lLA5kcX9s8GYahRP-4SPGc8=",
      time: "35 min",
      calories: "680 kcal",
    },
    {
      id: "2",
      name: "Mango Fruit Custard",
      image:
        "https://media.istockphoto.com/id/1163828438/photo/mango-sticky-rice-coconut-milk-traditional-thai-dessert.jpg?s=2048x2048&w=is&k=20&c=2crFxeEl5ZK2qASFDSV7l3wqrErFq9p0xYoOlkKlaXg=",
      time: "15 min",
      calories: "240 kcal",
    },
  ],
};

export default function CategoryPage() {
  const router = useRouter();
  const { category } = useLocalSearchParams(); // This now works reliably!

  const categoryKey = category as CategoryKey;
  const items = ITEMS[categoryKey] || [];
  const title = categoryKey
    ? categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)
    : "Category";

  if (!categoryKey || !items.length) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#FFF8F2",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#FF6B00" }}>
          Invalid or missing category
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>{title}</Text>
        <Text style={styles.subtitle}>{items.length} delicious recipes</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.recipeCard}
            onPress={() =>
              router.push(
                `/recipedetails?recipe=${encodeURIComponent(
                  JSON.stringify(item)
                )}`
              )
            }
          >
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.recipeImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}>4.8</Text>
              </View>
            </ImageBackground>

            <Text style={styles.recipeTitle}>{item.name}</Text>
            <View style={styles.meta}>
              <View style={styles.metaItem}>
                <Ionicons name="time-outline" size={16} color="#FF6B00" />
                <Text style={styles.metaText}>{item.time}</Text>
              </View>
              <View style={styles.metaItem}>
                <Ionicons name="flame-outline" size={16} color="#FF6B00" />
                <Text style={styles.metaText}>{item.calories}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

// Keep the same beautiful styles as before
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF8F2" },
  header: { paddingHorizontal: 20, paddingVertical: 16 },
  pageTitle: { fontSize: 28, fontWeight: "800", color: "#1B1B1B" },
  subtitle: { fontSize: 15, color: "#777", marginTop: 4 },
  recipeCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  recipeImage: { height: 200 },
  ratingBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(27,27,27,0.7)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  ratingText: { color: "#fff", fontWeight: "700", fontSize: 13 },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B1B1B",
    padding: 16,
    paddingBottom: 8,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  metaItem: { flexDirection: "row", alignItems: "center", gap: 6 },
  metaText: { fontSize: 14, color: "#555", fontWeight: "600" },
});
