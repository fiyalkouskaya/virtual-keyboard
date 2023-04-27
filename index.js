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

// Implement the adding rows function

const createKeys = (rowClasses) => {
    const rowSizes = [14, 15, 13, 14, 9]; // Defines the number of elements in a row
    const rows = [];
  
    rowSizes.forEach((rowSize, index) => {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 0; i < rowSize; i++) { // Add buttons to a row
            const key = document.createElement("div");
            key.classList.add("key"); 
            
            if (rowClasses[index]) {
               key.classList.add(rowClasses[index][i]); // Add the class from the array to the div.button
            }

            row.appendChild(key);
          }
      
          rows.push(row);
        });
      
        return rows;
      };

// Defines an array of classes for each row

const rowClasses = [
    ["backQuote", "digit1", "digit2", "digit3", "digit4", "digit5", "digit6", "digit7", "digit8", "digit9", "digit0", "minus", "equal", "backspace"],
    ["tab", "keyQ", "keyW", "keyE", "keyR", "keyT", "keyY", "keyU", "keyI", "keyO", "keyP", "bracketLeft", "bracketRight", "backslash", "delete"],
    ["capsLock", "keyA", "keyS", "keyD", "keyF", "keyG", "keyH", "keyJ", "keyK", "keyL", "semicolon", "quote", "enter"],
    ["shiftLeft", "backslash", "keyZ", "keyX", "keyC", "keyV", "keyB", "keyN", "keyM", "comma", "period", "slash", "arrowUp", "shiftRight"],
    ["ctrlLeft", "win", "altLeft", "space", "altRight", "ctrlRight", "arrowLeft", "arrowDown", "arrowRight"]
  ]; 

// Add rows to div.keyboard

const rows = createKeys(rowClasses);
rows.forEach((row) => {
    keyboard.appendChild(row);
  });
