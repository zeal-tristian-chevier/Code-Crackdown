import React, { useState, useEffect } from "react"
import Help from "./Help"
import { Link, useNavigate } from 'react-router-dom'
import MenuButtonSVG from "../SVGs/MenuButtonSVG"
import '../styles/Menu.css'
import jwt_decode from 'jwt-decode';
import { getUserById } from "../../services/internalApiService"
import Leaderboard from "./Leaderboard"


const Menu = () => {
    
    const [selectHelp, setSelectHelp] = useState(false)
    
    const [currentUser, setCurrentUser] = useState({
    })
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            const user = jwt_decode(token)
            if(!user){
                Logout()
            } else{
                getUserById(user.id)
                    .then(data => {
                        setCurrentUser(currentUser => ({ username: data.username , id: data._id, score: data.score }))
                        console.log(currentUser)
                    })
                
            }
        }
    }, [])
    const Logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <>
        {
            selectHelp ? 
            <Help clearSelection={() => setSelectHelp(false)}/>
            :
            <div className="row align-items-center justify-content-around">
                <div className="col-lg-12 mb-5">
                <img src={require('../../codecrackdownlogo.png')} alt="" className="img-fluid banner-img"></img>
                </div>
                <div className="col-lg-5 border rounded border-3">
                    <div className="title">
                        <div className="circle">
                        <div className="fa fa-unlock spinningKey"></div>
                        </div>
                        {
                            currentUser.username ?
                            <div>
                            <h1 className="info">{currentUser.username}</h1>
                            <h2 className="info">SCORE: {currentUser.score}</h2>
                            </div>
                            :
                            <div>
                            <h1 className="info">Guest</h1>
                            <h2 className="info">SCORE: N/A</h2>
                            </div>
                        }
                        <Link id="start" className="menu-btn" to="/game" state={{ currentUser }}> 
                            <span>PLAY</span>
                            <MenuButtonSVG />
                        </Link>
                        <button id="help" className="menu-btn" onClick={() => setSelectHelp(true)}>
                            <span>HELP</span>
                            <MenuButtonSVG />
                        </button>
                        {
                            //NEED TO CLEAR TOKEN WHEN LOGGING OUT!!!
                            currentUser.username ?
                            <button id="login" className="menu-btn" onClick={() => Logout()}>
                                <span>LOGOUT</span> 
                                <MenuButtonSVG />
                            </button>
                            :
                            <button id="login" className="menu-btn" onClick={() => navigate('/login')}>
                                <span>LOGIN</span> 
                                <MenuButtonSVG />
                            </button>
                        }
                        </div>
                </div>
                <div className="col-lg-5 border rounded border-3">
                    <Leaderboard />
                </div>
            </div>
        }
        </>
    )

}
export default Menu