import { CSSProperties } from "react";

const styles = {
  container: {
    flex: 1,
    // flexDirection: "row",
    height: 80,
    backgroundColor: "red",
    //backgroundImage: "url(" + require("./assets/logobackground.jpg") + ")",
  },
};
export default function Navbar() {
  return (
    <div style={styles.container}>
      <h1>WIC</h1>
    </div>
  );
}
