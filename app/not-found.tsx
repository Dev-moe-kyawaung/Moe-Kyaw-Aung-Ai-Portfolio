import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg px-4">
      <div className="text-center">
        <h1 className="text-8xl font-black text-white mb-4">
          4
          <span className="text-cyber-cyan">0</span>
          4
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Oops! This page doesn't exist.
        </p>
        <Link
          href="/"
          className="px-8 py-3 glass rounded-xl text-cyber-cyan hover:bg-white/10 transition-all border border-dark-border"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
