import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import Slider from "./components/Slider/Slider";

export default function Header() {
  return (
    <header id="header">
      <div id="header_menu">
        <div id="logo">
          <Logo />
        </div>
        <div className="nav_wrapper">
          <Nav />
        </div>
      </div>

      <Slider />
    </header>
  );
}
