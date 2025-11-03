import './App.css'
import EditTodo from './components/EditTodo'
import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo'

function App() {

  return (
    <div className="App">
      <InputTodo />
      <ListTodo />
      <EditTodo />
    </div>
  )
}

export default App
