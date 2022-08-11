import style from './Greeting.module.css'

const Greeting = () => {
  const currentdate = new Date();

  const greeting = () => {
    if (currentdate.getHours() >= 6 && currentdate.getHours() <= 12)
      return "Good morning";
    else if (currentdate.getHours() >= 12 && currentdate.getHours() <= 18)
      return "Good day";
    else return "Good evening";
  };

  return <h2 className={style.greeting}>{greeting()}</h2>;
};

export default Greeting;