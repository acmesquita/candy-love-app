import React from 'react'
import ReactDOM from 'react-dom'
import { makeApp } from './factories'
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    {makeApp()}
  </React.StrictMode>,
  document.getElementById('root')
)
