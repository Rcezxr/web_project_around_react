import { useRef, useState, useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange() {
    const input = avatarRef.current;
    setIsValid(input.validity.valid);
    setErrorMessage(input.validationMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form
      className="popup__form"
      id="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input"
          id="avatar"
          name="avatar"
          placeholder="Link da foto"
          required
          type="url"
          ref={avatarRef}
          onChange={handleChange}
        />
        <span className="popup__error" id="avatar-error">
          {errorMessage}
        </span>
      </label>
      <button className="button popup__button" type="submit" disabled={!isValid}>
        Salvar
      </button>
    </form>
  );
}
