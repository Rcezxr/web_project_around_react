import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name || "");
  const [description, setDescription] = useState(currentUser.about || "");
  const [errors, setErrors] = useState({ name: "", description: "" });
  const [validity, setValidity] = useState({ name: true, description: true });

  const isFormValid = validity.name && validity.description;

  function handleNameChange(event) {
    const input = event.target;
    setName(input.value);
    setErrors((prev) => ({ ...prev, name: input.validationMessage }));
    setValidity((prev) => ({ ...prev, name: input.validity.valid }));
  }

  function handleDescriptionChange(event) {
    const input = event.target;
    setDescription(input.value);
    setErrors((prev) => ({ ...prev, description: input.validationMessage }));
    setValidity((prev) => ({ ...prev, description: input.validity.valid }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleUpdateUser({ name, about: description });
  }

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="name"
          name="name"
          placeholder="Nome"
          required
          minLength="2"
          maxLength="40"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="name-error">
          {errors.name}
        </span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          id="description"
          name="description"
          placeholder="Sobre mim"
          required
          minLength="2"
          maxLength="200"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="description-error">
          {errors.description}
        </span>
      </label>
      <button
        className="button popup__button"
        type="submit"
        disabled={!isFormValid}
      >
        Salvar
      </button>
    </form>
  );
}
