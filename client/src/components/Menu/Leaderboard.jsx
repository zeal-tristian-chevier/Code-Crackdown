import { all } from "axios"
import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/internalApiService"
import '../styles/Leaderboard.css'

const Leaderboard = () => {

    const [topFive, setTopFive] = useState([])
    
    useEffect(() => {
        getAllUsers()
            .then(data => {
                const allUsers = []
                for(const users in data){
                    allUsers.push(data[users])
                }   
                setTopFive(allUsers)
            })
    }, [])
        return (
            <>

            <h1 className="leaderboard-title">LEADERBOARD</h1>
            <table className="table table-striped table-dark mb-5">
                <tbody>
                {
                    topFive.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{user.username}</td>
                                <td>{user.score}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            
            </>
        );
}
export default Leaderboard