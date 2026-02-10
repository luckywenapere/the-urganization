import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-sm text-neutral-400 hover:text-white transition-colors"
        >
          ← Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mt-6">
          Privacy Policy
        </h1>

        <p className="text-neutral-400 mt-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-10 space-y-10 text-neutral-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
            <p className="mt-3">
              Urganize (“we”, “us”, or “our”) operates a software platform that helps
              artist managers plan and execute music releases using AI-guided workflows.
            </p>
            <p className="mt-3">
              This Privacy Policy explains how we collect, use, share, and protect your
              information when you use Urganize.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Who Can Use Urganize</h2>
            <p className="mt-3">
              Urganize is not intended for children under the age of 13. We do not knowingly
              collect personal data from children under 13. If you believe a child has
              provided us personal data, please contact us and we will remove it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Information We Collect</h2>

            <ul className="mt-3 space-y-2 list-disc ml-6">
              <li>Account information (email address, login credentials)</li>
              <li>Release data (song titles, dates, assets, content plans)</li>
              <li>Usage data (features used, actions taken inside the app)</li>
              <li>Device and technical data (IP address, browser type, operating system)</li>
              <li>Analytics data via Google Analytics</li>
            </ul>

            <p className="mt-3">
              Payment information is processed by Paystack. We do not store your card details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. How We Use Your Information</h2>

            <ul className="mt-3 space-y-2 list-disc ml-6">
              <li>To provide and operate Urganize</li>
              <li>To generate AI-guided tasks and workflows</li>
              <li>To improve product performance and reliability</li>
              <li>To communicate with you</li>
              <li>To process payments</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. AI Processing</h2>
            <p className="mt-3">
              Urganize uses third-party AI providers (including Google Gemini) to generate
              recommendations and workflows.
            </p>
            <p className="mt-3">
              Your input may be processed by these providers. Your data may also be used
              in anonymized or aggregated form to improve Urganize and underlying AI systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Payments</h2>
            <p className="mt-3">
              Payments are handled by Paystack. We do not store your credit or debit card
              information on our servers.
            </p>
            <p className="mt-3">
              Urganize may introduce subscriptions or paid plans in the future.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Cookies & Analytics</h2>
            <p className="mt-3">
              We use Google Analytics to understand how users interact with Urganize.
              This may involve cookies or similar technologies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Your Rights</h2>

            <p className="mt-3">You have the right to:</p>

            <ul className="mt-3 space-y-2 list-disc ml-6">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <p className="mt-3">
              To exercise any of these rights, email us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">9. Data Security</h2>
            <p className="mt-3">
              We take reasonable technical and organizational measures to protect your data.
              However, no system is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">10. International Users</h2>
            <p className="mt-3">
              Urganize serves users globally. Your information may be processed outside your
              country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">11. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Changes will be posted on
              this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">12. Contact</h2>
            <p className="mt-3">
              For privacy questions, contact us at{" "}
              <a
                href="mailto:theurganization@gmail.com"
                className="text-emerald-400 hover:text-emerald-300"
              >
                theurganization@gmail.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
