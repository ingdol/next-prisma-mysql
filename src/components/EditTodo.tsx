"use client";
import { useState } from "react";
import Form from "./Form";
import { todoType } from "@/types/todoTypes";
import { edit } from "@/app/actions/route";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);
  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      {editTodo ? (
        <Form onSubmit={handleSubmit} action={edit}>
          <input name="inputId" value={todo.id} type="hidden" />
          <div>
            <input type="text" name="newTitle" />
            <button type="submit">Save</button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
