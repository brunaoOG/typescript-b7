function resume(user) {
    return "Ol\u00E1! Seja bem-vindo ao server, ".concat(user.name, ". \n  Seu n\u00EDvel atual \u00E9 ").concat(user.level, ", lute para upar.");
}
var user = {
    name: "Bruno",
    level: 0,
};
console.log(resume(user));
