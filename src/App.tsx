import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 dark:bg-white">
      <div className="max-w-7xl mx-auto p-8 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img 
              src={viteLogo} 
              className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" 
              alt="Vite logo" 
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img 
              src={reactLogo} 
              className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow" 
              alt="React logo" 
            />
          </a>
        </div>
        <h1 className="text-5xl leading-tight font-bold text-white dark:text-gray-900 mb-8">
          Vite + React
        </h1>
        <div className="p-8">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="rounded-lg border border-transparent px-5 py-3 text-base font-medium bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 hover:border-blue-500 transition-colors cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            count is {count}
          </button>
          <p className="mt-4 text-white dark:text-gray-900">
            Edit <code className="bg-gray-800 dark:bg-gray-200 px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
