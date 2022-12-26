let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const searchBtn = document.getElementById("search-btn")

//The below will take in the value entered in the input-el, resets the value
//of the text box, adds them
// to the listItems from the myLeads array and then displays them
console.log(ulEl)


///////////////////////////////////CONNECTING BUTTONS///////////////////////////////////////////////

//############### SAVE BUTTON #################
//submission info regarding Input button for "enter" key
// when "enter" is hit, the info is added to local stoarge
inputEl.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    inputBtn.click();
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    retrieveData()
  }
})

//submission info regarding Input button for "click"
// when this button is clicked, the info is added to local storage
inputBtn.addEventListener("click", function(e){
    inputBtn.click();
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

//############### HIGHLIGHT BUTTON #################
searchBtn.addEventListener("click", function(e){
  console.log("Search_button_function activated")
  inputBtn.click();
  // make for loop that takes local storage info and puts it into HIGHLIGHTEXT()
  retrieveData()
  for(let i = 0; i < myLeads.length; i++)
    searchItem = myLeads[i]
    console.log("items: ",searchItem)
    console.log("items: ",typeof searchItem)
    highlightText(searchItem)
})


////////////////////////// NON-BUTTON RELATED/////////////////////////////////////

//renders leads and outputs them onto the webpage and console
function renderLeads(){
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++){
    //if lead is an empty quotation, remove it from the array
    if(myLeads[i] === ""){
      myLeads.splice(i,1)
    }
    //else add value to listItems string as a html list type with an anchor tag
    else{
      console.log(myLeads[i])
      listItems += `
        <li>
          <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
          </a>
        </li>
      `
    }
  }
  //log out all leads in console and set ulEL(list id in content.html) equal to
  // the string that you just created.
  console.log("MY LEADS: ", myLeads)
  ulEl.innerHTML = listItems
}



// below just shows that the button has been clicked by logging it in the console
const buyBtn = document.getElementById("buyBtn")

buyBtn.innerHTML = "<button>BUY HERE</button>"
buyBtn.addEventListener("click", function(){
  console.log("Buy button has been clicked.")
})



//################### RETRIEVE TEXT FROM TAB ##############
function retrieveData(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    var tabURL = tabs[0].url;
    for(let i = 0; i < tabs.length; i++){
      console.log(tabs[i])
    }
    // console.log("The extension is opened on: " +tabURL)
  });
}

