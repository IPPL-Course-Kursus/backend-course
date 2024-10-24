const prohibitedWords = ["badword1", "badword2", "badword3"];

export const checkProhibitedWords = (input: string): boolean => {
  return prohibitedWords.some((word) => input.toLowerCase().includes(word));
};
