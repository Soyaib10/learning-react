import './App.css'
import UseStateClassMultiple from './components/class-based/UseStateClassMultiple'
import UseStateFunctionMultiple from './components/function-based/UseStateFunctionMultiple'
import EventBubbling from './components/function-based/EventBubbling'
import ControlledComponent from './components/function-based/ControlledComponent'
// import Parent from './components/function-based/ParentToChild'
import Parent from './components/function-based/ChildToParent'
import TodoApp from './components/Todo.jsx/TodoApp'
import PropDrilling from '../../react-hooks-latest/src/components/prop-drilling/PropDrilling'

function App() {
  return (
    <div>
      <UseStateClassMultiple />
      <UseStateFunctionMultiple />
      <EventBubbling/>
      <ControlledComponent />
      <Parent />
      <TodoApp />
      <PropDrilling />
    </div>
  )
}

export default App
