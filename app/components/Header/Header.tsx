import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header>
      <div id="nav_wrapper">
        <div id="logo">
          <Logo />
        </div>
        <div className="menu">
          <Nav />
        </div>
      </div>
      <div id="slider_wrapper">
        <div className="slider_inner_text">
          <p className="slider_inner_text_title">
            <span className="blue">LOREM IPSUM</span> DOLOR SIT AMETCONSECTETUR <span className="blue">ADIPISCING</span>
          </p>
          <div className="slider_inner_text_body">
            <span className="b">At vero eos et accusamus et odio dignissimos ducimus!</span>
            <ul>
              <li>Totam rem aperiam eaque ipsa</li>
              <li>Sit voluptatem accusantium doloremque laudantium</li>
              <li>Sed ut perspiciatis, unde omnis iste natus error</li>
            </ul>
          </div>
          <div className="slider_inner_buttons">
            <button className="blue">заказать</button>
            <button className="white">подробнее</button>
          </div>
        </div>
      </div>
    </header>
  );
}
