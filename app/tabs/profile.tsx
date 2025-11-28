import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const achievements = [
  { title: "Flavor Explorer", detail: "Tried 32 unique cuisines" },
  { title: "Prep Pro", detail: "Completed 60 quick-fire meals" },
  { title: "Review Guru", detail: "Left 48 thoughtful ratings" },
];

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient
          colors={["#FF8E3C", "#FF6B00"]}
          style={styles.profileCard}
        >
          <View style={styles.profileRow}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80",
              }}
              style={styles.avatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Maya Kapoor</Text>
              <Text style={styles.role}>Culinary storyteller</Text>
              <View style={styles.badge}>
                <Ionicons name="pricetag" size={14} color="#FF6B00" />
                <Text style={styles.badgeText}>Crave Premium</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="create-outline" color="#FF6B00" size={18} />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={styles.statsRow}>
          {[
            { label: "Saved", value: "86" },
            { label: "Following", value: "24" },
            { label: "Cooked", value: "142" },
          ].map((stat) => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <Text style={styles.sectionLink}>See all</Text>
          </View>
          {achievements.map((achievement) => (
            <View key={achievement.title} style={styles.achievementCard}>
              <Ionicons name="sparkles-outline" size={18} color="#FF6B00" />
              <View style={{ flex: 1 }}>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDetail}>
                  {achievement.detail}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          {[
            "Cuisine palettes",
            "Dietary highlights",
            "Notification cadence",
          ].map((pref) => (
            <TouchableOpacity key={pref} style={styles.preferenceRow}>
              <Text style={styles.preferenceText}>{pref}</Text>
              <Ionicons name="chevron-forward" color="#FF6B00" size={18} />
            </TouchableOpacity>
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
  container: {
    padding: 20,
    gap: 24,
  },
  profileCard: {
    borderRadius: 30,
    padding: 15,
  },
  profileRow: {
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 22,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },
  role: {
    color: "#FFE8D4",
    marginTop: 2,
  },
  badge: {
    marginTop: 10,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  badgeText: {
    color: "#FF6B00",
    fontWeight: "700",
  },
  editButton: {
    backgroundColor: "#fff",
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    marginHorizontal: 6,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: "center",
    shadowColor: "#00000008",
    shadowRadius: 10,
    shadowOpacity: 0.08,
    elevation: 2,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1B1B1B",
  },
  statLabel: {
    color: "#7A7A7A",
    marginTop: 4,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 18,
    gap: 14,
    shadowColor: "#00000005",
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B1B1B",
  },
  sectionLink: {
    color: "#FF6B00",
    fontWeight: "600",
  },
  achievementCard: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    paddingVertical: 6,
  },
  achievementTitle: {
    fontWeight: "700",
    color: "#1B1B1B",
  },
  achievementDetail: {
    color: "#6B6B6B",
    fontSize: 13,
  },
  preferenceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  preferenceText: {
    fontWeight: "600",
    color: "#1B1B1B",
  },
});

export default ProfileScreen;
