import { getDebts } from "../services/debts";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGFiMjE3YjM4OGU0ZTRhMjZmNDFlMDEiLCJuYW1lIjoiT3NjYXIiLCJpYXQiOjE2ODk1MTY4MjN9.n6deFcTAbQIXsWxBwsLiqie4YbN_Gp-6pj28G8WjTIA";
const id = "64ab217b388e4e4a26f41e01";
const not_token = "";

describe("DEBTS", () => {
  it("Hago la peticion sin pasarle el token", async () => {
    const response = await getDebts(not_token, id);
    expect(response.error).toBe(true);
  });
  it("Hago la peticion sin pasando el token pero no el id", async () => {
    const response = await getDebts(token);
    expect(response.error).toBe(true);
  });
  it("Hago la peticion pasando los valores correctos", async () => {
    const response = await getDebts(token, id);
    expect(response.success).toBe(true);
  });
});
