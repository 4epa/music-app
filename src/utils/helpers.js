const formatDuration = (value) => {
  const time = Math.ceil(value);
  const minute = Math.floor(time / 60);
  const secondLeft = time - minute * 60;
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}

const random = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const limitSymbol = (text, count) => {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

export  {formatDuration, random, limitSymbol }
