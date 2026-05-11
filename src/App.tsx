import { useState } from 'react'
import BottomNav from './components/BottomNav'
import Welcome from './pages/Welcome'
import MyLessons from './pages/MyLessons'
import PastLessons from './pages/PastLessons'
import TheVault from './pages/TheVault'
import Subscription from './pages/Subscription'

export type Tab = 'welcome' | 'my-lessons' | 'past-lessons' | 'vault' | 'subscription'

const PAGE_TITLES: Record<Tab, string> = {
  'welcome':      'Welcome!',
  'my-lessons':   'My Lessons',
  'past-lessons': 'Past Lessons',
  'vault':        'The Vault',
  'subscription': 'Subscription',
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('welcome')

  return (
    <div className="flex flex-col h-full max-w-lg mx-auto bg-gray-50">
      {/* Top header */}
      <header className="flex-shrink-0 bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm">
        <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-extrabold leading-none">CFM</span>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-500 leading-none">
            Come Follow Me
          </p>
          <p className="text-sm font-extrabold text-gray-800 leading-tight">
            {PAGE_TITLES[activeTab]}
          </p>
        </div>
      </header>

      {/* Scrollable content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {activeTab === 'welcome'      && <Welcome />}
        {activeTab === 'my-lessons'   && <MyLessons />}
        {activeTab === 'past-lessons' && <PastLessons />}
        {activeTab === 'vault'        && <TheVault />}
        {activeTab === 'subscription' && <Subscription />}
      </main>

      {/* Bottom nav */}
      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  )
}
