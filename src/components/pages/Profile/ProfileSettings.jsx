import { useState } from "react";

const ProfileSettings = () => {
  const [name, setName] = useState("Roman");
  const [email, setEmail] = useState("example@email.com");

  const handleSave = () => {
    alert("Збережено!");
    console.log({ name, email });
  };

  return (
    <div>
      <h2>Налаштування профілю</h2>

      <div>
        <label>Ім'я:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button onClick={handleSave}>Зберегти</button>
    </div>
  );
};

export default ProfileSettings;