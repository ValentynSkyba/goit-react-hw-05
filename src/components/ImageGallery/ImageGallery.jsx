import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.list}>
      {images.map((img) => {
        return <ImageCard img={img} key={img.id} openModal={openModal} />;
      })}
    </ul>
  );
};

export default ImageGallery;
