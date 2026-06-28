export default function Error500() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-9xl font-bold font-serif mb-6">500</h1>
        <p className="text-xl text-gray-400 mb-8">Something went wrong on our end. Please try again later.</p>
        <a href="/" className="bg-accent text-white px-8 py-3 rounded-full">Go Back Home</a>
      </div>
    </div>
  );
}
