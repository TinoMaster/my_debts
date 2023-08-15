import "./contactsLoader.css";
import { BiLoader } from "react-icons/bi";

export const ContactsLoading = () => {
  return (
    <span className="LoadingContact-completeIcon flex justify-center items-center mr-1 shadow-md">
      <BiLoader />
    </span>
  );
};
