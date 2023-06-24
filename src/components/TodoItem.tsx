export type TodoType = {
  id: number
  title: string
  isComplete: boolean
}

export const TodoItem = (props: TodoType) => {
  return (
    <li>
      <input type="checkbox" checked={props.isComplete} /> {props.title}
    </li>
  )
}
