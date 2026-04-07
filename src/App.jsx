
import Button from "../Messenger-ne-Max/src/components/atoms/Button/Button";
import Input from "../Messenger-ne-Max/src/components/atoms/Input/Input";
import Card from "../Messenger-ne-Max/src/components/molecules/Card/Card";
import Header from "./components/molecules/Header/Header";

function App() {
  const handleLogin = () => {
    alert("Логіка входу буде реалізована пізніше");
  };

  return (
    <>
      <Header />

      <div
        style={{

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f0f2f5",
        }}
      >
        <Card>
          <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
            Ласкаво просимо
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <Input type="email" placeholder="Email" />
          </div>

          <div style={{ marginBottom: "20px" }}>

            <Input type="password" placeholder="Пароль" />
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleLogin} variant="primary">
              Зайти
            </Button>
            <Button variant="secondary">Реєстрація</Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
