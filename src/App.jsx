import Hello from './components/Hello';

function App() {
  const person = {
    name: 'Gael',
    age: 36,
    message: 'Hello',
    numbers: [0, 1, 2, 3, 5, 7, 9, 12, 15, 18, 21],
  };

  return (
    <div className='App'>
      <Hello person={person} />
    </div>
  );
}

export default App;
