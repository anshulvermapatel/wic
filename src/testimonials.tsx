import { CSSProperties } from "react";

const styles = {
  container: {
    flex: 1,
    // flexDirection: "row",
    height: 300,
    backgroundColor: "blue",
  },
};
export default function Testimonials() {
  return (
    <div style={styles.container}>
      <h1>Testimonials</h1>
    </div>
  );
}
