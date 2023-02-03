import "../styles/Help.css"
import MenuButtonSVG from "../SVGs/MenuButtonSVG"
const Help = (props) => {
    return (
        <>
            <div className="row d-flex" style={{height: '100%'}}>
                <div className="col-lg-12">
                    <div className="help-card card align-items-center">
                    <button id="back" className="menu-btn mt-5 mb-4" onClick={() => props.clearSelection()}>
                    <span>BACK</span>
                    <MenuButtonSVG />
                </button>
                        <h1 className="card-title">How to Play:</h1>
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
                
                    <div className="card-body">
                    <h3>Step: 2</h3> To make your guess, first click on the squares to change their colors. Once all four squares have been selected, a key will appear. Click on the key to submit your guess.
                    </div>
                    <button id="key" className={'fa btn btn-lg fs-1 fa-key invalid'} style={{border: "none", color: "#27AE60"}}></button>
                    <div className="card-body">
                    <span style={{color: "red"}}>An invalid guess will be indicated by the key shaking. Keep in mind that no repeating colors are allowed in your guess.</span>
                    </div>

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
                    <div className="card-body w-50">
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
            </div>
        </>
    )
}
export default Help