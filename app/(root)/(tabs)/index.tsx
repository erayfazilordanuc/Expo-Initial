import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl mt-5 mb-1 font-rubik">Welcome</Text>
      <Link href="/sign-in" className="bg-white py-3 px-6 rounded-full text-lg mt-5 mb-1 font-rubik">
        Sign In
      </Link>
      <Link href="/explore" className="bg-white py-3 px-6 rounded-full text-lg mt-5 mb-1 font-rubik">
        Explore
      </Link>
      <Link href="/profile" className="bg-white py-3 px-6 rounded-full text-lg mt-5 mb-1 font-rubik">
        Profile
      </Link>
      <Link href="/properties/1" className="bg-white py-3 px-6 rounded-full text-lg mt-5 mb-1 font-rubik">
        Properties 1
      </Link>
      <Link href="/properties/2" className="bg-white py-3 px-6 rounded-full text-lg mt-5 mb-1 font-rubik">
        Properties 2
      </Link>
      <Link href="/properties/3" className="bg-white py-3 px-6 rounded-full text-lg mt-5 mb-1 font-rubik">
        Properties 3
      </Link>
    </View>
  );
}
