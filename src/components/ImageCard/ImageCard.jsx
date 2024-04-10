import s from "./ImageCard.module.css";

const ImageCard = ({ img, openModal }) => {
  return (
    <li
      key={img.id}
      className={s.item}
      onClick={() => {
        openModal(img.urls.full);
      }}
    >
      <div className={s.div}>
        <img className={s.img} src={img.urls.small} alt={img.description} />
      </div>
    </li>
  );
};

export default ImageCard;
