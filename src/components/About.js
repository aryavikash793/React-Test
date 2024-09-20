import React, {useState} from 'react'

export default function About(props) {
// const [myStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
// });

let myStyle = {
color: props.mode === 'dark'?'white':'#042743',
backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
// border: '2px solid',
// borderColor: props.mode === 'dark'?'white':'#42743'


}
// console.log(myStyle);
// const lightModeStyle = {
//     backgroundColor: 'white',
//     color: 'black',
//   };

//   const darkModeStyle = {
//     backgroundColor: 'black',
//     color: 'white',
//   };

//     // Toggle between dark and light mode
//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//     };
  return (
    <>
    <div className='container' style={myStyle}>
    <h1 my-3 style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"> 
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="form-check form-switch mt-3">
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">
            <input className="form-check-input" onChange={toggleDarkMode} checked={darkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </label>
        </div> */}
    </div>
    </>
  )
}
