import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext.js";

export default function NewCard() {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [errors, setErrors] = useState({ name: "", link: "" });
  const [validity, setValidity] = useState({ name: false, link: false });

  const isFormValid = validity.name && validity.link;

  function handleNameChange(event) {
    const input = event.target;
    setName(input.value);
    setErrors((prev) => ({ ...prev, name: input.validationMessage }));
    setValidity((prev) => ({ ...prev, name: input.validity.valid }));
  }

  function handleLinkChange(event) {
    const input = event.target;
    setLink(input.value);
    setErrors((prev) => ({ ...prev, link: input.validationMessage }));
    setValidity((prev) => ({ ...prev, link: input.validity.valid }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddPlaceSubmit({ name, link });
  }

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Título"
          required
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="card-name-error">
          {errors.name}
        </span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Link de imagem"
          required
          type="url"
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error" id="card-link-error">
          {errors.link}
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
