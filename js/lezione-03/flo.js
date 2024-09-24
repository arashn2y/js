const jsonString =
  "{\"firstName\":\"Mario\",\"lastName\":\"Rossi\",\"birthDate\":\"2000-08-01T00:00:00.000Z\",\"address\":\"Via Roma 22,Roma\",\"id\":2343254\}";

const person = JSON.parse(jsonString);

const { lastName, birthDate, address, id, firstName } = person;

const birthDateObj = new Date(birthDate);

const today = new Date();
const age = today.getFullYear() - birthDateObj.getFullYear();
const monthDifference = today.getMonth() - birthDateObj.getMonth();
if (
  monthDifference < 0 ||
  (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
) {
  age--;
}

const formattedBirthDate = birthDateObj.toLocaleDateString();

console.log(`La persona inserita ha codice identificativo ${id}`);
console.log(`Si chiama ${firstName}, ha ${age} anni, vive in ${address}.`);
console.log(`È nato il ${formattedBirthDate}.`);