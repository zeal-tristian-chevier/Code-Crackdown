import { createUser } from "../services/internalApiService"
import { Navigate, useNavigate, userNavigate, useState } from 'react-router-dom'
const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            username: username,
            password: password
        }
        createUser(newUser)
            .then(data => {
                navigate('/')
            })
            .catch(err => {
                const errRes = err.response.data.errrors
                const errorArr = []
                for(const key of Object.keys(errRes)){
                    errorArr.push(errRes[key].message)
                }
                setErrors(errorArr)
            })
    }

    return (
        <>
            <div className="container">
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="input" className="form-label">Username: </label>
                    </div>
                    <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} value={username} />
                    <div className="mb-3">
                        <label htmlFor="input" className="form-label">Password: </label>
                    </div>
                    {
                        errors.map((err, i) => {
                            
                        })
                    }
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </>
    )

}
export default Register