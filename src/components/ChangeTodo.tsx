import { todoType } from "@/types/todoTypes";
import Form from "./Form";
import { todoStatus } from "@/app/actions/route";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={todoStatus}>
      <input name="inputId" value={todo.id} type="hidden" />
      <button type="submit">Done</button>
    </Form>
  );
};

export default ChangeTodo;
