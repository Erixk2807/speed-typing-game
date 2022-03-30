import { useEffect, useState, useRef } from "react";

const useGameLogic = (startingTime = 30) => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timer, setTimer] = useState(startingTime);
  const [timerOn, setTimerOn] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (timer == 0 || timerOn == false) {
      setTimerOn(false);
      getWordsCount(text);
      return;
    }
    setTimeout(() => setTimer((prevState) => prevState - 1), 1000);
  }, [timer, timerOn]);

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const getWordsCount = (text) => {
    const wordsArr = text.trim().split(" ");
    const fillteredWords = wordsArr.filter((word) => word !== "");
    setWordCount(fillteredWords.length);
  };

  const startTimer = () => {
    setTimer(startingTime);
    setText("");
    setWordCount(0);
    setTimerOn(true);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };

  return {
    textAreaRef,
    text,
    onChange,
    timerOn,
    timer,
    startTimer,
    wordCount,
  };
};

export default useGameLogic;
