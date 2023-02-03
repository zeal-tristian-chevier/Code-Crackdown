import { registerUser } from "../../services/internalApiService"
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/Forms.css'

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState([])
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        let newUser = { username: username, password: password }
            registerUser(newUser)
            .then(data => navigate('/login')) 
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
                Register
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
                Register
                </div>
            </button>
        </form>
        <div className="mb-3">
            <div id="emailHelp" className="form-text">Already have an account?</div>
            <div className="d-flex align-items-center justify-content-center gap-3">
                    <Link style={{textDecoration: "none", color: "white"}} to="/login">Sign In</Link>
                    <div id="emailHelp" className="form-text"> or </div>
                    <Link style={{textDecoration: "none", color: "white"}} to="/">Continue as Guest</Link>
                </div>
        </div>

        </>
    )

}
export default Register