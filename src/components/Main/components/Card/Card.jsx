export default function Card(props) {
  const { card, onImageClick } = props;
  const { name, link, isLiked } = card;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onImageClick(card)}
      />
      <button
        aria-label="Excluir cartão"
        className="card__delete-button"
        type="button"
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botão de curtir"
          type="button"
          className="card__like-button"
        ></button>
      </div>
    </li>
  );
}
