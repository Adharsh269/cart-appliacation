import Home from "./componenets/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
//import Nav from "./componenets/Nav/Nav";

function App(){
  return(
    <div>
      
      <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
    </div>
  )
}
export default App;