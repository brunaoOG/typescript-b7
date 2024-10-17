//type User = { name: string; level: number };
interface User {
  name: string;
}

let fillSausage = true;

interface User {
  level: number;
}

function resume(user: User) {
  return `Olá! Seja bem-vindo ao server, ${user.name}. 
  Seu nível atual é ${user.level}, lute para upar.`;
}

let user = {
  name: "Bruno",
  level: 0,
};

console.log(resume(user));
