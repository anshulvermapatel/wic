import { StyleSheet } from "react-native";
import "./css/logobar.module.css";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //display: "flex",
    justifyContent: "center",
    alignText: "center",
    flexDirection: "row",
    height: 600,
    backgroundImage: "url(" + require("./assets/logobackground.jpg") + ")",
  },
  logoImage: {
    height: 600,
    width: 500,
  },
});
export default function LogoBar() {
  return (
    <div className="contianer" style={styles.container}>
      <img
        src={require("./assets/logo.png")}
        className="logo-image"
        style={styles.logoImage}
      />
    </div>
  );
}
