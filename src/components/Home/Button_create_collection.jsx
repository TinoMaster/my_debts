export const Button_create_collection = () => {
  return (
    <div className="m-2 flex">
      <h4
        onClick={() => console.log("hiii")}
        className="bg-primary/80 p-2 rounded-md shadow-md text-white font-serif font-bold hover:cursor-pointer"
      >
        Crear Coleccion
      </h4>
    </div>
  );
};
