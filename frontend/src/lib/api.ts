const API_URL = "https://kanon-gaming-1.onrender.com"; // Replace with your backend URL

export async function createUser(name: string) {
  const response = await fetch(`${API_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  })
  if (!response.ok) {
    throw new Error('Failed to create user')
  }
  return response.json()
}

export async function getUser(userId: string) {
  const response = await fetch(`${API_URL}/user/${userId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }
  return response.json()
}

