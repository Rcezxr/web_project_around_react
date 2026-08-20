export default function EditAvatar() {
  return (
    <form className="popup__form" id="avatar-form">
      <label className="popup__field">
        <input
          className="popup__input"
          id="avatar"
          name="avatar"
          placeholder="Link da foto"
          required
          type="url"
        />
        <span className="popup__error" id="avatar-error"></span>
      </label>
      <button className="button popup__button" type="submit" disabled>
        Salvar
      </button>
    </form>
  );
}
