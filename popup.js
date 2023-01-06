let myLeads = []
let windowArchive = {}
let myUrls = ""
let name_of_list = ""
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-btn")
const archBtn = document.getElementById("archive-btn")
var currentPage = "popup.html"


///////////////////////////////////CONNECTING BUTTONS///////////////////////////////////////////////

//############### SAVE BUTTON #################
//submission info regarding Input button for "enter" key
inputEl.addEventListener("click", function(e){

    //set input value equal to the name of the window archive, the text inside the input button is then reset to ""
    name_of_list = inputEl.value

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
)



//------------- ARCHIVE HISTORY BUTTON -----------
archBtn.addEventListener('click',function(e){
  currentPage = 'archivePage.html';
  window.location = currentPage;
});

  
  
  
////////////////////////// NON-BUTTON RELATED/////////////////////////////////////