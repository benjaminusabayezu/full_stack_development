import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AuthForm from "./pages/auth/AuthForm";
import CoursePlayerPage from "./pages/dashboard/user/CoursePlayerPage";

function App() {
   return (
     <>
       <BrowserRouter>
         <Routes>
           <Route path="" element={<CoursePlayerPage />} />
           <Route path="/register" element={<Register />} />
           <Route path="/auth_form" element={<AuthForm />} />
           
         </Routes>
       </BrowserRouter>
     </>
   );
}

export default App
