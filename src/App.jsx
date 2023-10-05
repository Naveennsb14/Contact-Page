import Navigation from './components/Navigation/Navigation'
import Contactheader from './components/contactheader/Contactheader'
import ContactForm from './components/ContactForm/ContactForm'

import './App.css'


function App() {

  return (
    <div>
      <Navigation/>
      <main className='main-container'>
      <Contactheader/>
      <ContactForm/>
      </main>
    </div>

  )
}

export default App
