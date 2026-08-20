export default function ImagePopup(props) {
  const { card } = props;
  const { link, name } = card;

  return (
    <>
      <img className="popup__image" src={link} alt={name} />
      <p className="popup__caption">{name}</p>
    </>
  );
}
