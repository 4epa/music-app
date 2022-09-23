import style from "./Greeting.module.css";
import morning from "../../assets/img/greeting/morning_img.jpg";
import day from "../../assets/img/greeting/day_img.jpg";
import evening from "../../assets/img/greeting/evening_img.webp";
import { useEffect, useState } from "react";

const Greeting = () => {
  const currentdate = new Date();
  const [greeting, setGreeting] = useState(null);
  const [greetingBackground, setGreetingBackground] = useState(null);

  useEffect(() => {
    checkTime()
  }, [])

  const checkTime = () => {
    if (currentdate.getHours() >= 6 && currentdate.getHours() <= 12) {
      setGreeting("Good morning");
      return setGreetingBackground(morning);
    } else if (currentdate.getHours() >= 12 && currentdate.getHours() < 18) {
      setGreeting("Good day");
      return setGreetingBackground(day);
    } else {
      setGreeting("Good evening");
      return setGreetingBackground(evening);
    }
  };

  return (
    <div className={style.greeting}>
      <h2 className={style.greeting__text}>{greeting}</h2>
      <img
        className={style.greeting__bg_blur}
        src={greetingBackground}
        alt=""
      />
    </div>
  );
};

export default Greeting;
