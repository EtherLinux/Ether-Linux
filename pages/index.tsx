import Footer from "./containers/footer";
import Downloads from "./containers/downloads";
import Features from "./containers/features";
import WhatisEther from "./containers/whatisEther";
import Header from "./containers/header";
import Donate from "./components/donate";
import Navbar from "./components/navbar";
import Team from "./containers/team";

export default function Main() {
  return (
    <>
      <div className="App">
        <div className="gradient_bg">
          <Navbar />
          <Header />
        </div>
        <WhatisEther />
        <Features />
        <Downloads />
        <Donate />
        <Team />
        <Footer />
      </div>
    </>
  );
}
