import { CSSProperties } from "react";

const styles = {
  container: {
    flex: 1,
    // flexDirection: "row",
    height: 80,
    backgroundColor: "orange",
  },
};
export default function YTVideos() {
  return (
    <div style={styles.container}>
      <h1>YTVideos</h1>
    </div>
  );
}
