const data = JSON.parse("{\"firstName\":\"Mario\",\"lastName\":\"Rossi\",\"birthDate\":\"2000-08-01T00:00:00.000Z\",\"address\":\"Via Roma 22, Roma\",\"id\":2343254\}");
data.birthDate = new Date(data.birthDate);
const curYear = new Date().getFullYear();

console.log(`La persona ha codice identificativo ${data.id}`);
console.log(`Ha ${curYear - data.birthDate.year}. Si chiama ${data.firstName} ${data.lastName} ed è nato il ${data.birthDate.toLocaleString().split(" ")[0]}`)