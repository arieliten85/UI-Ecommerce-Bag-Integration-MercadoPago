import { Carousel } from "react-bootstrap";

export function MyCarousel({ slides }: MyCarouselProps) {
  return (
    <div className="carousel-container">
      <CarouselItems slides={slides} />
    </div>
  );
}

interface Slide {
  image: string;
  title: string;
  subTitle: string;
}

interface MyCarouselProps {
  slides: Slide[];
}

function CarouselItems(props: MyCarouselProps) {
  const { slides } = props;

  return (
    <div>
      <Carousel nextIcon={""} prevIcon={""} interval={2500}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              style={{
                maxHeight: "600px",
                objectFit: "cover",
              }}
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />

            <div className="carousel-caption">
              <div>
                <h1 className="text-hero">{slide.title}</h1>
                <p className="sub-title">{slide.subTitle}</p>
              </div>

              <button className="button-hero" type="button">
                Descubre más
              </button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
