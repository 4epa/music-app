import style from './Greeting.module.css';
import morning from '../../assets/img/greeting/morning_img.jpg';
import day from '../../assets/img/greeting/day_img.jpg';
import evening from '../../assets/img/greeting/evening_img.webp';

const Greeting = () => {
  const currentdate = new Date();

  const greeting = () => {
    if (currentdate.getHours() >= 6 && currentdate.getHours() <= 12)
      return "Good morning";
    else if (currentdate.getHours() >= 12 && currentdate.getHours() <= 18)
      return "Good day";
    else return "Good evening";
  };

  const greetingBackground = () => {
    if (currentdate.getHours() >= 6 && currentdate.getHours() <= 12)
      return morning;
    else if (currentdate.getHours() >= 12 && currentdate.getHours() <= 18)
      return day;
    else return evening;
  }

  return (
    <div className={style.greeting}>
      <div className={style.greeting_container}>
        <h2 className={style.greeting__text}>{greeting()}</h2>
        <img className={style.greeting__bg} src={greetingBackground()} alt="" />
      </div>
      <img className={style.greeting__bg_blur} src={greetingBackground()} alt="" />
    </div>
  )
};

export default Greeting;