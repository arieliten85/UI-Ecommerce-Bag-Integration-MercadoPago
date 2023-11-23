import photo01 from "../assets/carousel/photo01.jpg";
import photo04 from "../assets/carousel/photo04.jpg";
import photo05 from "../assets/carousel/photo05.jpg";

export const API_BASE_URL = "http://localhost:8000/api";

export const slides = [
  {
    image: photo01,
    title: "Lleva contigo más que un bolso, lleva tu estilo",
    subTitle: " Encuentra el tuyo aquí.",
  },
  {
    image: photo04,
    title: "Estilo que nunca pasa de moda.",
    subTitle: " Encuentra tu look.",
  },
  {
    image: photo05,
    title: "Descubre la elegancia en cada detalle.",
    subTitle: "Bolsos que hablan por ti.",
  },
];

export const itemsLinks = [
  {
    name: "Inicio",
    path: "",
  },
  {
    name: "Productos",
    path: "products",
  },
  {
    name: "Nosotros",
    path: "about",
  },
  {
    name: "Como comprar",
    path: "how_buy",
  },
];
export const categories = [
  {
    name: "Deportivo",
    image:
      "https://png.pngtree.com/thumb_back/fw800/background/20230910/pngtree-a-shopping-bag-filled-with-multiple-sport-items-image_13168884.png",
  },
  {
    name: "Notebook",
    image:
      "https://shopee.sg/blog/wp-content/uploads/2022/03/Work-tote-bag-featured-image-min.jpg",
  },
  {
    name: "Escolar",
    image:
      "https://media.istockphoto.com/id/1339055637/photo/back-to-school-background-stationery-supplies-in-the-school-bag-banner-design-education-on.jpg?s=170667a&w=0&k=20&c=J8s9GnAsu9bCKhguCGhc6BonFvZ2X_9KpoWe7ZJsh4Q=",
  },
  {
    name: "Bebes",
    image:
      "https://undefiningmotherhood.com/wp-content/uploads/2020/02/Best-Diaper-Bag-Backpacks-2.jpg",
  },
];
