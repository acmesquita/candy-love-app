import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import { listItems } from './factories'
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <App listItems={listItems}/>
  </React.StrictMode>,
  document.getElementById('root')
)
