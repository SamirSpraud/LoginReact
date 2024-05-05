import usersData from "../data/users.json";

const AuthHandler = {
  Login(email, pass) {
    for (const user of usersData.users) {
      console.log("Estoy funcionando");
      if (user.email === email && user.pass === pass) {
        console.log("Las credenciales están funcionando!");
        return { success: true, key: 1, error: "" };
      }
      if (user.email === email && user.pass !== pass) {
        console.log("ERROR: La contraseña es incorrecta.");
        return {
          success: false,
          key: 2,
          error: "La contraseña es incorrecta.",
        };
      }
    }
    console.log("ERROR: La cuenta no existe.");
    return { success: false, key: 3, error: "La cuenta no existe." };
  },
};

export default AuthHandler;
