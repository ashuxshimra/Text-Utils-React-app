import React from 'react'
import { useState } from 'react'
export default function About(props) {


// const [btntext, setBtnText] = useState("Enable Light Mode") //here just for setting the value we have given the text on button as Dark mode but ofc based on which state website is in will be changed as done below using the setBtnText
// const [myText, setMyText] = useState({  //creating object for the styling for dark mode , so current state of website becomes dark mode as mytext is set to these specifications
// color : "white" , //this will make the texts in the about section white
// backgroundColor: "black" //this will make the background black wheerever used so basically initially you have set the form as dark mode hence the initial state of buttom should be ENABLE LIGHT MODE
// }
// ) //now in this way of using the useState we are initially giving the value of color and backgroundColor as per the dark mode hence this is the value of myText which will be rendered as per styling as done in their buttons , now if this dark to light mode is to be done then we need to update using the setMyText function and that depends when button is clicked hence we will do onClick and for that a fucntion will be made
let myText={
color : props.mode=='dark'?'white':'#10093d', //if the mode is dark then the text should be white and vice versa
backgroundColor : props.mode=='dark'?'#10093d':'white'//if the mode is dark then the background color in that case should be black and vice versa , now we will add this myText on every accordian button so that it adapts this styling and changes its theme in acc to enable dark mode/enable light mode button

}

// const toggleStyle=()=>{ //these types of onclick fucntions always make in form of fat arrow 
// if(myText.color==="white") //this means when button is clicked then this function will be fired and thus it will first check what is the current value that is if color is white that means this is the condition of dark mode and hence the button's state has to be "LIGHT MODE" so using the useState hook updating into that and also if this button is clicked then we have to change to light mode and thus this updation is achieved with the help of the useState for the myText
// {
//  //and so if it is in dark mode then we have to update the state of this component to light mode so this is how it will be updated using useState hook 
//  setMyText({ //so this way the change is updated and this change of light mode is stored in myText which is being rendered as style={myText} in componenets of its button and as a whole so this is how onclick this function will trigger and convert from dark to light
// color: "black",
// backgroundColor: "white"
//  })
// }
// setBtnText("Enable Dark Mode") //hence if the website made into light mode then the button will render and update itself as enable to dark mode so then btntext value becomes this and in the button it is done as {btntext} hence this current updated value of button will be rendered
// if(myText.color==="black")
// { //that is if , the myText.color is black and so this is the case for the light mode so when button clicked this light mode will be converted into dark mode using useState hook as :
// setMyText({
//   color: "white",
//   backgroundColor: "black"
// })
// setBtnText("Enable Light Mode");//so by reaching here the state of componenet is updated to dark mode and hence now the button should be enable light mode
// }
// }



  return (
    //in below putting classNameName="container " as we want out about component to be rendered in a certain styled btw page way so using bootstrap className container along with if we need to give some space from y axis point  
    <div classNameName='container my-3' style={myText}> 
    {/* in the above style is added and so this will make the texts white and background black on the accordian component as a whole , since this is added in the starting tag of component */}
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myText}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myText}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myText}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myText}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myText}>
    Accordion Item #3
    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"/>
    <div className="accordion-body" style={myText}>
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
  </div>
  {/* <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btntext}</button> */}
</div>// this is the edning tag of entire accordian component hence making a button just above it that is after the accordian body and buttons tags are over so that button comes after them

//also if something is done after the last closing tag then it will not be rendered as a component on website so whatever parts of component have to be there it has to be in these tags altogether

  )
}
