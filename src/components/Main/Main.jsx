import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/Popup/components/editProfile/editProfile";
import EditAvatar from "./components/Popup/components/editAvatar/editAvatar";
import NewCard from "./components/Popup/components/newCard/newCard";
import ImagePopup from "./components/Popup/components/ImagePopup/ImagePopup";
import Card from "./components/Card/Card";

export default function Main({
  onOpenPopup,
  onClosePopup,
  popup,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Atualizar foto", children: <EditAvatar /> };
  const newCardPopup = { title: "Novo local", children: <NewCard /> };

  function handleCardClick(card) {
    onOpenPopup({ children: <ImagePopup card={card} /> });
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Avatar"
          />
          <button
            className="profile__avatar-edit"
            type="button"
            onClick={() => onOpenPopup(editAvatarPopup)}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => onOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          aria-label="Adicionar cartão"
          className="profile__add-button"
          type="button"
          onClick={() => onOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onImageClick={handleCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
