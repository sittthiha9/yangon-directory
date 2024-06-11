import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "./../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "./../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require("./../assets/images/logo.png")}
          style={styles.logo}
        />
        <View style={styles.title}>
          <View style={styles.theYangon}>
            <Text style={styles.the}>The</Text>
            <Text style={styles.yangon}>YANGON</Text>
          </View>
          <Text style={styles.directory}>DIRECTORY</Text>
        </View>
      </View>

      <View style={styles.loginWrapper}>
        <Image
          source={require("./../assets/images/login.png")}
          style={styles.loginImage}
        />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subIntroText}>
          Search{" "}
          <Text style={styles.subIntroHighlightText}>Everything You Need</Text>{" "}
          For Personal & Business
        </Text>
        <Text style={styles.description}>
          With our listings of over{" "}
          <Text style={styles.subIntroHighlightText}>120,000+</Text> Businesses
          in <Text style={styles.subIntroHighlightText}>1,200</Text> BIZ
          Categories in Yangon Area.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  logoWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  logo: {
    width: 55,
    height: 55,
  },
  title: {
    display: "flex",
    flexDirection: "column",
  },
  theYangon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  the: {
    fontSize: 12,
    marginTop: -5,
  },
  yangon: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "default-bold",
  },
  directory: {
    fontSize: 24,
    color: "#ee1b26",
    fontWeight: "bold",
    fontFamily: "default-bold",
    marginTop: -7,
  },
  loginWrapper: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  loginImage: {
    width: 220,
    height: 450,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "black",
  },
  subContainer: {
    backgroundColor: "white",
    padding: 20,
    marginTop: -20,
  },
  subIntroText: {
    fontSize: 28,
    fontFamily: "default-bold",
    textAlign: "center",
  },
  subIntroHighlightText: {
    color: Colors.PRIMARY,
  },
  description: {
    fontSize: 15,
    fontFamily: "default",
    textAlign: "center",
    marginVertical: 15,
    color: Colors.GRAY,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 14,
    borderRadius: 99,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontFamily: "default",
    fontSize: 16,
  },
});
