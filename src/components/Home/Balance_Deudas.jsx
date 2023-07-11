import { FaDollarSign } from "react-icons/fa";
export const Balance_Deudas = () => {
  return (
    <div className="w-full h-full p-2 flex flex-col rounded-md">
      <h4 className="m-1 ml-4 text-sm font-medium">Mi balance de deudas</h4>

      <div className="p-1">
        {/*Balance Total  */}
        <div className="m-2 p-2 shadow-md rounded-md flex justify-between bg-white/5">
          <h4 className="text-primary font-semibold flex">
            Mis Deudas
          </h4>
          <p className="text-sm text-primary flex items-center gap-1 mr-2">
            <FaDollarSign /> {"0"}
          </p>
        </div>
        {/* Dueño */}
        <div className="m-2 shadow-md p-2 rounded-md flex justify-between bg-white/5">
          <h4 className="text-secondary font-semibold flex">Me Deben</h4>
          <p className="text-sm text-secondary flex items-center gap-1 mr-2">
            <FaDollarSign /> {"0"}
          </p>
        </div>
        <div className="m-2 mb-6 shadow-md p-2 rounded-md flex justify-between bg-white/5">
          <h4 className="text-third font-semibold flex">Balance</h4>
          <p className="text-sm text-third flex items-center gap-1 mr-2">
            <FaDollarSign /> {"0"}
          </p>
        </div>
      </div>
    </div>
  );
};
