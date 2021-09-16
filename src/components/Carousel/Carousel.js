import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../../styles/components/Carousel/Carousel.css";
import styles from "../../styles/components/Carousel/Carousel.module.scss";
import Products from "../../assets/dummy data/Products";
import CustomSlider from "./CustomSlider";

const Carousel = () => {
  return (
    <div>
      <CarouselProvider
        className={styles.carousel}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight={true}
        totalSlides={3}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}>
            <CustomSlider product={Products[2]} />
          </Slide>
          <Slide index={1}>
            <CustomSlider product={Products[0]} />
          </Slide>
          <Slide index={2}>
            <CustomSlider product={Products[3]} />
          </Slide>
        </Slider>

        <DotGroup className={styles["dot-group"]} />

        <ButtonBack className={styles.back}>{"<"}</ButtonBack>
        <ButtonNext className={styles.next}>{">"}</ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default Carousel;
