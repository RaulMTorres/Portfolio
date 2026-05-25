const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    let errorBody;
    try {
      errorBody = await response.json();
    } catch {
      errorBody = { error: response.statusText };
    }
    throw new Error(errorBody.error || `HTTP ${response.status}`);
  }

  return response.json();
}

export const api = {
  getProjects: () => request('/projects'),
  getSkills: () => request('/skills'),
  getExperiences: () => request('/experiences'),
  sendContactMessage: (payload) =>
    request('/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
};
