import './App.css'
import UseStateClassMultiple from './components/class-based/UseStateClassMultiple'
import UseStateFunctionMultiple from './components/function-based/UseStateFunctionMultiple'
import EventBubbling from './components/function-based/EventBubbling'
import ControlledComponent from './components/function-based/ControlledComponent'
// import Parent from './components/function-based/ParentToChild'
import Parent from './components/function-based/ChildToParent'

function App() {
  return (
    <div>
      <UseStateClassMultiple />
      <UseStateFunctionMultiple />
      <EventBubbling/>
      <ControlledComponent />
      <Parent />
      {/* <parent /> */}
    </div>
  )
}

export default App
