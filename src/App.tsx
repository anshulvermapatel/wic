import * as React from "react";
import Navbar from "./navbar";
import LogoBar from "./logobar";
import Testimonials from "./testimonials";
import YTVideos from "./ytvideos";
import Services from "./services";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Navbar />
      <LogoBar />
      <Testimonials />
      <YTVideos />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
