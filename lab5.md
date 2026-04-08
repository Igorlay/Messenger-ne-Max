1.   const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

2. const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    // replace: true є критично важливим для чистоти історії браузера
    return <Navigate to={redirectPath} replace />;
  }

  // Якщо компонент має children, рендеримо їх, інакше рендеримо Outlet для вкладених маршрутів
  return children ? children : <Outlet />;
};