import { Metadata } from "next";

export default function Home() {
  // Read environment variables with safe fallbacks
  const downloadUrl = process.env.NEXT_PUBLIC_DOWNLOAD_URL ?? "https://github.com/bada25/localmind-site-/releases";
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "https://example.com";

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Orlocal</h1>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-gray-300 transition">Features</a>
          <a href="#how-it-works" className="hover:text-gray-300 transition">How it works</a>
          <a href="#pricing" className="hover:text-gray-300 transition">Pricing</a>
          <a href="#faq" className="hover:text-gray-300 transition">FAQ</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href={downloadUrl}
            className="px-4 py-2 rounded-xl border border-white text-white hover:bg-white hover:text-black transition"
            aria-label="Download Orlocal"
          >
            Download
          </a>
          <a
            href={checkoutUrl}
            className="px-4 py-2 rounded-xl border border-white text-white hover:bg-white hover:text-black transition"
            aria-label="Buy Orlocal license"
          >
            Buy
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Clean up files locally, safely, and fast.
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          Find duplicates, large files, and old files. Move items to quarantine and undo any action. Everything runs offline on your device.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href={downloadUrl}
            className="px-8 py-4 rounded-xl border border-white text-white hover:bg-white hover:text-black transition font-semibold text-lg"
            aria-label="Download Orlocal for free"
          >
            Download
          </a>
          <a
            href={checkoutUrl}
            className="px-8 py-4 rounded-xl border border-white text-white hover:bg-white hover:text-black transition font-semibold text-lg"
            aria-label="Buy Orlocal license for $20"
          >
            Buy license for $20
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="px-4 py-2 rounded-xl border border-white text-white text-sm">
            100 percent offline
          </div>
          <div className="px-4 py-2 rounded-xl border border-white text-white text-sm">
            Safe quarantine and undo
          </div>
          <div className="px-4 py-2 rounded-xl border border-white text-white text-sm">
            No telemetry
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Core Cleanup Features</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl border border-white p-6">
            <h4 className="text-xl font-semibold mb-3">Duplicate detection</h4>
            <p className="text-gray-300">Identify identical files using size checks and SHA-256 hashing.</p>
          </div>
          <div className="rounded-2xl border border-white p-6">
            <h4 className="text-xl font-semibold mb-3">Large files</h4>
            <p className="text-gray-300">Rank and sort the largest files with adjustable thresholds.</p>
          </div>
          <div className="rounded-2xl border border-white p-6">
            <h4 className="text-xl font-semibold mb-3">Old files</h4>
            <p className="text-gray-300">Find files older than your chosen age and prioritize cleanup.</p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-center mb-12">Safety and Control</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white p-6">
            <h4 className="text-xl font-semibold mb-3">Quarantine and undo</h4>
            <p className="text-gray-300">Move files to a safe folder. Restore with one click.</p>
          </div>
          <div className="rounded-2xl border border-white p-6">
            <h4 className="text-xl font-semibold mb-3">Permission handling</h4>
            <p className="text-gray-300">Skip unreadable files and continue the scan.</p>
          </div>
          <div className="rounded-2xl border border-white p-6">
            <h4 className="text-xl font-semibold mb-3">Reporting</h4>
            <p className="text-gray-300">Export TXT, HTML, and CSV reports.</p>
          </div>
        </div>
      </section>

      {/* AI Viewscreen Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-white p-8">
          <h3 className="text-2xl font-bold mb-4">AI viewscreen for questions and commands, fully offline.</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>Folder scoped assistant. Only analyzes folders you choose.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>Natural language queries. Ask about size, type, and age.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>Recommendations to delete or archive with one click.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>Learning from your actions to improve suggestions.</span>
            </li>
          </ul>
          <p className="text-sm text-gray-300 italic">Available with AI add-on.</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">How it works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white p-6 text-center">
            <h4 className="text-xl font-semibold mb-3">Pick a folder</h4>
          </div>
          <div className="rounded-2xl border border-white p-6 text-center">
            <h4 className="text-xl font-semibold mb-3">Review results</h4>
          </div>
          <div className="rounded-2xl border border-white p-6 text-center">
            <h4 className="text-xl font-semibold mb-3">Clean up safely</h4>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Pricing</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Runtime License */}
          <div className="rounded-2xl border border-white p-8">
            <h4 className="text-2xl font-bold mb-4">Standard Runtime License</h4>
            <div className="text-4xl font-bold mb-6">$20 one time</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Scanning, duplicates, large files, old files</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Quarantine and undo</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Reports in TXT, HTML, and CSV</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Works fully offline</span>
              </li>
            </ul>
            <div className="space-y-3">
              <a
                href={checkoutUrl}
                className="block w-full px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black transition text-center font-semibold"
                aria-label="Buy Standard Runtime License for $20"
              >
                Buy now
              </a>
              <a
                href={downloadUrl}
                className="block w-full px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black transition text-center"
                aria-label="Download Orlocal for free"
              >
                Download
              </a>
            </div>
          </div>

          {/* AI Viewscreens Add-on */}
          <div className="rounded-2xl border border-white p-8">
            <h4 className="text-2xl font-bold mb-4">AI Viewscreens Add-on</h4>
            <div className="text-4xl font-bold mb-2">$5 per month</div>
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full border border-white text-white text-sm">Requires Standard License</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Folder scoped AI Q and A</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Recommendations and smart summaries</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Conversational commands for cleanup</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Runs locally and offline</span>
              </li>
            </ul>
            <a
              href={`${checkoutUrl}?ai=1`}
              className="block w-full px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black transition text-center font-semibold"
              aria-label="Upgrade to AI Viewscreens Add-on for $5 per month"
            >
              Upgrade to AI
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">FAQ</h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-white p-6">
            <h4 className="text-lg font-semibold mb-2">Does Orlocal upload my files?</h4>
            <p className="text-gray-300">No. It runs offline on your device.</p>
          </div>
          <div className="rounded-2xl border border-white p-6">
            <h4 className="text-lg font-semibold mb-2">What systems are supported?</h4>
            <p className="text-gray-300">macOS and Windows. Linux is planned.</p>
          </div>
          <div className="rounded-2xl border border-white p-6">
            <h4 className="text-lg font-semibold mb-2">Can I undo cleanup actions?</h4>
            <p className="text-gray-300">Yes. Use quarantine and restore.</p>
          </div>
          <div className="rounded-2xl border border-white p-6">
            <h4 className="text-lg font-semibold mb-2">How do I buy it?</h4>
            <p className="text-gray-300">Purchase the $20 license. Add the AI viewscreen for $5 per month.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p>© {new Date().getFullYear()} Orlocal. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
