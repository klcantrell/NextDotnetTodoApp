import axios from 'axios';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('todos', getTodos)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function TodosReactQueryServer(props: any) {
  const { data, isLoading } = useQuery('todos', getTodos);

  return (
    <div>
      {isLoading ? 'Loading...' : (
        <>
          <p>
            {`You have ${data.length ?? 0} todo(s)`}
          </p>
          <ul>
            {data.map((todo: any) => <li key={todo.id}>{todo.name}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}

async function getTodos() {
    const response = await axios.get('https://localhost:5001/api/TodoItems');
    return response.data;
}
