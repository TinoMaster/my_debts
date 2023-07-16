import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="flex justify-center bg-black/10 items-center fixed w-full h-full z-50">
      {children}
    </div>,
    document.getElementById("modal")
  );
};

export { ModalPortal };
