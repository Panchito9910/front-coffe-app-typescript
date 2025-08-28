import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/login/Login";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/dashboard/products/Products";
import Register from "./pages/register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            {/* <Route index element={<Products />} /> */}
            <Route path="products" element={ <Products />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
