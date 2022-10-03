import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { useState } from 'react';
import Alert from './components/Alert';
// in  below we have imported the react router dom from offical website that is copied and paste and so , we use react router for single page applicaton and so that only the specific component content changes but not the entire website and so user would not have to request to ask for anotther navbar and things separately , hence this is how react router is used and below we have used switch which enables to simply switch the content as it maps as per the url and the enture webpage doesnt have to be reloaded specially
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  //<></> tags are necessary in jsx to enclose within a single tag 
  let name= "Ashu";
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
const showAlert=(message,type)=>{ //note here type is the type of alert you want to throw that is green boxed implies success , red boxed implies danger etc
setAlert({ //so now here you have adjusted the setAlert updating function which will update the alert as per the needs , here u have passed setAlert and defined the objects so acc u will pass the values in the parameters wherever you need to display the alert message using setAlert("","") and that way the alert will be updated there you will use alert state variable
msg: message, 
type: type
})
}
setTimeout(() => {
  setAlert(null) //that is after 2-3 seconds that is 2500 the alert state variable which is rendering alert will be updated to null using setAlert as done and thus the alert will be set to null and the rendering of it stops
}, 2500);
const removeClasses=()=> { 
  //now this function is made because as we toggle to primary , danger etc etc mode by clicing on the repective buttons note that the color doesnt change without reloading its because the first classList that you used say primary is set as bg-primary and so background is primary but when u click on success button it doesnt change without first reloading as the previous class is not removed from document body hence this function to remove class from document body after they have been invoked and switched so that the next mode can be further toggleed
document.body.classList.remove('bg-primary')
document.body.classList.remove('bg-danger')
document.body.classList.remove('bg-warning')
document.body.classList.remove('bg-success')
document.body.classList.remove('bg-light')
}

const toggleMode=(cls)=>{
  removeClasses()//now removing the classes from document body after they have been toggled so that further modes can be applied without reloading as well 

document.body.classList.add('bg-'+cls) //here we are adding the classList of colors to body of document and so when function is invoked in onClick under Navbar compnent say for primary button then value is passed under this parameter and then the class primary is added to the classList and then "bg-"+cls(here primary) will result in background primary color mode and so on for diferent modes

if(mode==='light') //hence if the value of the mode is light then (intitially the value of the mode is set to light using usestate hook and so then using setMode updating fucntion we set the mode to dark now and then using props this mode is being accessed and rendered there at navbar component and accordingly it will change its color)
{
  setMode('dark')  //setting the mode to dark and thus now the current mode value becomes dark and in navbar component props.mode will display dark mode as done
document.body.style.backgroundColor='#3f3f86'; //for entire background color
showAlert("Your dark mode has been successfully enabled","success") //so now this will set the alert message with given message type and green boxed that is success and this way this function has been invoked and thus it will be displayed but inorder to make this work you need to go to the alert.js component and tell it about the type and the message to be rendered as alert component has to be displayed so
// document.title="Textutils- Dark Mode"
//this is used to put the title as written when toggled to dark mode
// setInterval(() => {
// document.title="its textutils"  
// }, 2000);                            //here setintrval is used to execute a code after a specific time range and so 2000=>2 seconds . afyer this if say we have to flash different titles in specific times then it is used , oftem used for weird ads like click here to get your bonus as we see and so for such kind of apps we can make it using setInterval , but ifc for our textutils we do not need this , so commenting out
// setInterval(() => {
//   document.title='Clickhere'
// }, 1500);
  
}
else {
  if(mode==='dark')
  {
    setMode('light') //setting the mode to light if the theme is dark
  document.body.style.backgroundColor='white'; 
  showAlert("Your light mode has been successfully enabled","success") 
  // document.title="Textutils- Light Mode"

  }
}

}

  return (
    <> 
    <Router>
   <Navbar title="TextUtilsProject" aboutTexts="About TextUtils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/> 
   <div className='container my-3'>
   <Switch>
    {/* note here we have copied switch sybtax from official react router dom component and pasted here , now this is used to map the url with the content that is different url with different content hence for /About the about component will be used for the wbesite and so on as done */}
          <Route exact path="/about">
            {/* in above if done link/about then we are redering About component and so manually if typed in url box this will happen , however if we wish to click on navbar section on about and then we want such redering then we go to Navbar.js file and where there is "a" replaced with Link and "href"with to , so that way when clicked it will render particular component  */}
            <About mode={mode} />
          </Route>        
          <Route exact path="/"> 
      {/* if typed / in url then we are rendering <Textarea> component, also exact is added and so also we have added exact keyword before path so that there is a exact map done also we are using lower version of react router dom and in newer version we avoid this exact keyword and inplace of Switch Routes is used 
 */}
          <TextArea showAlert={showAlert} heading="NEWGEN TEXTUTILS - WORD COUNTER AND SO ON !"/> 
          </Route>
        </Switch>
   {/* <About/> */}
   </div>
   </Router>
    </>

  );
}
export default App;
