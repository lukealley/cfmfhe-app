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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-bottom z-50">
      <div className="flex">
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors ${
                isActive
                  ? 'text-teal-600'
                  : 'text-gray-400 active:text-teal-500'
              }`}
            >
              <span className="text-xl leading-none">{tab.icon}</span>
              <span
                className={`text-[10px] font-semibold leading-tight text-center ${
                  isActive ? 'text-teal-600' : 'text-gray-400'
                }`}
              >
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-8 h-0.5 bg-teal-500 rounded-full" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
