function cekUser() {
  const nameUser = document.getElementById("nameUser").value;
  const ageUser = document.getElementById("ageUser").value;
  const cekStatus = document.getElementById("statusUser").value;

  // convert to number
  const convertAge = Number(ageUser);
  // convert to boolean
  const cekStatusInput = cekStatus === "true";

  let tampilData = {
    name: nameUser,
    age: convertAge,
    isStatus: cekStatusInput,
  };

  let hasil = `
  Data kamu :
  ${JSON.stringify(tampilData, null, 3)}

  Tipe data:
  name: ${typeof tampilData.name}
  age: ${typeof tampilData.age}
  isStatus: ${typeof tampilData.isStatus}
  `;

  document.getElementById("dataUser").innerText = hasil;
}
