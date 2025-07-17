import { getJokes } from '@/_lib/jokes';
import Refresh from './Refresh';

export default async function DataFetchingPage() {
  const jokes = await getJokes();
  return (
    <div>
      <h3 className="text-center">Data Fetching</h3>
      <Refresh />
      <p className="mt-4 p-4 border border-gray-200 border-dashed">{jokes}</p>
    </div>
  );
}
