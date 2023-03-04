import React from 'react';
import { useQuery } from 'react-query';

const TranslatedWord = ({ text }) => {
  const { isLoading, error, data } = useQuery('translateWord', () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", "en");
    encodedParams.append("target_language", "ru");
    encodedParams.append("text", 'word');

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'cd2dfebd2cmsh0163ccffc61b51ep10bf7bjsnbe47d2776186',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: encodedParams
    };

    return new Promise(res => res("it's a promise"));

    return fetch(
      'https://text-translator2.p.rapidapi.com/translate', options
    ).then(response => response.json())
  })

  console.log(text);
  console.log(data);

  return (
    <div>
asdf
    </div>
  );
}

export default TranslatedWord;
