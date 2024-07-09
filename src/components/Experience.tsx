import { useState } from "react"
import Group from "./Group"


const Experience = () => {
  const [numOfGroup,setnumOfGroup] = useState(1)
  let ExperienceData :any|never= []
  let ExperienceDataTwo :any|never= []
  let ExperienceDataThree :any|never= []
  let ExperienceDataFour :any|never= []
  let ExperienceDataFive :any|never= []
  let ExperienceDataSix :any|never= []

  const [experience,setExperience]:any= useState([])
 function addComponents(){
  setExperience([...experience, <div className="edu-group">
              
  <div className="flex justify-evenly">
  <div className="md:col-span-5">
    <label>Place</label>
    <input id={`experience-place-${numOfGroup}`} onChange={changeBtn} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
  </div>
  <div className="md:col-span-5">
    <label>Country</label>
    <input id={`experience-country-${numOfGroup}`} onChange={changeBtn} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
  </div>
  </div>

  <div className="md:col-span-5">
    <label>Title</label>
    <input id={`experience-title-${numOfGroup}`} onChange={changeBtn} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
  </div>
 <div className="flex justify-evenly">
 <div className="md:col-span-3">
    <label>Start</label>
    <input id={`experience-start-${numOfGroup}`} onChange={changeBtn} type="date" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
  </div>
  <div className="md:col-span-2">
    <label>End</label>
    <input id={`experience-end-${numOfGroup}`} onChange={changeBtn} type="date" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
  </div>
  </div>
  <div className="md:col-span-5">
     <label>Description</label>
     <textarea id={`experience-desc-${numOfGroup}`} onChange={changeBtn}  cols={30} rows={5} className="border mt-1 rounded px-4 w-full bg-gray-50"></textarea>
   </div>
 </div>])
 }
 function sendDataToLocalStorage(){
  window.localStorage.setItem('user-experience-place',ExperienceData)
  window.localStorage.setItem('user-experience-counrty',ExperienceDataTwo)
  window.localStorage.setItem('user-experience-start',ExperienceDataThree)
  window.localStorage.setItem('user-experience-end',ExperienceDataFour)
  window.localStorage.setItem('user-experience-title',ExperienceDataFive)
  window.localStorage.setItem('user-experience-desc',ExperienceDataSix)
 
}
function handleTakeData(){
  for(let i=1; i<numOfGroup; i++){
    let elementOne = document.getElementById(`experience-place-${i}`) as HTMLInputElement;
    let resultOne:any|never = elementOne?.value;
    let elementTWo = document.getElementById(`experience-country-${i}`) as HTMLInputElement;
    let resultTwo:any|never = elementTWo?.value;
    let elementThree = document.getElementById(`experience-start-${i}`) as HTMLInputElement;
    let resultThree:any|never = elementThree?.value;
    let elementFour = document.getElementById(`experience-end-${i}`) as HTMLInputElement;
    let resultFour:any|never = elementFour?.value;
    let elementFive = document.getElementById(`experience-title-${i}`) as HTMLInputElement;
    let resultFive:any|never = elementFive?.value;
    let elementSix = document.getElementById(`experience-desc-${i}`) as HTMLInputElement;
    let resultSix:any|never = elementSix?.value;
    if(ExperienceData.length +1 <numOfGroup){
      ExperienceData = [...ExperienceData,resultOne]
      ExperienceDataTwo = [...ExperienceDataTwo,resultTwo]
      ExperienceDataThree = [...ExperienceDataThree,resultThree]
      ExperienceDataFour = [...ExperienceDataFour,resultFour]
      ExperienceDataFive = [...ExperienceDataFive,resultFive]
      ExperienceDataSix = [...ExperienceDataSix,resultSix.replaceAll(',','*')]
    }
  }
}
 function changeBtn(){
  const saveButton = document.getElementById('save-btn-experiences');
  saveButton?.classList.remove('saved-btn')
                saveButton?.classList.add('save-btn')
                if (saveButton instanceof HTMLElement) {
                    saveButton.innerHTML = 'Save!';
                }
               
}
  return (
  <>
    <div id="exp">
              {/* Experience group  */}
              <p className="text-extrabold text-2xl text-center mt-4">Experiences</p>
              <p className="mb-6">*Required</p>
             {/* edu group  */}
             {experience.map((item:any, i:number) => ( <Group text={item} num={i+1} type={'experience'}/> ))} 
            <svg onClick={()=>{
              addComponents()
              setnumOfGroup(numOfGroup+1)
            }} className='svg-add' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>  
              <button className="save-btn" id="save-btn-experiences" onClick={()=>{
                const saveButton = document.getElementById('save-btn-experiences');
               
               handleTakeData()
                console.log(ExperienceData,ExperienceDataTwo,ExperienceDataThree,ExperienceDataFour,ExperienceDataFive,ExperienceDataSix)
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

export default Experience
