// add class to body
document.body.classList.add('body');

// Create div.wrapper 

const wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrapper');
document.body.appendChild(wrapperDiv);

// Create h1.title

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'RSS VIRTUAL KEYBOARD';
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
description.textContent = 'THE KEYBOARD WAS CREATED VIA WINDOWS OS';
wrapperDiv.appendChild(description);

// Create p.language

const language = document.createElement('p');
language.classList.add('language');
language.textContent = 'SWITCH LANGUAGE: LEFT CTRL +  LEFT ALT';
wrapperDiv.appendChild(language);

// Defines an array of symbols for each row in eng and polish

const englishTextValues = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BCKSPC"],
  ["TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "DEL"],
  ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"],
  ["SHIFT", "\\", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "↑", "SHFT"],
  ["CTRL", "WIN", "ALT", " ", "ALT", "CTRL", "←", "↓", "→"]
];

const polishTextValues = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BCKSPC"],
  ["TAB", "Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "[", "]", "\\", "DEL"],
  ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"],
  ["SHIFT", "\\", "Y", "X", "C", "V", "B", "N", "M", ",", ".", "/", "↑", "SHFT"],
  ["CTRL", "WIN", "ALT", " ", "ALT", "CTRL", "←", "↓", "→"]
];

// Defines an array of classes for each row

const rowClasses = [
  ["backQuote", "digit1", "digit2", "digit3", "digit4", "digit5", "digit6", "digit7", "digit8", "digit9", "digit0", "minus", "equal", "backspace"],
  ["tab", "keyQ", "keyW", "keyE", "keyR", "keyT", "keyY", "keyU", "keyI", "keyO", "keyP", "bracketLeft", "bracketRight", "backslash", "delete"],
  ["capsLock", "keyA", "keyS", "keyD", "keyF", "keyG", "keyH", "keyJ", "keyK", "keyL", "semicolon", "quote", "enter"],
  ["shiftLeft", "backslash", "keyZ", "keyX", "keyC", "keyV", "keyB", "keyN", "keyM", "comma", "period", "slash", "arrowUp", "shiftRight"],
  ["ctrlLeft", "win", "altLeft", "space", "altRight", "ctrlRight", "arrowLeft", "arrowDown", "arrowRight"]
]; 

  // Implement the adding rows function

const createKeys = (rowClasses) => {
    const rowSizes = [14, 15, 13, 14, 9]; // Defines the number of elements in a row
    const rows = [];
    let currentLanguage = localStorage.getItem("language") || "english";
    const textValues = currentLanguage === 'english' ? englishTextValues : polishTextValues;
  
    rowSizes.forEach((rowSize, index) => {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < rowSize; i++) { // Add buttons to a row
            const key = document.createElement('div');
            key.classList.add('key'); 
            
            if (rowClasses[index]) {
               key.classList.add(rowClasses[index][i]); // Add the class from the array to the div.button
               
               const classIndex = rowClasses[index].indexOf(key.classList[1]);
               if (classIndex >= 0) {
                 key.textContent = textValues[index][classIndex];
               }
            }

            row.appendChild(key);
          }
      
          rows.push(row);
        });
      
        return rows;
      };

// Add rows to div.keyboard

const rows = createKeys(rowClasses);
rows.forEach((row) => {
    keyboard.appendChild(row);
  });

const keys = document.querySelectorAll('.key');

// Keyboard layout toggle function
const toggleLanguage = () => {
  const currentLanguage = localStorage.getItem('language') || 'english';
  const newLanguage = currentLanguage === 'english' ? 'polish' : 'english';
  localStorage.setItem('language', newLanguage);
  window.location.reload(); // Reload the page to apply the new language
};

// Add event listeners to document for keydown ctrlleft and altleft

document.addEventListener('keydown', (event) => {
  if (event.code === 'ControlLeft') {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'AltLeft') {
        toggleLanguage();
      }
    });
  }
});


// Function to highlight a pressed/clicked key

const highlightKey = (event) => {
  const key = event.type === 'click' ? event.target.textContent.toLowerCase() : event.key.toLowerCase();
  keys.forEach((virtualKey) => {
    if (virtualKey.textContent.toLowerCase() === key || 
        key === 'delete' && virtualKey.textContent === 'DEL' ||
        key === 'backspace' && virtualKey.textContent === 'BCKSPC' ||
        key === 'capslock' && virtualKey.textContent === 'CAPS' ||
        key === 'shift' && (event.code === 'ShiftLeft' && event.location === 1 && virtualKey.classList.contains('shiftLeft')) ||
        key === 'shift' && (event.code === 'ShiftRight' && event.location === 2 && virtualKey.classList.contains('shiftRight')) ||
        event.metaKey && virtualKey.textContent === 'WIN' ||
        key === 'control' && (event.location === 1 && virtualKey.classList.contains("ctrlLeft") ||
                              event.location === 2 && virtualKey.classList.contains("ctrlRight")) ||
        key === 'arrowup' && virtualKey.textContent === '↑' ||
        key === 'arrowright' && virtualKey.textContent === '→'||
        key === 'arrowdown' && virtualKey.textContent === '↓'||
        key === 'arrowleft' && virtualKey.textContent === '←'
        ) {
      virtualKey.classList.add('active');
    }
  });
};


// Function to remove highlight from a released key

const removeHighlight = (event) => {
  const key = event.key.toLowerCase();
  keys.forEach((virtualKey) => {
    if (virtualKey.textContent.toLowerCase() === key || 
      key === 'delete' && virtualKey.textContent === 'DEL' ||
      key === 'backspace' && virtualKey.textContent === 'BCKSPC' ||
      key === 'capslock' && virtualKey.textContent === 'CAPS' ||
      key === 'shift' && (event.code === 'ShiftLeft' && event.location === 1 && virtualKey.classList.contains('shiftLeft')) ||
      key === 'shift' && (event.code === 'ShiftRight' && event.location === 2 && virtualKey.classList.contains('shiftRight')) ||
      event.metaKey && virtualKey.textContent === 'WIN' ||
      key === 'control' && (event.location === 1 && virtualKey.classList.contains("ctrlLeft") ||
                            event.location === 2 && virtualKey.classList.contains("ctrlRight")) ||
      key === 'arrowup' && virtualKey.textContent === '↑' ||
      key === 'arrowright' && virtualKey.textContent === '→'||
      key === 'arrowdown' && virtualKey.textContent === '↓'||
      key === 'arrowleft' && virtualKey.textContent === '←'
      ) {
      virtualKey.classList.remove('active');
    }
  });
};

// Add event listeners to document for keydown and keyup events and clicks

document.addEventListener('keydown', highlightKey);
document.addEventListener('keyup', removeHighlight);
keys.forEach((virtualKey) => {
  virtualKey.addEventListener('click', highlightKey);
  virtualKey.addEventListener('mouseup', removeHighlight);
});

// Implement clicks on the buttons with a mouse clicks

keys.forEach((key) => {
  key.addEventListener('click', () => {
    if (key.classList.contains('backspace')) {
      deleteLastCharacter();
    } else if (key.classList.contains('delete')) {
      deleteNextCharacter();
    } else if (key.classList.contains('enter')) {
      moveCursorToNextLine();
    } else {
    const keyText = key.textContent;
    insertText(keyText);
    }
  });
});

function deleteLastCharacter() {
  const textArea = document.querySelector('textarea');
  const currentValue = textArea.value;
  const newValue = currentValue.slice(0, -1);
  textArea.value = newValue;
}

function deleteNextCharacter() {
  const textArea = document.querySelector('textarea');
  const cursorPosition = textArea.selectionStart;
  const currentValue = textArea.value;
  const newValue = currentValue.substring(0, cursorPosition) + currentValue.substring(cursorPosition + 1);
  textArea.value = newValue;
}

function moveCursorToNextLine() {
  const textArea = document.querySelector('textarea');
  const cursorPosition = textArea.selectionStart;
  const currentValue = textArea.value;
  const newValue = currentValue + '\n';
  textArea.value = newValue;
} 

// Function to insert text into the text area

const insertText = (text) => {
  const textarea = document.querySelector('#textarea');
  textarea.value += text;
};

