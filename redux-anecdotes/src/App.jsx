import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <div><AnecdoteList /></div>
      <div><AnecdoteForm /></div>
    </div>
  )
}

export default App