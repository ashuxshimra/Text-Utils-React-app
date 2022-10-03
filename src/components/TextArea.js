import React from 'react'
import { useState } from 'react'
export default function TextArea(props) {
                                                                                     
const handleUpClick=()=>{                //made this function using fat arrow
    
let newText=text.toUpperCase();      //using the toUpperCase() fucntion of js
setText(newText)                            //now as seen and discussed the updaton is done with the help of updating function that is useText of useState hook hence now the value of "text" is the updated value 
console.log("Upper case is clicked" +text);  
props.showAlert("Upper case conversion successfully done","success");
}
const handleDoClick=()=>{                //made this function using fat arrow
    
let newText=text.toLowerCase();       //using the toLowerCase() fucntion of js
setText(newText)                            //now as seen and discussed the updaton is done with the help of updating function that is useText of useState hook hence now the value of "text" is the updated value and since value of textarea is text so this will be reflected 
console.log("Lower case is clicked" +text); 
props.showAlert("Lower case conversion successfully done","success");  
}
const handleClClick=()=>{                //made this function using fat arrow
let newText=("");                     //setting it blank
setText(newText);                      //now as seen and discussed the updaton is done with the help of updating function that is useText of useState hook hence now the value of "text" is the updated value 
console.log("Clear text is clicked" + text);   
props.showAlert("cleared successfully done","success");
}
    const [text, setText] = useState("") //to get the useState syntax simply type useState and press enter and modify accdingly so here we have a "text" inside the array which is called state variable and its value is assigned as "Enter the text" and now if this text has to be updated then it will be useing updating function named "setText" and so when updated using "setText" the current value of "text" becomes updated value.
//  now the question is how we know we need useState hook , its because in our project when a button of upper case is clicked then lower case is updated to upper case and so to make sure that updation process is achieved for upper case we use useState hook 
//useState is always declared inside the functional compinent and above return only,

const handleOnChange=(event)=>{
//in above while dealing with onChange a event is being address as seen so we get event object as reward to handle as put in paranthesis
    // console.log("On change") just for calrity in cosole
    setText(event.target.value) //that is the value is updated with user being typing new words that is a event is done and the target will be the current words in the textbox old+new words that are being added and then the value which is added this way it becomes the current value of "text " on every updation as the user types and types
}
const handleCoClick=()=>{
//hence to copy the text first try to get from where you need to get the element that you need to copy after that you somehow have to select that text (depends on how much you need to copy) and after the text is selected then you have to copy it to clipboard
let text=document.getElementById("myBox") //so here you have got the element which you want to copy and so since the id of this TextArea component is "myBox" hence whatever text entered there , you will reach there
text.select();//now the obtained text, you have selected it 
//now you need to navigate the text that you have selected to clipboard and so for copying , selcting the text then navigating the text value to the clipboard and getting it and thus this is how you copy the text
navigator.clipboard.writeText(text.value) //so this is how you will be navigating to the clipboard and then on clipboard we have to write a text and that text is actualluy the text that u need to copy so that text will be the text that you have selcted and so text.value
}
const handleSpClick=()=>{
//so here now we will use split function of javascript which splits the text based on the parameters we set in prathesis and it actually returns a array of words that is obtained after splitting and hence storing in the neww variable
let neww=text.split(/[ ]+/) //this is how splitting is done on text when there are extra spaces
  setText(neww.join(" ")) //now since in "neww" array we have the words so then now we are joining the words by giving a space to it.
}
return (
  <div>
{/* we want to keep this in heading part of TextArea so : */}
<h1 className='mb-4'> 
{/* also in above line added mb whoch is margin from bottom by 4 so the heading will have space from bottom to the next part of component */}
  {props.heading}
</h1>

  <div className="form-group">
  {/* in below we have set the value of text area as {text} which is basically the value set when writing the syntax of useState as done */}
  {/* also in below a user itself will type its own string letters and so in such a case everytime a new value will be updated as the user types his own words hence we need to make sure that value is being updated using setText and this way the current value of "text" keeps becoming that so we need onChange if texts are changed by user then trigger a fucntionn named handleOnChange which is made above for this  */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'?'white':'#3f3f86', color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea> 
  </div>
  {/* now if a button is needed type button.btn.btn-primary and press enter */}
  
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
  {/* in above line when user clicks on a button we want a certain action to occur and so onClick you type and from the siggestion press enter. Now btw the paranthesis of js put the name of fucntion that has to be fired when clicked on button and thus executing the fucntion that is something happening so defining a separate handleUpClick separately above  */}
{/* also in just above line the disabled is used that we will disable the button only when there is no text entered in the textarea */}
Convert to Upper Case

</button>
{/* now a button to conver in lower case */}
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDoClick}>
Convert to Lower Case
  </button> 
{/* in below making a button to clear the text entered in the textarea  */}
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClClick}>
Clear Text
</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCoClick}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpClick}>Remove extra spaces </button> 
{/* in above the my-2 is been added so that when we clicked on inspect and clicked on mobile view then the buttons were horizontally sticked so go give a margin from y axis we also added my-2 */}

  {/* in below my-5 done because from y axis that is from button a gap of 5 can be created using a class named my of bootstrap */}
  {/* we want the text summaries to be also in center type and so using bootstrap class container till the part we want it to be like this */}
  <div className="container my-5" style= {{color: props.mode==='dark'?'white':'dark'}} > 
<h1>
  Your Text summary details are as follows
</h1>
<p>
{/* so in below length of string is the number of characters in the string and so it is found using text.length where text has the updated entered letters , also to find out number of words we are splitting the text that is text.split and whenever a space is encountered then the split is performed so this is because the words in a sentence are separated by space so this way we getting words (" ")and then . length of it means that splitted words length = number of words */}
  The length of the entered words/letters are {text.length} and the number of words entered in the text area is : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
{/* in the above it is also counting the number of the empty strings that is this is a bug so when u enter a word and simply press space then that word along with a empty string is also counted as it assumes after a space there is a string but its empty hence we remove this using filter function which takes a fat arrow fucntion and if it returns true then the statement executes and as we know text.split(" ") this gives us a array with number of words and so if filter function is false then this text.split will not run and hence only the words whose lenght are not zero are added to the array so this bug will be removeed */}
  {/* also here in the above we have changed to /\s+/ because we want that we alos count the words in new line as well as it was not counting hence to remove this bug we are using /\s+/ which counts the words having whitespaces on same or new line and this way the bug can be removed and hence this is how we will split the text  */}

</p>
  <p>
{/* in below line let us say the time taken to read one word is 0.008 min(got from google) and so if multiplied with total number of words then that will be the total time taken to read all words */}
  Time taken to read all the words entered in minutes : {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Mins
  {/* here in above since earlier the problem is it was considering a empty string as a word so even for 0 word it was showing 0.08 mins left but it should be 0 words 0 mins hence here also just like for counting number of words modification we made , we are making a filter function for this somply copy paste what was done there as it will enable not count for empty string and so reading time for them will be zero   */}
  </p>
  {/* note that h1>h2>h3 so space accordingly as per the need */}
  <h2>
    Preview of the text you entered
  </h2>
  <p>
 {/* the below will return the entered text */}
  {text.length>0?text:"Enter something in textarea to be previewed here"}
  </p> 
  </div>    
  </div>
  )
}
