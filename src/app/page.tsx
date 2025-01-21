import AddTodo from "@/components/AddTodo";
import ChangeTodo from "@/components/ChangeTodo";
import DeleteTodo from "@/components/DeleteTodo";
import EditTodo from "@/components/EditTodo";
import Todo from "@/components/Todo";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <div>
      <div>Todo List</div>
      <AddTodo />
      {data.map((todo, id) => (
        <div key={id}>
          <Todo todo={todo} />
          <ChangeTodo todo={todo} />
          <EditTodo todo={todo} />
          <DeleteTodo todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default Home;
