import { Route, Routes } from "react-router"
import Article from "./component/Article/Article"


function App() {
  return (
    <div className="flex flex-col justify-center items-center">
    
     <Routes>
      <Route path="/" element={<Article />} />
    </Routes>
    </div>
  )
}

export default App
