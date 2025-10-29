import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import useDebounce from "./hooks/useDebounce";
import { searchBooks } from "./utils/api";
import ShimmerCard from "./components/Shimmer";

function App() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 600);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setBooks([]);
      return;
    }

    setLoading(true);
    setError("");

    searchBooks(debouncedQuery)
      .then((docs) => setBooks(docs))
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, [debouncedQuery]);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Book Finder</h1>
      <SearchBar value={query} onChange={setQuery} />

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <ShimmerCard key={idx} />
          ))}
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !query.trim() && (
        <div className="flex flex-col items-center justify-center mt-10 opacity-60">
          <img
            src="searchBook.png"
            alt="Search books"
            className="w-40 mb-4"
          />
          <p className="text-lg text-gray-500">Start typing to search books...</p>
        </div>
      )}

      {!loading && books.length === 0 && debouncedQuery && (
        <p className="text-center text-gray-500">No books found</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {books.map((book, i) => {
          const img = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/200x300?text=No+Cover";

          return (
            <div
              key={i}
              className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition p-2"
            >
              <img
                src={img}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/200x300?text=No+Cover")
                }
                alt={book.title}
                className="w-full h-60 object-cover rounded"
              />
              <h2 className="font-semibold mt-2 text-sm">{book.title}</h2>
              <p className="text-xs text-gray-600">
                {book.author_name?.[0] || "Unknown Author"}
              </p>
              <p className="text-xs text-gray-500">
                {book.first_publish_year || ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;