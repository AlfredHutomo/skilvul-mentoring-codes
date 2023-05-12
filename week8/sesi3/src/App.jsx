import './App.css'
import ClickableButton from './components/ClickableButton';
import UserForm from './components/UserForm';

function App() {
  const names = ['John', 'Jane', 'Joe', 'Alfred'];

  return (
    <div>
      <ClickableButton owner={names[0]}/>
      <UserForm />
    </div>
  )
}

export default App
