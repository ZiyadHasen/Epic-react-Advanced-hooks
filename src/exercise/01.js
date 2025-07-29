// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// test

function Counter({initialCount = 0, step = 3}) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return {...state, count: state.count + action.step}
      case 'sub':
        return {...state, count: state.count - action.step}
      default:
        return state
    }
  }

  const [state, dispatch] = React.useReducer(reducer, {count: initialCount})

  return (
    <div style={{padding: '4rem'}}>
      <p> {state.count}</p>
      <div style={{display: 'flex', gap: '2rem'}}>
        <button
          onClick={() => {
            dispatch({type: 'add', step})
          }}
        >
          increament
        </button>
        <button
          onClick={() => {
            dispatch({type: 'sub', step})
          }}
        >
          deacrement
        </button>
      </div>
    </div>
  )
}

function App() {
  return <Counter />
}

export default App
