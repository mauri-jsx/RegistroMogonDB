import { BrowserRouter, Routes, Route  } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/loginPage"
import { AuthProvider } from "./context/AuthContext"
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element= { <LoginPage />} />
        <Route path="/register" element= {<RegisterPage />} />
        <Route path="/tarea" element={<h1>tarea page</h1>} />
        <Route path="/crearTarea" element={<h1>nueva tarea</h1>} />
        <Route path="/tarea/:id" element={<h1>actulizar tarea</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
      </AuthProvider>
  )
}

export default App