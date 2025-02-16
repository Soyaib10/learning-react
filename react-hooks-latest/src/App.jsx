import './App.css'
import UseEffect1 from './components/UseEffect1'
import UseEffectApi from './components/UseEffectApi'
import Document from './components/custom-hooks/Document'
import MemoCaling from './components/memo/MemoCalling'
import UseCallbackChild from './components/use-callback/UseCallbackChild'
import UseCallbackParent from './components/use-callback/UseCallbackParent'
import CounterFromReducer from './components/use-reducer/UseReducer'
import Counter from './components/use-ref/Counter'
import DomRef from './components/use-ref/DomRef'


function App() {
  return (
    <div>
      <UseEffect1 />
      <UseEffectApi />  
      <Document/>
      <DomRef />
      <Counter />
      <CounterFromReducer />
      <MemoCaling />
      <UseCallbackParent />
      <UseCallbackChild />
    </div>
  )
}

export default App
