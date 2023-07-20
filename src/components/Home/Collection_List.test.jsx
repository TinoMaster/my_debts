import { Collections_List } from "./Collections_List";
import { render, screen } from "@testing-library/react";

const collections = [
  {
    name: "Oscar con Javier",
    deuda: -23000,
    creador: "64ab217b388e4e4a26f41e01",
    deudor: "64ab2209388e4e4a26f41e03",
    acreedor: "64ab217b388e4e4a26f41e01",
  },
  {
    name: "Javier con Oscar",
    deuda: 13000,
    creador: "64ab2209388e4e4a26f41e03",
    deudor: "64ab217b388e4e4a26f41e01",
    acreedor: "64ab2209388e4e4a26f41e03",
  },
];
const url = "/collection";

describe("", () => {
  it("Prueba", () => {
    render(<Collections_List collections={collections} url={url} />);
  });
});
