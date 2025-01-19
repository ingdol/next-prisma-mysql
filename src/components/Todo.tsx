import { todoType } from "@/types/todoTypes";

const Todo = ({ todo }: { todo: todoType }) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <div></div>
    </div>
  );
};

export default Todo;
