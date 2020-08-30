import "./views/screens/login.js";
import "./views/screens/register.js";
import "./controller/auth.js";
import "./views/components/form-input.js";
import "./models/auth.js"
import './views/screens/lobby.js'
const screen = {
    login: "<login-screen></login-screen>",
    register: "<register-screen></register-screen>",
    lobby:"<lobby-screen></lobby-screen>",
    room:"<room-screen></room-screen>",
}
export function setScreen(screenName) {
    document.getElementById('game').innerHTML = screen[screenName]
}
setScreen('login');