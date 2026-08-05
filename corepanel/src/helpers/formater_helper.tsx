export function formatDate(date: string) {
  //date example: 2026-07-24T09:42:00

  var [data, horario] = date.split("T");

  data = data.split("-")[2] + "/" + data.split("-")[1];

  var retorno = data + " at " + horario;

  return retorno;
}