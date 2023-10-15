
import './App.css'
import Nav from './components/Nav'
import Note from './components/Note'
import NoteForm from './components/NoteForm'
import { NoteProvider } from './context/NoteContext'

function App() {
  

  return (
    <>
    <NoteProvider>
     <Nav />
    
     <NoteForm /> 
     <Note />
     </NoteProvider>
    </>
  )
}

export default App
