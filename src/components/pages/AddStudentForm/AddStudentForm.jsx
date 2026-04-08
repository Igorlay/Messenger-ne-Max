import { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

const validate = (values) => {
  const errors = {};

  // Имя
  if (!values.name.trim()) {
    errors.name = "Ім'я є обов'язковим";
  } else if (values.name.trim().length < 2) {
    errors.name = "Мінімум 2 символи";
  }

  // Бал
  if (values.score === "") {
    errors.score = "Введіть бал";
  } else if (
    isNaN(values.score) ||
    Number(values.score) < 0 ||
    Number(values.score) > 100
  ) {
    errors.score = "Бал має бути від 0 до 100";
  }

  return errors;
};

const AddStudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    name: "",
    score: "",
  });

  const [errors, setErrors] = useState({});

  // Изменение полей
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedData);

    // Валидация в реальном времени
    const validationErrors = validate(updatedData);
    setErrors(validationErrors);
  };

  // Отправка формы
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      onAddStudent({
        id: Date.now(),
        name: formData.name.trim(),
        score: Number(formData.score),
      });

      // очистка
      setFormData({ name: "", score: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  // ❗ Блокировка кнопки
  const isDisabled =
    !formData.name ||
    !formData.score ||
    Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Прізвище та ім'я:"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Введіть ПІБ"
      />
      {errors.name && (
        <p style={{ color: "red" }}>{errors.name}</p>
      )}

      <Input
        label="Бал студента:"
        name="score"
        type="number"
        value={formData.score}
        onChange={handleChange}
        placeholder="0-100"
      />
      {errors.score && (
        <p style={{ color: "red" }}>{errors.score}</p>
      )}

      <Button type="submit" disabled={isDisabled}>
        Додати студента
      </Button>
    </form>
  );
};

export default AddStudentForm;