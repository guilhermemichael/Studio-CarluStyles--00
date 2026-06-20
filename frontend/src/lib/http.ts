import { env } from "./env";

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${env.apiBaseUrl}${path}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Erro HTTP ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function apiPost<TResponse, TPayload>(
  path: string,
  payload: TPayload,
): Promise<TResponse> {
  const response = await fetch(`${env.apiBaseUrl}${path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Erro HTTP ${response.status}`);
  }

  return response.json() as Promise<TResponse>;
}
