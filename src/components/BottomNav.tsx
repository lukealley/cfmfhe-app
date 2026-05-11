import type { Tab } from '../App'

interface Props {
  active: Tab
  onChange: (tab: Tab) => void
}

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'welcome',      label: 'Welcome',      icon: '🏠' },
  { id: 'my-lessons',   label: 'My Lessons',   icon: '📚' },
  { id: 'past-lessons', label: 'Past Lessons', icon: '🕐' },
  { id: 'vault',        label: 'The Vault',    icon: '🎁' },
  { id: 'subscription', label: 'Subscription', icon: '💳' },
]

export default function BottomNav({ active, onChange }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-sand-200 safe-bottom z-50 shadow-[0_-1px_8px_rgba(0,0,0,0.06)]">
      <div className="flex max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 relative transition-colors"
            >
              <span className="text-xl leading-none">{tab.icon}</span>
              <span className={`text-[10px] font-medium leading-tight text-center transition-colors ${
                isActive ? 'text-sage-500' : 'text-gray-400'
              }`}>
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-sage-400 rounded-full" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
