import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TextInput, 
  SafeAreaView, 
  StatusBar 
} from "react-native";
import StudentCard from "./StudentCard";

export default function StudentDirectory() {
  const [students, setStudents] = useState([
    { id: "s1", name: "Ana Cruz", year: "3rd Year", flagged: true },
    { id: "s2", name: "Bea Santos", year: "2nd Year", flagged: false },
    { id: "s3", name: "Cid Ramos", year: "4th Year", flagged: false },
    { id: "s4", name: "Dex Alonzo", year: "1st Year", flagged: false },
    { id: "s5", name: "Eli Tan", year: "3rd Year", flagged: false },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleFlag = (id: string) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
 <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      {/* Dark Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Student Directory</Text>
        <Text style={styles.headerSubtitle}>
          {filteredStudents.length} {filteredStudents.length === 1 ? "student" : "students"} this term
        </Text>
      </View>

      {/* Main Content Area */}
      <View style={styles.body}>
        {/* Search Input Box */}
        <TextInput
          style={styles.searchBar}
          placeholder="🔍 Search students..."
          placeholderTextColor="#9a96b8"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {/* Scrollable Student List */}
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
              flagged={student.flagged}
              onToggleFlag={handleToggleFlag}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#181344",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    backgroundColor: "#181344",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#b1acdb",
    marginTop: 4,
  },
  body: {
    flex: 1,
    backgroundColor: "#f7f6fc",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchBar: {
    backgroundColor: "#ede9f7",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    fontSize: 15,
    color: "#181344",
    marginBottom: 16,
  },
});