export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="max-w-6xl mx-auto p-6 flex justify-between items-center border-b border-white">
        <h1 className="text-xl font-bold text-white">LocalMind Lite</h1>
        <a
          href="#buy"
          className="px-4 py-2 rounded-xl border border-white text-white hover:bg-white hover:text-black transition-colors duration-200"
        >
          Buy
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
        <h2 className="text-4xl font-bold text-white">Declutter your files. Keep your privacy.</h2>
        <p className="mt-4 max-w-xl mx-auto text-white">
          LocalMind Lite scans your folders, finds duplicates, and lets you remove them in one click.
          It runs fully offline, so your data stays on your device.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#buy"
            className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black transition-colors duration-200"
          >
            Get LocalMind Lite – $15
          </a>
          <a
            href="#features"
            className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black transition-colors duration-200"
          >
            Learn more
          </a>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        <Feature title="Find duplicates" text="Detect exact and near-duplicate files quickly." />
        <Feature title="Safe delete" text="Send files to Trash with one click and undo if needed." />
        <Feature title="Privacy first" text="Everything runs locally. No uploads, no tracking." />
      </section>

      <section id="buy" className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-white">Buy LocalMind Lite</h3>
        <p className="mt-2 text-white">One-time payment. No subscriptions.</p>
        <a
          href={process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "CHECKOUT_URL"}
          className="inline-block mt-6 px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black transition-colors duration-200"
        >
          Purchase for $15
        </a>
      </section>

      <footer className="border-t border-white mt-16 bg-black">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-white">
          © {new Date().getFullYear()} LocalMind. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white p-6 text-center bg-black text-white hover:bg-white hover:text-black transition-colors duration-200">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-sm">{text}</p>
    </div>
  );
}
