/* eslint-disable prettier/prettier */
import { useState } from 'react';
import Input from '../Input/Input';
import './App.scss';
import Title from '../Title/Title';
import Display from '../Display/Display';

function App() {
  const [indexLetter, setIndexLetter] = useState(0);
  const [inputSweetWord, setInputSweetWord] = useState('');
  const textToDisplay = 'bonjour ça va';

  const handleSweetWord = () => {
    if (indexLetter < textToDisplay.length) {
      const currentLetter = textToDisplay[indexLetter];
      setInputSweetWord(
        (prevInputSweetWord) => prevInputSweetWord + currentLetter
      );
      setIndexLetter(indexLetter + 1);
    }
  };

  return (
    <div className="App">
      <Title />
      <Display />
      <Input injure={inputSweetWord} handleSweetWord={handleSweetWord} />
      <div>Made with by Denovann</div>
    </div>
  );
}

export default App;
