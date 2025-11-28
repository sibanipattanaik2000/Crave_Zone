import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";

const allRecipes = [
  {
    id: "1",
    title: "Smoky Chipotle Tacos",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    duration: "25 min",
    calories: "420 kcal",
    description: "Smoky and spicy chipotle tacos filled with fresh veggies and zesty lime.",
    ingredients: [
      "8 small tortillas",
      "1 tbsp chipotle sauce",
      "1 cup shredded lettuce",
      "1/2 cup sliced tomatoes",
      "1/2 cup onions",
      "1/2 tsp cumin",
      "Salt to taste",
    ],
    steps: [
      "Heat tortillas on a pan.",
      "Mix veggies with chipotle sauce and cumin.",
      "Fill tortillas with the mixture.",
      "Serve hot with lime and salsa.",
    ],
  },
  {
    id: "2",
    title: "Garden Fresh Bowl",
    image:
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    duration: "20 min",
    calories: "310 kcal",
    description: "A refreshing and healthy green bowl packed with veggies and nutrients.",
    ingredients: [
      "1 cup lettuce",
      "1/2 cup cherry tomatoes",
      "1/2 cup cucumbers",
      "1/4 cup olives",
      "1 tbsp olive oil",
      "Salt & pepper",
    ],
    steps: [
      "Chop all veggies.",
      "Mix in a bowl with olive oil.",
      "Add salt and pepper.",
      "Serve chilled.",
    ],
  },
  {
    id: "3",
    title: "Sunrise Smoothie Jar",
    image:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    duration: "10 min",
    calories: "180 kcal",
    description: "A bright and energizing smoothie jar made with tropical fruits.",
    ingredients: [
      "1 banana",
      "1/2 cup yogurt",
      "1/2 cup berries",
      "1 tbsp honey",
      "1/4 cup granola",
    ],
    steps: [
      "Blend banana, yogurt, honey and berries.",
      "Pour into a jar.",
      "Top with granola.",
    ],
  },
  {
    id: "4",
    title: "Italian Basil Pasta",
    duration: "22 min",
    calories: "510 kcal",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    description: "Classic creamy Italian pasta with fresh basil and parmesan.",
    ingredients: [
      "200g pasta",
      "2 tbsp olive oil",
      "1/2 cup tomato sauce",
      "Fresh basil leaves",
      "Parmesan cheese",
      "Salt & pepper",
    ],
    steps: [
      "Boil pasta until al dente.",
      "Heat olive oil and stir tomato sauce.",
      "Mix pasta with sauce.",
      "Add basil and parmesan.",
    ],
  },
  {
    id: "5",
    title: "Honey Glazed Chicken",
    duration: "30 min",
    calories: "620 kcal",
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/2191598195/photo/bbq-chicken-wings.jpg?s=2048x2048&w=is&k=20&c=yBry7CIQXnMR16_YiYPqNHlL36qrg7QK_yoAXFBZPDo=",
    description: "Juicy chicken glazed with sweet honey and smoky spices.",
    ingredients: [
      "4 chicken pieces",
      "2 tbsp honey",
      "1 tsp chili flakes",
      "1 tbsp soy sauce",
      "Salt to taste",
    ],
    steps: [
      "Mix honey, soy sauce and spices.",
      "Marinate chicken for 10 mins.",
      "Grill or pan-fry until golden.",
      "Brush extra glaze before serving.",
    ],
  },
  {
    id: "6",
    title: "Berry Bliss Pancakes",
    duration: "15 min",
    calories: "350 kcal",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80",
    description: "Fluffy pancakes topped with fresh berries and maple syrup.",
    ingredients: [
      "1 cup pancake mix",
      "1/2 cup milk",
      "1 egg",
      "Fresh berries",
      "Maple syrup",
    ],
    steps: [
      "Mix batter ingredients.",
      "Pour onto hot pan and cook both sides.",
      "Serve with berries and syrup.",
    ],
  },
  {
    id: "7",
    title: "Creamy Mushroom Soup",
    duration: "20 min",
    calories: "290 kcal",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80",
    description: "Warm and comforting creamy mushroom soup.",
    ingredients: [
      "1 cup mushrooms",
      "1 tbsp butter",
      "1/2 cup milk",
      "1/2 tbsp flour",
      "Salt & pepper",
    ],
    steps: [
      "Sauté mushrooms in butter.",
      "Add flour and mix.",
      "Pour milk and stir until thick.",
      "Season and serve hot.",
    ],
  },
  {
    id: "8",
    title: "Avocado Toast Deluxe",
    duration: "10 min",
    calories: "240 kcal",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    description: "Simple but delicious avocado toast topped with seasoning.",
    ingredients: [
      "2 slices bread",
      "1 ripe avocado",
      "Salt & pepper",
      "Chili flakes",
      "Lemon juice",
    ],
    steps: [
      "Toast the bread.",
      "Mash avocado with lemon juice.",
      "Spread on toast and season.",
    ],
  },
  {
    id: "9",
    title: "Spicy Ramen Bowl",
    duration: "14 min",
    calories: "380 kcal",
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/2188883901/photo/asian-noodle-soup-ramen-with-beef-vegetables-and-egg-in-bowl-grey-background-close-up-top-view.jpg?s=1024x1024&w=is&k=20&c=XjzPYxuQpqpAHLPYjoveyY7bgDjDFdlp7QcwrymIL1U=",
    description: "Hot and spicy ramen bowl with eggs, veggies, and broth.",
    ingredients: [
      "1 ramen pack",
      "1 boiled egg",
      "Chopped veggies",
      "Chili oil",
      "Soy sauce",
    ],
    steps: [
      "Boil ramen.",
      "Prepare broth with chili oil and soy sauce.",
      "Add ramen, veggies and egg.",
    ],
  },
  {
    id: "10",
    title: "Fresh Mango Salad",
    duration: "12 min",
    calories: "170 kcal",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80",
    description: "Refreshing tropical mango salad with tangy dressing.",
    ingredients: [
      "1 ripe mango",
      "1/2 cup cucumbers",
      "1 tbsp lemon juice",
      "Salt & chili flakes",
    ],
    steps: [
      "Chop mango and cucumbers.",
      "Mix with lemon juice.",
      "Add salt and chili.",
    ],
  },
];


export default function Recipes() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Featured Recipes</Text>

      <FlatList
        data={allRecipes}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push(
                `/recipedetails?recipe=${encodeURIComponent(
                  JSON.stringify(item)
                )}` as Href
              )
            }
          >
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.image}
              imageStyle={{ borderRadius: 18 }}
            >
              <View style={styles.ratingPill}>
                <Ionicons name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </ImageBackground>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#FFF8F2",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#1B1B1B",
  },
  card: {
    width: "48%",
    marginBottom: 18,
  },
  image: {
    height: 130,
    marginBottom: 8,
  },
  ratingPill: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#1B1B1Baa",
    paddingHorizontal: 8,
    paddingVertical: 4,
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
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1B1B1B",
  },
});
