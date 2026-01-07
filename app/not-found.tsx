import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
      <p className="text-sm text-gray-600 mb-4">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-600 underline">
        Go home
      </Link>
    </main>
  );
}
