import Nav from "./components/Nav/Nav.jsx";
import Main from "./components/Main/Main.jsx";
import Body from "./components/Body/Body.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { IconContext } from "react-icons";
function App() {
  return (
    <IconContext.Provider value={{ color: "#429ae8", size: "2em" }}>
      <Nav />
      <Main />
      <Body />
      <Contact />
      <Footer />
    </IconContext.Provider>
  );
}

export default App;
