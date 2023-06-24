import { TodoList } from './components/TodoList'
import { TodoType } from './components/TodoItem'

function App() {
  const todos: TodoType[] = [
    {
      id: 1,
      title: 'CSS',
      isComplete: false,
    },
    {
      id: 2,
      title: 'HTML',
      isComplete: true,
    },
    {
      id: 3,
      title: 'JS',
      isComplete: false,
    },
  ]

  return (
    <>
      <TodoList title="What to learn" todos={todos} />
    </>
  )
}

export default App
