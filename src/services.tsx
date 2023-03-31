import { CSSProperties } from "react";

const styles = {
  container: {
    flex: 1,
    // flexDirection: "row",
    height: 80,
    backgroundColor: "yellow",
  },
};
export default function Services() {
  return (
    <div style={styles.container}>
      <h1>Services</h1>
    </div>
  );
}
