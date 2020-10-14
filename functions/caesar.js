const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz'.split('');

const caesar = (text, key = 0) => {
  const textArr = text.split('');

  const accurateIndex = (wordLower) => {
    const appliedIndex = ALPHABETS.indexOf(wordLower) + key;
    return appliedIndex >= ALPHABETS.length
      ? ALPHABETS.length - appliedIndex : appliedIndex;
  };

  const newArr = textArr.map((word) => {
    const wordLower = word.toLowerCase();
    if (ALPHABETS.includes(wordLower)) {
      const index = accurateIndex(wordLower);
      if (word === word.toUpperCase()) {
        return ALPHABETS[index].toUpperCase();
      }
      return ALPHABETS[index];
    }
    return word;
  });
  return newArr.join('');
};

module.exports = caesar;