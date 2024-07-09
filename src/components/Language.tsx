import { useState } from "react"
import Group from "./Group"

const Language = () => {
  let LanguageData :any|never= []
  let LanguageDataTwo :any|never= []
const [numOfGroup,setnumOfGroup] = useState(1)

 const [language,setLanguage]:any= useState([])
 function addComponents (){
   
   setLanguage([...language,<div className="flex justify-around">
    <div className="md:col-span-5">
       <label>Language</label>
       <input  id={`language-inp-${numOfGroup}`} onChange={()=>{
       changeBtn()
      //  handleTakeData()
       }} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
     </div>
     <div>
      <p className="font-semibold">Level</p>
      <select onChange={()=>{
        changeBtn()
        // handleTakeData()
      }} id={`language-select-${numOfGroup}`} className="bg-black text-white px-2 py-2 mt-1 cursor-pointer">
        <option value="beginner">Beginner</option>
        <option value="mid">Intermediate </option>
        <option value="fluent">Fluent</option>
        <option value="native">Native</option>
      </select>
     </div>
    </div>])
  }
  function changeBtn(){
    const saveButton = document.getElementById('save-btn-language');
    saveButton?.classList.remove('saved-btn')
                  saveButton?.classList.add('save-btn')
                  if (saveButton instanceof HTMLElement) {
                      saveButton.innerHTML = 'Save!';
                  }
                 
  }
  function sendDataToLocalStorage(){
    window.localStorage.setItem('user-language',LanguageData)
    window.localStorage.setItem('user-language-level',LanguageDataTwo)
   
  }
  function handleTakeData(){
    for(let i=1; i<numOfGroup; i++){
      let elementOne = document.getElementById(`language-inp-${i}`) as HTMLInputElement;
      let resultOne:any|never = elementOne?.value;
      let elementTWo = document.getElementById(`language-select-${i}`) as HTMLInputElement;
      let resultTwo:any|never = elementTWo?.value;
      if(LanguageData.length +1 <numOfGroup){
        LanguageData = [...LanguageData,resultOne]
        LanguageDataTwo = [...LanguageDataTwo,resultTwo]
      }
    }
  }
  return (
<>
<div id="language">
            <p className="text-extrabold text-2xl text-center mt-4">Languages</p>
            <p className="mb-6">*Required</p>
            {language.map((item:any, i:number) => ( <Group text={item} num={i+1} type={'language'}/> ))} 
            <svg onClick={()=>{
              addComponents()
              setnumOfGroup(numOfGroup+1)
              
            }} className='svg-add' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>  
            <button className="save-btn" id="save-btn-language" onClick={()=>{
                const saveButton = document.getElementById('save-btn-language');
               
               handleTakeData()
                console.log(LanguageData,LanguageDataTwo)
                if (saveButton instanceof HTMLElement) {
                    saveButton.innerHTML = 'Saved';
                }
                saveButton?.classList.add('saved-btn')
                saveButton?.classList.remove('save-btn')
                  sendDataToLocalStorage()
                }}>Save!</button>
            
            </div>
</>
  )
}

export default Language
