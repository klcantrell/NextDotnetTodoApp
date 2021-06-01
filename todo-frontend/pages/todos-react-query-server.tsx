import axios from 'axios';
import { useQuery } from 'react-query';

import DarkModeSettings from '../components/dark-mode-settings';

export async function getStaticProps() { // play with build time generation
  const todos = await getTodos();
  return { props: { todos } };
}

export default function TodosReactQueryServer(props: any) {
  const { data, isLoading } = useQuery('todos', getTodos, { initialData: props.todos });

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
      <DarkModeSettings />
    </div>
  );
}

async function getTodos() {
    const response = await axios.get('https://localhost:5001/api/TodoItems');
    return response.data;
}
