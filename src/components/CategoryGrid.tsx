export const CategoryGrid = (props: ICategoryGridProps) => {
  const { categories } = props;
  return (
    <>
      <CategoryGridTitle />
      <CategoryGridItems categories={categories} />
    </>
  );
};

interface ICategoryProps {
  name: string;
  image: string;
}
interface ICategoryGridProps {
  categories: ICategoryProps[];
}
interface ICategoryGridItemProps {
  name: string;
  image: string;
  index: number;
}
function CategoryGridItems(props: ICategoryGridProps) {
  const { categories } = props;

  return (
    <div
      className="grid-container"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {categories.map(({ name, image }, index) => (
        <CategoryGridItem key={index} image={image} name={name} index={index} />
      ))}
    </div>
  );
}
function CategoryGridItem(props: ICategoryGridItemProps) {
  const { name, image, index } = props;

  return (
    <div
      key={index}
      className={
        name === "Escolar" || name === "Notebook"
          ? "grid-item wide"
          : "grid-item"
      }
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-100 text-center p-2 text-white"
        style={{ background: "#ccc8aa", position: "absolute", bottom: 0 }}
      >
        <h2>{name}</h2>
      </div>
    </div>
  );
}
function CategoryGridTitle() {
  return (
    <div className="w-100 d-flex justify-content-center  p-5 m-0 ">
      <div className="position-relative text-center">
        <h2
          className="px-2 py-1"
          style={{
            width: "300px",
            background: "whitesmoke",
            border: "#ccc8aa solid 1.5px",
            color: "#a9a05d ",
          }}
        >
          Categorias
        </h2>
        <div className="lineTitles"></div>
      </div>
    </div>
  );
}
