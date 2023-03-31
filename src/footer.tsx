import { CSSProperties } from "react";

const styles = {
  container: {
    flex: 1,
    // flexDirection: "row",
    height: 80,
    backgroundColor: "Purple",
  },
};
export default function Footer() {
  return (
    <div style={styles.container}>
      <h1>Footer</h1>
    </div>
  );
}
