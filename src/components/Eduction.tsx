import { useState } from "react"
import Group from "./Group"

const Eduction = () => {

  const [numOfGroup,setnumOfGroup] = useState(1)
  let EductionData :any|never= []
  let EductionDataTwo :any|never= []
  let EductionDataThree :any|never= []
  let EductionDataFour :any|never= []
 

  const [eduction,setEduction]:any=useState([])
  function addComponents (){
    setEduction([...eduction,<div className="edu-group">
              
    <div className="md:col-span-5">
      <label>Degree & Specialization</label>
      <input id={`eduction-degree-${numOfGroup}`} onChange={changeBtn} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
    </div>
    <div className="md:col-span-5">
      <label>Place</label>
      <input id={`eduction-place-${numOfGroup}`} onChange={changeBtn} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
    </div>
   <div className="flex justify-evenly">
   <div className="md:col-span-3">
      <label>Start</label>
      <input id={`eduction-start-${numOfGroup}`} onChange={changeBtn}  type="date" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
    </div>
    <div className="md:col-span-2">
      <label>End</label>
      <input id={`eduction-end-${numOfGroup}`} onChange={changeBtn}  type="date" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
    </div>
    
   </div>
   
  
  
    </div>])
  }
  function sendDataToLocalStorage(){
    window.localStorage.setItem('user-eduction',EductionData)
    window.localStorage.setItem('user-eduction-start',EductionDataTwo)
    window.localStorage.setItem('user-eduction-end',EductionDataThree)
    window.localStorage.setItem('user-eduction-place',EductionDataFour)
   
  }
  function handleTakeData(){
    for(let i=1; i<numOfGroup; i++){
      let elementOne = document.getElementById(`eduction-degree-${i}`) as HTMLInputElement;
      let resultOne:any|never = elementOne?.value;
      let elementTWo = document.getElementById(`eduction-start-${i}`) as HTMLInputElement;
      let resultTwo:any|never = elementTWo?.value;
      let elementThree = document.getElementById(`eduction-end-${i}`) as HTMLInputElement;
      let resultThree:any|never = elementThree?.value;
      let elementFour = document.getElementById(`eduction-place-${i}`) as HTMLInputElement;
      let resultFour:any|never = elementFour?.value;
      if(EductionData.length +1 <numOfGroup){
        EductionData = [...EductionData,resultOne]
        EductionDataTwo = [...EductionDataTwo,resultTwo]
        EductionDataThree = [...EductionDataThree,resultThree]
        EductionDataFour = [...EductionDataFour,resultFour]
      }
    }
  }
  function changeBtn(){
    const saveButton = document.getElementById('save-btn-eduction');
    saveButton?.classList.remove('saved-btn')
                  saveButton?.classList.add('save-btn')
                  if (saveButton instanceof HTMLElement) {
                      saveButton.innerHTML = 'Save!';
                  }
                 
  }
  return (
<>
<div id="edu">
<p className="text-extrabold text-2xl text-center mt-4">Eduction</p>
<p className="mb-6">*Required</p>
{eduction.map((item:any,i:number)=>(<Group text={item} num={i} type={'eduction'}/>))}
             <svg onClick={()=>{
              addComponents()
              setnumOfGroup(numOfGroup+1)
             }} className='svg-add' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>  
              <button className="save-btn" id="save-btn-eduction" onClick={()=>{
                const saveButton = document.getElementById('save-btn-eduction');
               
               handleTakeData()
                console.log(EductionData,EductionDataTwo,EductionDataThree,EductionDataFour)
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

export default Eduction
