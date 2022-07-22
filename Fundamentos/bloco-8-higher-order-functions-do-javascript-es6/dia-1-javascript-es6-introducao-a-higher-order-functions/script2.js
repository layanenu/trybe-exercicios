//1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
//Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. 
//A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente 
//um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (employeeGenerator) => { //criar uma funcao no parametro, essa funcao vai ser chamada no valor do objeto executando
  //a questao pede: o nome da pessoa funcionaria + a geracao do email.
  const employees = {
    id1: employeeGenerator('Pedro Guerra'),
    id2: employeeGenerator('Luiza Drumond'),
    id3: employeeGenerator('Carla Paiva'),
  };
  return employees;
};

const employeeGenerator = (fullName) => { //essa funcao vai ser o parametro da newEmployees, o parametro será o nome do funcionário
  const email = fullName.toLowerCase().split(' ').join('_'); //essa const vai gerar o email: o split separa o fullName e o join
  //une novamente, só que com o underline (esses métodos só funcionam com array)
  return { fullName, email: `${email}@trybe.com` }; 
};

console.log(newEmployees(employeeGenerator)); //aqui a funcao newEmployess é chamada com a função employeeGenerator como parâmetro