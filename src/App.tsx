import { useState } from 'react'
import BottomNav from './components/BottomNav'
import Welcome from './pages/Welcome'
import MyLessons from './pages/MyLessons'
import PastLessons from './pages/PastLessons'
import TheVault from './pages/TheVault'
import Subscription from './pages/Subscription'

export type Tab = 'welcome' | 'my-lessons' | 'past-lessons' | 'vault' | 'subscription'

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('welcome')

  return (
    <div className="flex flex-col h-full max-w-lg mx-auto bg-cream">
      {/* Top header */}
      <header className="flex-shrink-0 bg-white border-b border-sand-200 px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-sage-400 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[10px] font-bold leading-none tracking-tight">CFM</span>
        </div>
        <div>
          <p className="text-[10px] font-medium uppercase tracking-widest text-sage-500 leading-none">
            Come Follow Me
          </p>
          <p className="text-sm font-semibold text-charcoal leading-tight font-serif">
            Family Home Evening
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

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  )
}
