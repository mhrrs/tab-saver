let myLeads = []
let windowArchive = {}
let myUrls = ""
let name_of_list = ""
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//The below will take in the value entered in the input-el, resets the value
//of the text box, adds them
// to the listItems from the myLeads array and then displays them
console.log(ulEl)


///////////////////////////////////CONNECTING BUTTONS///////////////////////////////////////////////

//############### SAVE BUTTON #################
//submission info regarding Input button for "enter" key
inputEl.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    inputBtn.click();

    //set input value equal to the name of the window archive, the text inside the input button is then reset to ""
    name_of_list = inputEl.value
    inputEl.value = ""

    //get all tabs open in window and insert into tabURLS array
    chrome.tabs.query({}, function(tabs){
        const tabURLS = tabs.map(tab => tab.url);
        console.log(name_of_list)
        console.log(tabURLS)

        //turns the data into a dictionary where the archive name is the key and url array is the value
        windowArchive = {name_of_list: tabURLS}
        console.log(Object.entries(windowArchive))
    
        //adds urls from each tab into content.html
        for(let i = 0; i < tabURLS.length; i++){
        ulEl.innerHTML += `
        <li>
            ${"TAB: "}
            <a target='_blank' href='${tabURLS[i]}'>
            ${tabURLS[i]}
            </a>
        </li>
        `
        }
    });
  }
})


////////////////////////// NON-BUTTON RELATED/////////////////////////////////////

