import { BrowserRouter, Routes, Route  } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/tarea" element={<h1>tarea page</h1>} />
        <Route path="/crearTarea" element={<h1>nueva tarea</h1>} />
        <Route path="/tarea/:id" element={<h1>actulizar tarea</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App