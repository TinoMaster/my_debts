import "./listLoader.css";

function ListLoading() {
  return (
    <div className="LoadingTodo-container text-black rounded-md">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text font-serif text-center text-violet-700">Cargando deudas...</p>
      {/* <span className="LoadingTodo-deleteIcon"></span> */}
    </div>
  );
}

export { ListLoading };
