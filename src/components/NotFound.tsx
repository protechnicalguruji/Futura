export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-9xl font-bold font-serif mb-6">404</h1>
        <p className="text-xl text-gray-400 mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="bg-accent text-white px-8 py-3 rounded-full">Go Back Home</a>
      </div>
    </div>
  );
}
