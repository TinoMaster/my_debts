export const Colecciones = () => {
  return (
    <div className="w-full h-full p-2 flex flex-col rounded-md">
      <h4 className="m-1 ml-3 text-md font-medium">Mi coleccion de deudas</h4>
      <div className="w-full">
        {/*Colecciones  */}
        <div className="m-2 p-3 shadow-md rounded-md flex justify-between bg-white/5">
          <h4 className="md:text-lg font-semibold">Oscar</h4>
          <p className="text-sm md:text-base">700$</p>
        </div>
        <div className="m-2 flex">
          <h4 className="bg-primary/80 p-2 rounded-md shadow-md text-white font-serif font-bold hover:cursor-pointer">
            Crear Coleccion
          </h4>
        </div>
      </div>
    </div>
  );
};
