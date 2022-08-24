import { useState, useEffect } from "react";
import style from "./Header.module.css";

const Header = (props) => {

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const classes = () => {
    if (scroll > 0) return style.header_bg_active
    return style.header_bg
  }

  return (
    <header className="header">
      <div className={classes()}></div>
      <div className={style.header_container}>
        <h1 className={style.app_name}>Music player</h1>
      </div>
    </header>
  );
};

export default Header;
