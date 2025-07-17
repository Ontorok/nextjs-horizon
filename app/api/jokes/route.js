import { getJokes } from '@/_lib/jokes';

export async function GET(_request) {
  const jokes = await getJokes();
  console.log({ from: 'route', value: jokes });
  return Response.json(jokes);
}
