export const wordsService = {
  getWordList() {
    if (localStorage.getItem('wordList')) {
      return JSON.parse(localStorage.getItem('wordList'))
    } else {
      return []
    }
  },

  setWordList(wordArray) {
    localStorage.setItem('wordList', JSON.stringify(wordArray));
  },

  addWord(word) {
    let wordList = this.getWordList();
    wordList.push({word, date: Date.now()});
    this.setWordList(wordList);
  },

  deleteWord(word) {
    const wordList = this.getWordList();
    const newWordList = wordList.filter((wordObject) => {
      return wordObject.word != word;
    });
    this.setWordList(newWordList);
  }
};