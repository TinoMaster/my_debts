export const Modal_Create_collection = ({
  darkMode,
  openCloseWindow,
  createCollection,
  openCloseNewDebt,
  handlerNameCollection,
  collectionName,
  errorNameCollection,
}) => {
  return (
    <div
      className={`bg-gradient-to-tr flex flex-col justify-center items-center ${
        darkMode
          ? "from-darkMode to-slate-900 text-lightMode"
          : "from-lightMode to-slate-200 text-darkMode/80"
      } p-10 rounded-md relative`}
    >
      {errorNameCollection?.error ? (
        <div className="absolute top-0">
          <p className="text-red-300 text-sm p-2 w-full">
            {errorNameCollection.message}
          </p>
        </div>
      ) : null}
      <div className="flex flex-col justify-center">
        <h2 className="text-lg font-semibold w-full text-center">
          Nueva Coleccion
        </h2>
        <h4 className="">Introduzca el nombre de su coleccion</h4>
        <input
          onChange={handlerNameCollection}
          value={collectionName}
          name="name"
          type="text"
          className="shadow-inner shadow-black/30 p-2 text-darkMode font-medium rounded-md my-2 focus:outline-none"
        />
      </div>
      <div className="flex justify-center py-2">
        <button
          onClick={() => createCollection(openCloseNewDebt)}
          className="p-2 mx-2 bg-secondary/50 text-white rounded-md shadow"
        >
          Aceptar
        </button>
        <button
          onClick={openCloseWindow}
          className="p-2 mx-2 bg-primary/50 text-white rounded-md shadow"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
