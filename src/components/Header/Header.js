import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      &#9889; Movie Adda
    </span>
  );
};

export default Header;
