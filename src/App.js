import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Profile2 from './components/destructuringProps';
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Message messageCode="10 "messageContent="This is a message from props"></Message>
      <Profile name="Sebastian" lastname="Alegria"></Profile>
      <Profile2 name="Marta"lastname="Sandoval"></Profile2>
      <Counter></Counter>
      <Resume name="Sebastian"></Resume>
    </div>
  );
}

export default App;
