export default function ShimmerCard() {
  return (
    <div className="w-full p-4 border rounded-lg bg-white shadow animate-pulse">
      <div className="h-40 w-full bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
  );
}
