export function formatDate(date: string) {
  //date example: 2026-07-24T09:42:00

  let [data, horario] = date.split("T");

  data = data.split("-")[2] + "/" + data.split("-")[1];
  horario = horario.split(":")[0] + ":" + horario.split(":")[1];

  const retorno = data + " at " + horario;

  return retorno;
}

export function capitalFirstLetter(data: string){
  return data != null ? data?.charAt(0)?.toUpperCase() + data?.slice(1)?.toLowerCase() : "Dado não encontrado";
}