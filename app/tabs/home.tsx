import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const username = "Sibani";
const featuredRecipes = [
  {
    id: "1",
    title: "Smoky Chipotle Tacos",
    duration: "25 min",
    calories: "420 kcal",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Garden Fresh Bowl",
    duration: "18 min",
    calories: "280 kcal",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Sunrise Smoothie Jar",
    duration: "7 min",
    calories: "180 kcal",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
  },
];

const quickActions = [
  { id: "qa1", icon: "flame", label: "Trending" },
  { id: "qa2", icon: "star", label: "Chef Picks" },
  { id: "qa3", icon: "leaf", label: "Healthy" },
  { id: "qa4", icon: "time", label: "Under 20" },
];

const categories = [
  { id: "c1", title: "Breakfast", icon: "cafe", color: "#FFECD6" },
  { id: "c2", title: "Bowls", icon: "restaurant", color: "#FFE3E0" },
  { id: "c3", title: "Desserts", icon: "ice-cream", color: "#FFF5D6" },
  { id: "c4", title: "Drinks", icon: "wine", color: "#E3F2FF" },
];

const tips = [
  "Pair spicy dishes with cooling herbs like mint or basil.",
  "Toast your spices to unlock deeper aromas in sauces.",
  "Layer textures—crunch + cream—to excite every bite.",
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingBottom: 14 }}>
          <Text style={styles.eyebrow}>Good Evening {username}</Text>
          <Text style={styles.welcome}>What will you crave today?</Text>
        </View>

        <TouchableOpacity activeOpacity={0.9}>
          <LinearGradient
            colors={["#FF8E3C", "#FF6B00"]}
            style={styles.heroCard}
          >
            <View style={styles.heroTextWrapper}>
              <Text style={styles.heroBadge}>Chef curated</Text>
              <Text style={styles.heroTitle}>
                Artisan bowls inspired by seasonal cravings
              </Text>
              <Text style={styles.heroSubtitle}>
                Discover bold flavors, locally sourced ingredients, and
                nutrition-first plates crafted for your mood.
              </Text>
              <View style={styles.heroStats}>
                <View>
                  <Text style={styles.heroStatsValue}>120+</Text>
                  <Text style={styles.heroStatsLabel}>Chef menus</Text>
                </View>
                <View>
                  <Text style={styles.heroStatsValue}>15 min</Text>
                  <Text style={styles.heroStatsLabel}>Avg. prep</Text>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80",
              }}
              style={styles.heroImage}
              imageStyle={{ borderRadius: 24 }}
            />
          </LinearGradient>
        </TouchableOpacity>

        <FlatList
          horizontal
          data={quickActions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.quickAction}>
              <Ionicons name={item.icon as any} size={22} color="#FF6B00" />
              <Text style={styles.quickActionLabel}>{item.label}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 4 }}
          style={{ marginTop: 24 }}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured recipes</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>View all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={featuredRecipes}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 6 }}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.85} style={styles.recipeCard}>
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.recipeImage}
                imageStyle={{ borderRadius: 18 }}
              >
                <View style={styles.ratingPill}>
                  <Ionicons name="star" size={14} color="#FFD700" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </ImageBackground>
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <View style={styles.recipeMeta}>
                <View style={styles.metaRow}>
                  <Ionicons name="time-outline" size={14} color="#FF6B00" />
                  <Text style={styles.metaText}>{item.duration}</Text>
                </View>
                <View style={styles.metaRow}>
                  <Ionicons name="flame-outline" size={14} color="#FF6B00" />
                  <Text style={styles.metaText}>{item.calories}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Browse by vibe</Text>
        </View>
        <View style={styles.categoryGrid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryCard, { backgroundColor: category.color }]}
            >
              <Ionicons
                name={`${category.icon}-outline` as any}
                size={26}
                color="#FF6B00"
              />
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <Text style={styles.categoryCaption}>12 curated menus</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Kitchen wisdom</Text>
        </View>
        <View style={styles.tipsContainer}>
          {tips.map((tip) => (
            <View key={tip} style={styles.tipCard}>
              <Ionicons name="sparkles" size={16} color="#FF6B00" />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
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
  scrollContainer: {
    paddingHorizontal: 20,
  },
  eyebrow: {
    color: "#FF6B00",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  welcome: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1B1B1B",
    marginTop: 2,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 18,
    backgroundColor: "#FFE0CC",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FF6B00",
  },
  heroCard: {
    flexDirection: "row",
    borderRadius: 28,
    padding: 22,
    gap: 16,
    alignItems: "center",
  },
  heroTextWrapper: {
    flex: 1,
  },
  heroBadge: {
    color: "#FFE8D4",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },
  heroSubtitle: {
    color: "#FFE8D4",
    fontSize: 14,
    lineHeight: 20,
  },
  heroStats: {
    flexDirection: "row",
    gap: 24,
    marginTop: 16,
  },
  heroStatsValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  heroStatsLabel: {
    color: "#FFE0CC",
    fontSize: 12,
  },
  heroImage: {
    width: 110,
    height: 150,
  },
  quickAction: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    shadowColor: "#00000010",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  quickActionLabel: {
    fontWeight: "600",
    color: "#1B1B1B",
  },
  sectionHeader: {
    marginTop: 28,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1B1B1B",
  },
  linkText: {
    color: "#FF6B00",
    fontWeight: "600",
  },
  recipeCard: {
    width: 220,
    marginRight: 16,
  },
  recipeImage: {
    height: 150,
    marginBottom: 10,
  },
  ratingPill: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#1B1B1Baa",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1B1B1B",
  },
  recipeMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    color: "#555",
    fontSize: 13,
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
  },
  categoryCard: {
    width: "47%",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#00000008",
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1B1B1B",
    marginTop: 12,
  },
  categoryCaption: {
    color: "#7A7A7A",
    marginTop: 2,
    fontSize: 13,
  },
  tipsContainer: {
    gap: 12,
  },
  tipCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    shadowColor: "#00000008",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 2,
  },
  tipText: {
    flex: 1,
    color: "#333",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default HomeScreen;
