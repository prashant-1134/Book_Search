export async function searchBooks(title) {
  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
    title
  )}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  return data.docs || [];
}
