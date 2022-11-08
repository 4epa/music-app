import morning from "../../assets/img/greeting/morning_img.jpg";
import day from "../../assets/img/greeting/day_img.jpg";
import evening from "../../assets/img/greeting/evening_img.webp";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../../redux/selectors/authorizationSelector";

const GreetingWrapper = styled.div`
  position: relative;

  @media (max-width: 450px) {
    padding-bottom: 20px;
  }
`;

const GreetingText = styled.h2`
  z-index: 10;
  color: #ece0dc;
  font-size: 40px;
  font-weight: 700;
  padding: 75px 75px 45px 75px;
  text-shadow: 1px 1px 15px rgba(17, 17, 17, 0.5);

  @media (max-width: 450px) {
    font-size: 30px;
    padding: 10px;
  }
`;

const GreetingBackGround = styled.div`
  z-index: -2;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  background: linear-gradient(
    0deg,
    rgba(78, 0, 71, 0) 0%,
    ${({color}) => color} 93%
  );
`;

//${({color}) => color}

const Greeting = () => {
  const profile = useSelector((state) => selectUserProfile(state));

  const currentDate = new Date();
  const [greeting, setGreeting] = useState(null);
  const [gradientColor, setGradientColor] = useState(null);

  useEffect(() => {
    checkTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkTime = () => {
    if (currentDate.getHours() >= 6 && currentDate.getHours() <= 12) {
      setGreeting("Good morning");
      setGradientColor("#a10f22");
    } else if (currentDate.getHours() >= 12 && currentDate.getHours() < 18) {
      setGreeting("Good day");
      setGradientColor("#104a97");
    } else {
      setGreeting("Good evening");
      setGradientColor("#1e0d5b");
    }
  };

  return (
    <GreetingWrapper>
      <GreetingText>{`${greeting}, ${profile.displayName}`}</GreetingText>
      <GreetingBackGround color={gradientColor} alt="" />
    </GreetingWrapper>
  );
};

export default Greeting;
