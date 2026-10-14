const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }

  if (response.status === 204) return null
  return response.json()
}

export const portfolioApi = {
  getProjects: () => request('/api/portfolio/projects'),
  getProject: (slug) => request(`/api/portfolio/projects/${slug}`),
  getSkills: () => request('/api/portfolio/skills'),
  getExperience: () => request('/api/portfolio/experience'),
  sendContact: (payload) => request('/api/portfolio/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  }),
}
