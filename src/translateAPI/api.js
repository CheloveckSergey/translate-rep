import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

export const translationService = {
  async translateText(text) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", "en");
    encodedParams.append("target_language", "ru");
    encodedParams.append("text", text);

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'cd2dfebd2cmsh0163ccffc61b51ep10bf7bjsnbe47d2776186',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: encodedParams
    };

    return fetch(
      'https://text-translator2.p.rapidapi.com/translate', options
    ).then(response => response.json());
  }
}