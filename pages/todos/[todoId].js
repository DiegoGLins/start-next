import Link from "next/link";

export async function getStaticProps(context) {
  //responsável por puxar os dados de acordo com o parâmetro passado
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );

  const todo = await data.json();

  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  //responsavel por puxar todos os dados da api
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);

  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Todo({ todo }) {
  return (
    <>
      <Link href="/todos">Voltar</Link>
      <h1>Exibindo o todo: {todo.id}</h1>
      <h3>Texto: {todo.title}</h3>
      <p>
        Comentário: blá blá blá...
        <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link>
      </p>
      <p>
        Comentário: la la la...
        <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link>
      </p>
      <p>
        Comentário: oi oi oi ...
        <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link>
      </p>
      <p>
        Comentário: le le le ...
        <Link href={`/todos/${todo.id}/comments/4`}>Detalhes</Link>
      </p>
      <p>
        Comentário: li li li li ...
        <Link href={`/todos/${todo.id}/comments/5`}>Detalhes</Link>
      </p>
    </>
  );
}
