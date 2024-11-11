import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { showAlert } from "../../components/alerta";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

// Custom hook para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Limpiar los errores después de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // Función para iniciar sesión
  const iniciarSesion = async (data) => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        showAlert("Inicio de sesión", result.message, "success");
        
        // Guardar token en la cookie
        Cookies.set("token", result.data.Token, { expires: 7 }); // Guarda el token en una cookie con duración de 7 días
        
        setUser(result.data);
        setIsAuthenticated(true);

        // Redirigir según el rol
        if (result.data.role === 'admin') {
          navigate('/moduloadm');
        } else {
          navigate('/clientedecons');
        }
      } else {
        showAlert("Inicio de sesión", result.message, "error");
      }
    } catch (error) {
      console.error('Error al conectar con la API:', error);
      setErrors(['Hubo un problema al conectar con el servidor']);
    }
  };

  // Función de registro
  const registro = async (data) => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        showAlert("Crear cuenta", result.message, "success");
      } else {
        showAlert("Error al crear cuenta", result.message, "error");
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      setErrors(['Hubo un problema al conectar con el servidor']);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  /*Actaulizara si el estado del usuario */
  useEffect(() => {
    const checkLogin = async () => {
        const token = Cookies.get("token");
        console.log("Este es el token de autenticacion: " + token);

        if (!token) {
            setIsAuthenticated(false);
            setLoading(false);
            console.log("Este usuario no esta autenticado");
            return;
        }

        try {
            const res = await axios.get(`http://localhost:4000/api/auth/verify/${token}`);
            console.log("Resultado del hook");
            console.log(res.data.role);
            console.log(res.data);

            if (!res.data) {
                setIsAuthenticated(false);
            } else {
                setIsAuthenticated(true);
                setUser(res.data);
                console.log("Usuario autenticado:", res.data); // Aquí ya puedes ver el usuario
            }

            setLoading(false);

        } catch (error) {
            console.error("Error al verificar el token:", error);
            setIsAuthenticated(false);
            setLoading(false);
        }
    };
    checkLogin();
}, []); // Solo se ejecuta una vez cuando el componente se monta


  return (
    <AuthContext.Provider value={{ user, isAuthenticated, iniciarSesion, registro, logout, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
