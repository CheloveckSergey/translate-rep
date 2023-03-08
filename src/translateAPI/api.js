import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

export const translationService = {
  async translateText(text) {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'cd2dfebd2cmsh0163ccffc61b51ep10bf7bjsnbe47d2776186',
        'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
      },
      body: `{"q":"${text}","source":"en","target":"ru"}`
    };

    const response = await fetch(
      'https://deep-translate1.p.rapidapi.com/language/translate/v2', options
    );
    const json = await response.json();
    return json.data.translations.translatedText;
  },

  async translateTextToLanguage(text, outputLanguage) {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'cd2dfebd2cmsh0163ccffc61b51ep10bf7bjsnbe47d2776186',
        'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
      },
      body: `{"q":"${text}","source":"en","target":"${outputLanguage}"}`
    };

    const response = await fetch(
      'https://deep-translate1.p.rapidapi.com/language/translate/v2', options
    );
    const json = await response.json();
    return json.data.translations.translatedText;
  }
}