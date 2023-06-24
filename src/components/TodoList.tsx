import { TodoItem, TodoType } from './TodoItem'

type TodoListType = {
  title: string
  todos?: TodoType[]
}

export const TodoList = (props: TodoListType) => {
  return (
    <div>
      <h3>What to learn</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        {Boolean(props.todos?.length) &&
          props.todos?.map((todo) => (
            <TodoItem
              id={todo.id}
              title={todo.title}
              isComplete={todo.isComplete}
            />
          ))}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}
