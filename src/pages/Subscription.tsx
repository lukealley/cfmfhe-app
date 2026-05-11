export default function Subscription() {
  return (
    <div className="px-4 py-6 space-y-5">
      <div>
        <h1 className="text-xl font-extrabold text-gray-800">Subscription</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Manage your billing and payment options
        </p>
      </div>

      {/* Current plan card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-100">
            Current Plan
          </p>
          <p className="text-xl font-extrabold text-white mt-0.5">
            CFM FHE Subscriber
          </p>
        </div>
        <div className="px-5 py-4 space-y-3">
          <FeatureRow label="Weekly lesson packets" />
          <FeatureRow label="Next week's materials early access" />
          <FeatureRow label="Full past lesson archive" />
          <FeatureRow label="Monthly Vault bonus resource" />
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2">
        <ActionButton
          label="Manage Billing"
          description="Update payment method, view invoices"
          icon="💳"
          href="https://comefollowmefhe.com/account"
        />
        <ActionButton
          label="Update Payment Method"
          description="Change your card or billing info"
          icon="✏️"
          href="https://comefollowmefhe.com/account"
        />
        <ActionButton
          label="Cancel Subscription"
          description="We'd hate to see you go"
          icon="❌"
          href="https://comefollowmefhe.com/account"
          danger
        />
      </div>

      <p className="text-xs text-center text-gray-400 pb-2">
        Questions? Email us at{' '}
        <a
          href="mailto:hello@comefollowmefhe.com"
          className="text-teal-500 font-semibold"
        >
          hello@comefollowmefhe.com
        </a>
      </p>
    </div>
  )
}

function FeatureRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  )
}

function ActionButton({
  label,
  description,
  icon,
  href,
  danger = false,
}: {
  label: string
  description: string
  icon: string
  href: string
  danger?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 rounded-xl px-4 py-3.5 border shadow-sm active:opacity-80 transition-opacity ${
        danger
          ? 'bg-red-50 border-red-100'
          : 'bg-white border-gray-100'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <div className="flex-1">
        <p className={`text-sm font-bold ${danger ? 'text-red-600' : 'text-gray-800'}`}>
          {label}
        </p>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
      <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )
}
