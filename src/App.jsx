import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import MainLayout from "./layouts/MainLayout"
import Groups from "./pages/Groups"
import Students from "./pages/Students"
import CreateGroup from "./pages/CreateGroup"
import CreateStudent from "./pages/CreateStudent"
import PageNotFount from "./components/page-comp/PageNotFount"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
          <Route index element={<Groups/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/create-group" element={<CreateGroup/>}/>
          <Route path="/create-student" element={<CreateStudent/>}/>
          <Route path="*" element={<PageNotFount/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App