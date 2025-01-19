import { todoType } from "@/types/todoTypes";
import Form from "./Form";
import { deleteTodo } from "@/app/actions/route";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="inputId" value={todo.id} />
      <button type="submit">Delete</button>
    </Form>
  );
};

export default DeleteTodo;
