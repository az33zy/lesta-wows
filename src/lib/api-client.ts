async function fetchApi<T>(url: string, body: string): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body,
  });

  return response.json();
}

export const api = {
  query<T>(url: string, query: string): Promise<T> {
    return fetchApi<T>(url, JSON.stringify({ query }));
  },
};
