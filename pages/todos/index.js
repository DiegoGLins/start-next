import styles from "../../styles/ToDo.module.css";
import Link from "next/link";

export async function getStaticProps() {
  //responsavel por puxar todos os dados da api
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await data.json();
  return {
    props: { todos },
  };
}

export default function Todo({ todos }) {
  return (
    <>
      <h1>Tarefas para fazer</h1>
      <ul className={styles.todolist}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - <Link href={`/todos/${todo.id}`}>Ver mais</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
