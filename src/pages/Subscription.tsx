export default function Subscription() {
  return (
    <div className="px-5 py-7 space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-semibold text-charcoal">Subscription</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your billing and payment options
        </p>
      </div>

      {/* Current plan */}
      <div className="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden">
        <div className="bg-dust-100 border-b border-dust-200 px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-widest text-dust-400 mb-0.5">
            Current Plan
          </p>
          <p className="font-serif text-lg font-semibold text-charcoal">
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
        <a href="mailto:hello@comefollowmefhe.com" className="text-sage-500 font-medium">
          hello@comefollowmefhe.com
        </a>
      </p>
    </div>
  )
}

function FeatureRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <svg className="w-4 h-4 text-sage-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  )
}

function ActionButton({
  label, description, icon, href, danger = false,
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
      className={`flex items-center gap-4 rounded-2xl px-4 py-4 border shadow-sm active:opacity-80 transition-opacity ${
        danger ? 'bg-white border-red-100' : 'bg-white border-sand-200'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <div className="flex-1">
        <p className={`text-sm font-semibold ${danger ? 'text-red-400' : 'text-charcoal'}`}>
          {label}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{description}</p>
      </div>
      <svg className="w-4 h-4 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )
}
