import React, { useCallback, useMemo } from "react";
import { TITO_QUOTES } from "../consts/ContentPage";

const useBubbleDialog = () => {
  const [activeBubbleText, setActiveBubbleText] =
    React.useState<boolean>(false);

  const [quoteIndex, setQuoteIndex] = React.useState<number>(0);

  const activeQuote = useMemo(() => TITO_QUOTES[quoteIndex], [quoteIndex]);

  const toggleBubble = useCallback(() => {
    setActiveBubbleText((prev) => !prev);
  }, []);

  const nextQuote = useCallback(() => {
    setQuoteIndex((prev) => (prev + 1) % TITO_QUOTES.length);
  }, []);

  const prevQuote = useCallback(() => {
    setQuoteIndex(
      (prev) => (prev - 1 + TITO_QUOTES.length) % TITO_QUOTES.length,
    );
  }, []);

  const randomQuote = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * TITO_QUOTES.length);
    setQuoteIndex(randomIndex);
  }, []);

  const closeBubble = useCallback(() => {
    setActiveBubbleText(false);
  }, []);

  // click outside the container to remove the state

  return {
    activeBubbleText,
    activeQuote,
    closeBubble,
    toggleBubble,
    nextQuote,
    prevQuote,
    randomQuote,
  };
};

export default useBubbleDialog;
