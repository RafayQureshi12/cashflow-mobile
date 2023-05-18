import { View, Text } from "react-native";
import { colors } from "../../utils";
import { useFonts } from "expo-font";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const Profile = () => {
  const [fontsLoaded] = useFonts({
    Regular: require("../fonts/Inter-Regular.ttf"),
    Medium: require("../fonts/Inter-Medium.ttf"),
    SemiBold: require("../fonts/Inter-SemiBold.ttf"),
    Bold: require("../fonts/Inter-Bold.ttf"),
    Italic: require("../fonts/Lato-BoldItalic.ttf"),
  });

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "15%",
        backgroundColor: colors.bg,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <LinearGradient
        colors={[colors.cta, colors.purple]}
        start={{ x: 0, y: 0.09 }}
        end={{ x: 1.5, y: 1.5 }}
        angle={102}
        style={{
          borderRadius: 1000,
          padding: 20,
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <AntDesign name="user" size={150} color="white" />
      </LinearGradient>

      <Text
        style={{
          color: colors.light,
          fontSize: 15,
          fontFamily: "Regular",
          textAlign: "left",
          paddingTop: 10,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        Name
      </Text>
      <Text
        style={{
          color: colors.light,
          fontSize: 20,
          fontFamily: "Bold",
          textAlign: "left",
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        Muhammad Rafay Qureshi
      </Text>

      <Text
        style={{
          color: colors.light,
          fontSize: 15,
          fontFamily: "Regular",
          textAlign: "left",
          paddingTop: 15,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        Email
      </Text>
      <Text
        style={{
          color: colors.light,
          fontSize: 20,
          fontFamily: "Bold",
          textAlign: "left",
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        rafayqureshi28@gmail.com
      </Text>

      <Text
        style={{
          color: colors.light,
          fontSize: 15,
          fontFamily: "Regular",
          textAlign: "left",
          paddingTop: 15,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        Ph#
      </Text>
      <Text
        style={{
          color: colors.light,
          fontSize: 20,
          fontFamily: "Bold",
          textAlign: "left",
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        03150155088
      </Text>

      <Text
        style={{
          color: colors.light,
          fontSize: 15,
          fontFamily: "Regular",
          textAlign: "left",
          paddingTop: 10,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        CNIC
      </Text>
      <Text
        style={{
          color: colors.light,
          fontSize: 20,
          fontFamily: "Bold",
          textAlign: "left",
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        xxxx-xxxxxxx-x
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          marginTop: 20,
          borderTopColor: "grey",
          borderTopWidth: 2,
        }}
      >
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 20,
            paddingLeft: 25,
          }}
        >
          <Feather name="phone" size={15} color={colors.cta} />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            flex: 2,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: 15,
              fontFamily: "Bold",
            }}
          >
            Customer Service
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 20,
            paddingLeft: 25,
          }}
        >
          <Ionicons
            name="shield-checkmark-outline"
            size={20}
            color={colors.cta}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            flex: 2,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: 15,
              fontFamily: "Bold",
            }}
          >
            Private Policy
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 20,
            paddingLeft: 25,
          }}
        >
          <Ionicons name="document-text-outline" size={20} color={colors.cta} />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            flex: 2,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: 15,
              fontFamily: "Bold",
            }}
          >
            Terms and Conditions
          </Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          marginTop: 20,
          borderTopColor: "grey",
          borderTopWidth: 2,
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 20,
            paddingLeft: 25,
          }}
        >
          <Feather name="log-out" size={20} color={colors.cta} />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            flex: 2,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: 15,
              fontFamily: "Bold",
            }}
          >
            Log Out
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;