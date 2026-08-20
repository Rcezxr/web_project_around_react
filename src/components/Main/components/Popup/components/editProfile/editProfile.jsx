export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form">
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
        />
        <span className="popup__error" id="name-error"></span>
      </label>
      <label className="popup__field">
        <input
          id="description"
          className="popup__input popup__input_type_description"
          name="description"
          placeholder="Sobre mim"
          required
          minLength="2"
          maxLength="200"
          type="text"
        />
        <span className="popup__error" id="description-error"></span>
      </label>
      <button className="button popup__button" type="submit" disabled>
        Salvar
      </button>
    </form>
  );
}
