import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const button = document.getElementById('button');
const check = document.getElementById('check');
const flexCheckDefault = document.getElementById('flexCheckDefault');
const input = document.getElementById('disabledTextInput');
const checks = document.getElementById('checks');

button && button.addEventListener('click', function(e){
  e.preventDefault();
  function card(e){
    e.preventDefault();
    card.crea
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)

export {button, check, flexCheckDefault, input, checks}
