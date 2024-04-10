/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import Input from '../Input/Input';
import './App.scss';
import Title from '../Title/Title';
import Display from '../Display/Display';
import discussion from '../../data/injures';

function App() {
  // Variable count qui s'incrémente pour le déroulé de l'histoire
  const [countHistory, setCountHistory] = useState(0);
  const [indexLetter, setIndexLetter] = useState(0);
  // variable pour afficher dans l'input
  const [inputSweetWord, setInputSweetWord] = useState('');
  // il faut creer un index dans la discussion qui s'incremente a chaque soumission
  const [nicoleSpeech, setNicoleSpeech] = useState('');
  const [johnSpeech, setJohnSpeech] = useState('');
  const [textToModify, setTextToModify] = useState(
    discussion[countHistory].injure
  );

  useEffect(() => {
    // Mettre à jour textToModify à chaque changement de countHistory
    setTextToModify(discussion[countHistory].injure);
    // Réinitialiser l'indexLetter lorsque le texte est modifié
    setIndexLetter(0);
    // Réinitialiser l'inputSweetWord lorsque le texte est modifié
    setInputSweetWord('');
  }, [countHistory]);

  const handleSweetWord = (value) => {
    console.log(countHistory);
    // Si l'utilisateur écrit "<", on attend le caractère suivant
    if (value === '<') {
      setInputSweetWord(value); // Mettre à jour l'input avec "<"
      return; // Sortir de la fonction pour attendre le caractère suivant
    }

    if (inputSweetWord === '<' && value === '<3') {
      console.log('ok');
      setInputSweetWord(value);
      setNicoleSpeech('Je suis libérée !');
      setJohnSpeech('Merci davoir joué');
    } else if (indexLetter < textToModify.length) {
      const currentLetter = textToModify[indexLetter];
      setInputSweetWord(
        (prevInputSweetWord) => prevInputSweetWord + currentLetter
      );
      setIndexLetter(indexLetter + 1);
    }

    // if (indexLetter < textToModify.length) {
    //   const currentLetter = textToModify[indexLetter];
    //   setInputSweetWord(
    //     (prevInputSweetWord) => prevInputSweetWord + currentLetter
    //   );
    //   setIndexLetter(indexLetter + 1);
    // }
  };

  const handleSubmit = () => {
    const newInsult = discussion[countHistory].injure;
    setNicoleSpeech(newInsult);

    const newAnswer = discussion[countHistory].answer;
    setJohnSpeech(newAnswer);

    setCountHistory(countHistory + 1);
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter' && countHistory === 17) {
      console.log('fin du jeu');
      event.preventDefault();
    }
    if (
      event.key === 'Enter' &&
      inputSweetWord === textToModify &&
      textToModify !== ''
    ) {
      console.log('touche entrée appuyé et mot complété');
      event.preventDefault();
      handleSubmit();
    } else if (event.key === 'Enter') {
      console.log('touche entrée appuyé');
      event.preventDefault();
    }
  };

  return (
    <div className="App">
      <Title />
      <Display nicole={nicoleSpeech} john={johnSpeech} />
      <Input
        injure={inputSweetWord}
        handleSweetWord={handleSweetWord}
        enterPress={handleEnter}
      />
      <div>Made with by Denovann</div>
    </div>
  );
}

export default App;
