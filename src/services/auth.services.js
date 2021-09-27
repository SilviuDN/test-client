import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            // baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    login = (email, pwd) => this.app.post('/login', { email, pwd })
    signup = (email, pwd) => this.app.post('/signup', { email, pwd })
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.get('/isLoggedIn')
}

export default AuthService