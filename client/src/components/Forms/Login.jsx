import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { loginUser } from "../../services/internalApiService"
import '../styles/Forms.css'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState([])
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        let returningUser = { username, password }
            loginUser(returningUser)
        
            .then(data => {
                if(data.user){
                    localStorage.setItem('token', data.user)
                    navigate("/")
                }
            })
            .catch(err => {
                const errRes = err.response.data.error.message
                setError(errRes)
            })
    }

    return (
        <>
        <form className='form' onSubmit={handleSubmit}>
            <div className='control'>
                <h1>
                Login
                </h1>
            </div>
            {
                error && (
                    <p className="text-danger">{error}</p> 
                )
            }
            <div className='control block-cube block-input'>
                <input type="text" placeholder="Username" className="" onChange={(e) => setUsername(e.target.value)} value={username} />
                <div className='bg-top'>
                <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                <div className='bg-inner'></div>
                </div>
                <div className='bg'>
                <div className='bg-inner'></div>
                </div>
            </div>
            <div className='control block-cube block-input'>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <div className='bg-top'>
                <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                <div className='bg-inner'></div>
                </div>
                <div className='bg'>
                <div className='bg-inner'></div>
                </div>
            </div>
            <button className='btn block-cube block-cube-hover' type='submit'>
                <div className='bg-top'>
                <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                <div className='bg-inner'></div>
                </div>
                <div className='bg'>
                <div className='bg-inner'></div>
                </div>
                <div className='text'>
                Login
                </div>
            </button>
            </form>
            <div className="mb-3">
                <div id="emailHelp" className="form-text">Need to create an account? No email required!</div>
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <Link style={{textDecoration: "none", color: "white"}} to="/register">Sign Up</Link>
                    <div id="emailHelp" className="form-text"> or </div>
                    <Link style={{textDecoration: "none", color: "white"}} to="/">Continue as Guest</Link>
                </div>
            </div>
        </>
    )
}
export default Login