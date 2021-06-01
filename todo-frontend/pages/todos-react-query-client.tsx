import { useQuery } from 'react-query';

import DarkModeSettings from '../components/dark-mode-settings';

export default function TodosReactQueryClient() {
  const { data, isLoading } = useQuery('todos', async () => {
    const response = await fetch('https://localhost:5001/api/TodoItems');
    return response.json();
  });

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
