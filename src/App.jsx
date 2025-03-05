import React,{useState} from 'react'
import Sidebar from "./Components/Sidebar"
import SatisfactionScore from "./Components/DialChart"
import ResponseRate from "./Components/Donut"
import MyBarChart from "./Components/BarChart"
import Header from "./Components/Header"
function App() {
  const [isDeskSidebarOpen, setIsDeskSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen">
      <Sidebar Sidebar={isDeskSidebarOpen} setSidebar={setIsDeskSidebarOpen} />
      <div className={`flex-1 flex flex-col overflow-x-hidden transition-all duration-300 ease-in-out ${
          isDeskSidebarOpen ? "ml-[-200px]" : "ml-0" // Adjust margin based on sidebar state
        }`}>
        <Header />
        <main className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <SatisfactionScore />
          <ResponseRate />
          <div className="md:col-span-2">
            <MyBarChart />
          </div>
        </main>
      </div>
    </div>
    </>
  )
}

export default App
