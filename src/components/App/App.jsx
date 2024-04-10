import useState from 'react';
import Input from '../Input/Input';
import './App.scss';
import Title from '../Title/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <Input />
      <div>Footer</div>
    </div>
  );
}

export default App;
