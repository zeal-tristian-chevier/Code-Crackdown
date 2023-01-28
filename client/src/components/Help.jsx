import { useNavigate } from 'react-router-dom'

const Help = () => {
    let navigate = useNavigate();
    return (
        <>
        <button id="help" className="btn btn-primary btn-lg mb-4 ps-5 pe-5 mt-5 ">Back</button>
        <h1 style={{color: "lightgrey"}} onClick={() => navigate(-1)}>How to Play:</h1>
            <div className="row d-flex m-5 align-items-center flex-column gap-5">
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-body">
                        <h3>Step: 1</h3> The objective of the game is to correctly guess a randomly generated four-color code without any repeating colors.
                    </div>
                    <div className='container'>
                        <div className='guess'>
                            <div className={'container-item blue'} ></div>
                            <div className={'container-item white'} ></div>
                            <div className={'container-item green'} ></div>
                            <div className={'container-item red'} ></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-body">
                    <h3>Step: 2</h3> To make your guess, first click on the squares to change their colors. Once all four squares have been selected, a key will appear. Click on the key to submit your guess.
                    </div>
                    <button id="key" className={'fa btn btn-lg fs-1 fa-key invalid'} style={{border: "none", color: "#27AE60"}}></button>
                    <div className="card-body">
                    <span style={{color: "red"}}>An invalid guess will be indicated by the key shaking. Keep in mind that no repeating colors are allowed in your guess.</span>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-body">
                    <h3>Step: 3</h3> You may notice white or black squares appearing in the right column. These squares do not correspond to the positions of the colors in your guess.
                    </div>
                    <div className='container'>
                        <div className='guess'>
                            <div className={'container-item black'} ></div>
                            <div className={'container-item white'} ></div>
                            <div className={'container-item white'} ></div>
                            <div className={'container-item'} ></div>
                        </div>
                    </div>
                    <div className="card-body">
                    <div className="container">
                        <div className={'container-item w-10'}></div> <i className="fa-solid fa-arrow-right"></i> Wrong Spot, Wrong Color
                        </div>
                        <div className="container">
                        <div className={'container-item white w-10'}></div> <i className="fa-solid fa-arrow-right"></i> Wrong Spot, Correct Color
                        </div>
                        <div className="container">
                        <div className={'container-item black w-10'} ></div> <i className="fa-solid fa-arrow-right"></i> Correct Spot, Correct Color
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-body">
                    <h3>Step: 5</h3> Correctly guessing the code will unlock the lock, signaling your victory!
                    </div>
                    <button type="submit" className="fa-solid fa-lock-open btn btn-lg fs-2" style={{border: "none", color: "#58D68D"}}></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Help