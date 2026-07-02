export default function Footer() {
  return (
    <footer className="mt-10 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <h2 className="text-xl font-bold">
          ElectroMart
        </h2>

        <p className="mt-2 text-gray-300">
          Your Trusted Electronics Store
        </p>

        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} ElectroMart.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}