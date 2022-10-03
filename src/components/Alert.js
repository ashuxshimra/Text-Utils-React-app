import React from 'react'

function Alert(props) {
  
  const capitalizefirstletter= (word)=>{ //here making a arrow function for functionality
const lower=word.toLowerCase();//this will get all the words in lower case
return lower.charAt(0).toUpperCase() + lower.slice(1); //now here the function will return the first letter that at 0th index and convert it to uppercase and then add the other remaining lower letters by slicing it so "Success"
  }
  
    return (
      //in below the height of the alert for dark mode successfully enabled and vice versa is made because earlier it was shifting the contect of layout downside when the dark mode success message was popping hence made a new div tag where in style for this alert we have givem the height so that the content of layout doesnt shift
      <div style={{height : '50px'}}>
   {props.alert && <div><div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong> {capitalizefirstletter(props.alert.type)}</strong>:{props.alert.msg}
  </div></div>} 
  {/* also here added {} before props.alert because now it is not in any tag so we have to give this line of js under {} */}
  </div>
  )
}

export default Alert