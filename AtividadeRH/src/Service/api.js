const API_URL = "http://localhost:8081";

async function fetchJson(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Erro ${response.status}: ${response.statusText}`);
  }
  return response.json();
}

export function fetchClientes() {
  return fetchJson('/clientes');
}

export function fetchFuncionarios() {
  return fetchJson('/funcionarios');
}

export function createCliente(cliente) {
  return fetch(`${API_URL}/clientes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cliente),
  }).then(async (response) => {
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Erro ${response.status}: ${error}`);
    }
    return response.json();
  });
}

export function createFuncionario(funcionario) {
  return fetch(`${API_URL}/funcionarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(funcionario),
  }).then(async (response) => {
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Erro ${response.status}: ${error}`);
    }
    return response.json();
  });
}
