import { View, Text } from "react-native";
import React from "react";
import { useGlobalContext } from "@/lib/global-provider";

const Profile = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();
  
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
