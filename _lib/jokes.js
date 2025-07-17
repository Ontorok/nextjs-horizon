const getJokes = async () => {
  const response = await fetch(`https://api.chucknorris.io/jokes/random`, {
    cache: 'force-cache',
  });
  if (!response.ok) {
    throw new Error('Fetching error...');
  }
  const jokes = await response.json();
  const value = jokes.value;
  console.log({ from: 'lib', value });
  return value;
};

export { getJokes };
