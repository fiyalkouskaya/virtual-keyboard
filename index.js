// add class to body
document.body.classList.add('body');

// Create div.wrapper 

const wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrapper');
document.body.appendChild(wrapperDiv);

// Create h1.title

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'RSS Virtual Keyboard';
wrapperDiv.appendChild(title);

// Create textarea.textarea 

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.id = 'textarea';
textarea.rows = '5';
textarea.cols = '5';
wrapperDiv.appendChild(textarea);

// Create div.keyboard

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
keyboard.id = 'keyboard';
wrapperDiv.appendChild(keyboard);

// Create p.description

const description = document.createElement('p');
description.classList.add('description');
description.textContent = 'The keyboard was created via WindowsOS';
wrapperDiv.appendChild(description);

// Create p.language

const language = document.createElement('p');
language.classList.add('language');
language.textContent = 'Switch language: left ctrl + alt';
wrapperDiv.appendChild(language);
