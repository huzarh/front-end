import { Banner } from "./index.jsx";
import css from "./style.module.css";

const Sponsors = () => {
  const images = [
    {
      star: 1,
      point: 1,
      bg: "#ee5007",
      title: "Öğretmen",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.",
      img: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    },
    {
      star: 1,
      point: 2,
      bg: "#b22727",
      title: "Öğretmen",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.",
      img: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hatColor=Pink&hairColor=Brown&facialHairType=Blank&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Blue03&eyeType=EyeRoll&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Brown",
    },
    {
      star: 1,
      point: 3,
      bg: "#006E7F",
      title: "Öğretmen",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.",
      img: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Round&hairColor=Black&facialHairType=Blank&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Deer&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Tanned",
    },
  ].map((image) => ({
    image,
  }));
  return (
    <>
      <div className={css.App}>
        <Banner images={images} speed={15000} />
      </div>
    </>
  );
};
export default Sponsors;
