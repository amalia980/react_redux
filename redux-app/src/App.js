import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { userActionCreators, accountActionCreators } from './store/exportActions';
import { bindActionCreators } from 'redux';

function App() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { addUser, removeUser } = bindActionCreators(userActionCreators, dispatch)
  const { deposit, withdraw } = bindActionCreators(accountActionCreators, dispatch);
  console.log(state)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux</h1>
          <p>Number of users: {state.users.length}</p>
          <button onClick={() => addUser({fname: "Amy"})}>Add user</button>
          <button onClick={() => removeUser()}>Remove user</button>
          {state.users.map((user, index) => <p key={index}>{user.fname}</p>)}
      <hr></hr>
      <p>Account balance $ {state.account} </p>
      <button onClick={() => deposit(500)}>Deposit</button>
      <button onClick={() => withdraw(500)}>Withdraw</button>
      </header>
    </div>
  );
}

export default App;
