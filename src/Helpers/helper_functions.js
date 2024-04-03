// DEV DEPENDENCIES
import axios from "axios";

export const handleFetch = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
};

export const handleTextInput = (event, setInputValue) => {
  setInputValue(event.target.value);
};

export const handleScroll = (setDisplayCount) => {
  if (
    window.innerHeight + document.documentElement.scrollTop >=
    document.documentElement.offsetHeight
  ) {
    setDisplayCount((prev) => prev + 12);
  }
};
