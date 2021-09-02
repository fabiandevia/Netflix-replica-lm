const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default async function login(data) {
  const response = await fetch(`${SERVER_URL}/api/token/`, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return await response.json();
}
