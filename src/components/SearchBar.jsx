export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full flex justify-center mt-6 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search books by title..."
        className="w-full max-w-xl px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 outline-none"
      />
    </div>
  );
}
