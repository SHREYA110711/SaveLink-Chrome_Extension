
let leads=[];
const input=document.getElementById("input-el");
const save_btn=document.getElementById("save-btn");
const ulEl=document.getElementById("ul-el");
const localsave=JSON.parse(localStorage.getItem("leads"));
const dlt=document.getElementById("dlt-btn");
const tab=document.getElementById("tab-btn");
if(localsave){
  leads=localsave;
  renderLeads();
}
tab.addEventListener("click", function() {
  if(chrome.tabs) {
   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
     leads.push(tabs[0].url);
     localStorage.setItem("leads", JSON.stringify(leads));
     renderLeads();
   });
 } else {

  console.error("chrome.tabs API is not available in this context");
 }
});

dlt.addEventListener("dblclick",function(){
localStorage.clear();
leads=[];
renderLeads();
})

save_btn.addEventListener("click", function(){
  leads.push(input.value);
  input.value="";
  localStorage.setItem("leads",JSON.stringify(leads));
  renderLeads();

})
function renderLeads(){
  let str="  "
  for(let i=0;i<leads.length;i++){
    str+=`<li>
    <a href='${leads[i]}' target='_blank'>${leads[i]}
    </a>
    </li>`
  }
  ulEl.innerHTML=str;

}
