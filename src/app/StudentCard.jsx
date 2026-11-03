import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function StudentCard({ id, name, year, flagged, onToggleFlag }) {
  // Helper to get initials (e.g., "Ana Cruz" -> "AC")
  const getInitials = (fullName) => {
    if (!fullName) return "";
    const parts = fullName.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return fullName.substring(0, 2).toUpperCase();
  };

  return (
    <View style={styles.card}>
      {/* Circle Avatar with Initials */}
      <View style={[styles.avatar, flagged && styles.avatarFlagged]}>
        <Text style={styles.initialsText}>{getInitials(name)}</Text>
      </View>

      {/* Student Details */}
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>

      {/* Flag / Flagged Button */}
      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged && styles.flagButtonOn,
          pressed && styles.flagButtonPressed,
        ]}
      >
        <Text style={[styles.flagText, flagged && styles.flagTextOn]}>
          {flagged ? "★ Flagged" : "☆ Flag"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e4e1f2",
    padding: 14,
    marginBottom: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#837da8", // Purple circle for unflagged students
    justifyContent: "center",
    alignItems: "center",
  },
  avatarFlagged: {
    backgroundColor: "#c78600", // Gold circle for flagged student
  },
  initialsText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e1b3a",
  },
  year: {
    fontSize: 13,
    color: "#9692b8",
    marginTop: 3,
  },
  flagButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#a29dc4",
    backgroundColor: "transparent",
  },
  flagButtonOn: {
    backgroundColor: "#c78600",
    borderColor: "#c78600",
  },
  flagButtonPressed: {
    opacity: 0.6,
  },
  flagText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#605b82",
  },
  flagTextOn: {
    color: "#ffffff",
  },
});