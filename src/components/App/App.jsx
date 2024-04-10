/* eslint-disable prettier/prettier */
import { useState } from 'react';
import Input from '../Input/Input';
import './App.scss';
import Title from '../Title/Title';
import Display from '../Display/Display';
import discussion from '../../data/injures';

function App() {
  const [indexLetter, setIndexLetter] = useState(0);
  // variable pour afficher dans l'input
  const [inputSweetWord, setInputSweetWord] = useState('');
  // il faut creer un index dans la discussion qui s'incremente a chaque soumission
  const [nicoleSpeech, setNicoleSpeech] = useState('');
  const [johnSpeech, setJohnSpeech] = useState('');
  const [textToModify, setTextToModify] = useState(discussion[0].injure);
  // Variable count qui s'incrémente pour le déroulé de l'histoire
  const [countHistory, setCountHistory] = useState(0);

  const handleSweetWord = () => {
    if (indexLetter < textToModify.length) {
      const currentLetter = textToModify[indexLetter];
      setInputSweetWord(
        (prevInputSweetWord) => prevInputSweetWord + currentLetter
      );
      setIndexLetter(indexLetter + 1);
    }
  };
  const handleSubmit = () => {
    const newInsult = discussion[0].injure;
    setNicoleSpeech(newInsult);

    const newAnswer = discussion[0].answer;
    setJohnSpeech(newAnswer);

    setIndexLetter('');
    setCountHistory(countHistory + 1);
  };

  return (
    <div className="App">
      <Title />
      <Display nicole={nicoleSpeech} john={johnSpeech} />
      <Input
        injure={inputSweetWord}
        handleSweetWord={handleSweetWord}
        handleSubmit={handleSubmit}
      />
      <div>Made with by Denovann</div>
    </div>
  );
}

export default App;
