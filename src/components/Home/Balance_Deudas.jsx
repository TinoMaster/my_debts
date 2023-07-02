export const Balance_Deudas = () => {
  return (
    <div className="w-full h-full p-2 flex flex-col rounded-md">
      <h4 className="m-1 ml-4 text-md font-medium">Mi balance de deudas</h4>

      <div className="p-1">
        {/*Balance Total  */}
        <div className="m-2 p-2 shadow-md rounded-md flex justify-between bg-white/5">
          <h4 className="md:text-lg text-indigo-700 font-serif flex">
            {/* <FontAwesomeIcon
              className="text-white bg-violet-500 mr-1 rounded-full p-1"
              icon={faHouse}
            /> */}
            Mis Deudas
          </h4>
          <p className="text-sm md:text-base text-indigo-700">
            {/* <FontAwesomeIcon icon={faDollar} /> {totalRecaudado(bdCuadre)} */}
          </p>
        </div>
        {/* Dueño */}
        <div className="m-2 shadow-md p-2 rounded-md flex justify-between bg-white/5">
          <h4 className="md:text-lg text-emerald-700 font-serif flex">
            {/* <FontAwesomeIcon
              className="text-white bg-emerald-400 mr-2 rounded-full py-1 px-2"
              icon={faUser}
            /> */}
            Me Deben
          </h4>
          <p className="text-sm md:text-base text-emerald-700">
            {/* <FontAwesomeIcon icon={faDollar} />
            {totalRecaudadoDueño(bdCuadre)} */}
          </p>
        </div>
        <div className="m-2 mb-6 shadow-md p-2 rounded-md flex justify-between bg-white/5">
          <h4 className="md:text-lg text-yellow-700 font-serif flex">
            {/* <FontAwesomeIcon
              className="text-white bg-emerald-400 mr-2 rounded-full py-1 px-2"
              icon={faUser}
            /> */}
            Balance
          </h4>
          <p className="text-sm md:text-base text-emerald-700">
            {/* <FontAwesomeIcon icon={faDollar} />
            {totalRecaudadoDueño(bdCuadre)} */}
          </p>
        </div>
      </div>
    </div>
  );
};
