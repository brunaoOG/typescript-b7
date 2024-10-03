function resume(user: { name: string; level: number }) {
  return `Olá! Seja bem-vindo ao server, ${user.name}. 
  Seu nível atual é ${user.level}, lute para upar.`;
}

let user = {
  name: "Bruno",
  level: 0,
};

console.log(resume(user));
