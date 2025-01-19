import { create } from "@/app/actions/route";
import Form from "./Form";

const AddTodo = () => {
  return (
    <Form action={create}>
      <div>
        <input type="text" name="input" />
        <button>Add</button>
      </div>
    </Form>
  );
};
export default AddTodo;
