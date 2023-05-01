import {API_KEY} from './api-key.js';

const options = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + API_KEY,
    },
    method: 'POST',
    body: JSON.stringify({
        "model": 'gpt-3.5-turbo',
        "messages": [{"role": "user", "content": "Who fought in the revolutionary war?"}]
    }),
};

fetch('https://api.openai.com/v1/chat/completions', options)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error('error:' + err));

