import { useRef, useState } from "react";
import { getID } from "../utilities/getId";
import { createNewDebts } from "../services/debts";
import { getToken } from "../utilities/getToken";

const initialState = {
  name: "",
  description: "",
  creador: "",
  deudor: "",
  acreedor: "",
  deuda: "",
  fecha: "",
  pagada: {
    isDone: false,
    fecha: "",
  },
  pagos: [],
  comentario: "",
};

export const useCreateNewDebt = (name, addNewDebtToArray) => {
  const [newDebt, setNewDebt] = useState(initialState);
  const [errorCreateDebt, setErrorCreateDebt] = useState({});
  const [successCreateDebt, setSuccessCreateDebt] = useState({});
  const [loadingCreateDebt, setLoadingCreateDebt] = useState(false);

  /* States de pagos parciales */
  const [pagoParcial, setPagoParcial] = useState("");
  const [commentPagoParcial, setCommentPagoParcial] = useState("");

  const idUser = getID();
  const token = getToken();
  const refContactInput = useRef(null);
  const refTypeDebt1 = useRef(null);
  const refTypeDebt2 = useRef(null);
  /* console.log(newDebt); */

  /* Handlers */
  const handlerInputNewDebt = (e) => {
    setErrorCreateDebt({});
    let { name, value } = e.target;
    setNewDebt({ ...newDebt, [name]: value });
  };

  const handlerIsPaid = (e) => {
    setErrorCreateDebt({});
    setCommentPagoParcial("");
    setPagoParcial(0);
    setNewDebt({ ...newDebt, pagada: { isDone: e.target.checked } });
  };

  const handlerPartialPaid = (e) => {
    setErrorCreateDebt({});
    setPagoParcial(e.target.value);
  };

  const handlerCommentPartialPaid = (e) => {
    setErrorCreateDebt({});
    setCommentPagoParcial(e.target.value);
  };

  const handlerDebtType = (e) => {
    refContactInput.current.value = "";
    setErrorCreateDebt({});
    if (e.target.value === "deudor") {
      setNewDebt({ ...newDebt, deudor: idUser, acreedor: "" });
    } else if (e.target.value === "acreedor") {
      setNewDebt({ ...newDebt, acreedor: idUser, deudor: "" });
    }
  };

  const handlerResetDebt = () => {
    refTypeDebt1.current.checked
      ? (refTypeDebt1.current.checked = false)
      : null;
    refTypeDebt2.current.checked
      ? (refTypeDebt2.current.checked = false)
      : null;
    refContactInput.current.value = "";
    setErrorCreateDebt({});
    setNewDebt(initialState);
    setPagoParcial("");
    setCommentPagoParcial("");
  };

  /* Functions */

  const validateNewDebt = () => {
    if (newDebt.description.length === 0)
      return { error: true, message: "El titulo no puede estar vacio" };
    if (newDebt.acreedor.length === 0)
      return { error: true, message: "Debe agregar el contacto de la deuda" };
    if (newDebt.deudor.length === 0)
      return { error: true, message: "Debe agregar el contacto de la deuda" };
    if (newDebt.deuda.length === 0 || newDebt.deuda === 0)
      return { error: true, message: "Debe agregar la cantidad de la deuda" };
    return { error: false };
  };

  const thereIsPartialPaid = () => {
    let pagos = [];
    if (pagoParcial && pagoParcial > 0) {
      const paid = {
        fecha: date,
        cantidad: pagoParcial,
        comentario: commentPagoParcial.length > 0 ? commentPagoParcial : "",
      };
      pagos.push(paid);
    }
    return pagos;
  };

  const coumpoundNewDebt = () => {
    const date = new Date();
    return {
      name,
      description: newDebt.description,
      deuda: newDebt.deuda,
      creador: idUser,
      deudor: newDebt.deudor,
      acreedor: newDebt.acreedor,
      fecha: date,
      comentario: newDebt.comentario,
      pagada: newDebt.pagada,
      pagos: thereIsPartialPaid(),
    };
  };

  const SendNewDebt = async () => {
    const validator = validateNewDebt();
    if (!validator.error) {
      const dataToSend = await coumpoundNewDebt();
      createNewDebts(token, dataToSend).then((res) => {
        if (res.error) {
          setErrorCreateDebt(res);
        } else if (res.success) {
          addNewDebtToArray(res.data);
        }
      });
    } else setErrorCreateDebt(validator);
  };

  const funcHandlers = {
    handlerInputNewDebt,
    handlerIsPaid,
    handlerDebtType,
    handlerPartialPaid,
    handlerCommentPartialPaid,
    handlerResetDebt,
  };

  return {
    funcHandlers,
    newDebt,
    pagoParcial,
    commentPagoParcial,
    SendNewDebt,
    errorCreateDebt,
    refContactInput,
    refTypeDebt1,
    refTypeDebt2,
  };
};
