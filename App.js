import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const colors = {
  themeColor: "#4263ec",
  white: "#ffff",
  background: "#f4f6fc",
  greish: "#a4a4a4",
  tint: "#2b49c3",
};
const tasks = [
  {
    task: "Mornging walk",
    icon: "hiking",
    theme: "#008b8b",
    stamp: "Today .8am",
  },
  {
    task: "Meet with HR",
    icon: "account-tie",
    theme: "#37003c",
    stamp: "Today .2pm",
  },
  {
    task: "Shopping with family",
    icon: "cart",
    theme: "#fed132",
    stamp: "Tomorrow .3pm",
  },
  {
    task: "Time for Gym",
    icon: "dumbbell",
    theme: "#008b8b",
    stamp: "Saturday .4pm",
  },
  ,
  {
    task: "Time for Gym",
    icon: "dumbbell",
    theme: "#008b8b",
    stamp: "Saturday .4pm",
  },
  {
    task: "Time for Gym",
    icon: "dumbbell",
    theme: "#008b8b",
    stamp: "Saturday .4pm",
  },
  {
    task: "Time for Gym",
    icon: "dumbbell",
    theme: "#008b8b",
    stamp: "Saturday .4pm",
  },
  ,
  {
    task: "Time for Gym",
    icon: "dumbbell",
    theme: "#008b8b",
    stamp: "Saturday .4pm",
  },
  {
    task: "Time for Gym",
    icon: "dumbbell",
    theme: "#008b8b",
    stamp: "Saturday .4pm",
  },
  {
    task: "Time for Gym",
    icon: "dumbbell",
    theme: "#008b8b",
    stamp: "Saturday .4pm",
  },
];

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme, marginRight: 5 }}
        />
        <View>
          <Text style={{ fontSize: 16 }}>{task}</Text>
          <Text style={{ color: colors.greish }}>{stamp}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="border-color"
          size={30}
          style={{ color: theme, marginLeft: 5 }}
        />
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          style={{ color: theme, marginLeft: 5 }}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.themeColor }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />

      <View style={{ backgroundColor: colors.themeColor }}>
        <View
          style={{
            marginTop: 30,
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={{ color: colors.white }}
          />
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              style={{ color: colors.white }}
            />
            <AntDesign name="user" size={30} style={{ color: colors.white }} />
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ color: colors.white, fontSize: 30 }}>
            {"Hello,\nManju"}
          </Text>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertical: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              style={{ color: colors.white }}
            />
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                style={{ color: colors.white }}
              />
              <MaterialCommunityIcons
                name="tune"
                size={30}
                style={{ color: colors.white }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={{ fontSize: 24 }}>Task</Text>
        <MaterialCommunityIcons
          name="plus"
          size={40}
          style={{
            color: colors.themeColor,
            backgroundColor: colors.white,
            borderRadius: 20,
            marginHorizontal: 8,
            margin: 10,
          }}
        />
      </View>
      <View>
        <ScrollView
          style={{
            backgroundColor: colors.background,
          }}
        >
          {tasks.map((task) => (
            <Task
              task={task.task}
              icon={task.icon}
              theme={task.theme}
              stamp={task.stamp}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
