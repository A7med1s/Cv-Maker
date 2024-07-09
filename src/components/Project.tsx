import { useState } from "react"
import Group from "./Group"
const Project = () => {
  let ProjectTitleTwo :any|never= []
  let ProjectSummaryTwo :any|never= []
const [numOfGroup,setnumOfGroup] = useState(1)


  const [projects,setProjects]:any = useState([])
 
  function addComponents(){
    setProjects([...projects,<div className="project-group">
              
    <div className="flex justify-evenly">
   
  
    </div>
  
    <div className="md:col-span-5">
      
      <label>Title</label>
      <input  id={`project-inp-${numOfGroup}`} onChange={()=>{
       changeBtn()
      //  handleTakeData()
       }} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
    </div>
  
    <div className="md:col-span-5">
       <label>Summary</label>
       <textarea  id={`project-textarea-${numOfGroup}`} onChange={()=>{
       changeBtn()
      //  handleTakeData()
       }} cols={30} rows={5} className="border mt-1 rounded px-4 w-full bg-gray-50"></textarea>
     </div>
   </div>])
  }
  function changeBtn(){
    const saveButton = document.getElementById('save-btn-project');
    saveButton?.classList.remove('saved-btn')
                  saveButton?.classList.add('save-btn')
                  if (saveButton instanceof HTMLElement) {
                      saveButton.innerHTML = 'Save!';
                  }
                 
  }
  function sendDataToLocalStorage(){
    window.localStorage.setItem('user-project',ProjectTitleTwo)
    window.localStorage.setItem('user-project-summary',ProjectSummaryTwo)
   
  }
  function handleTakeData(){
    for(let i=1; i<numOfGroup; i++){
      let elementOne = document.getElementById(`project-inp-${i}`) as HTMLInputElement;
      let resultOne:any|never = elementOne?.value;
      let elementTWo = document.getElementById(`project-textarea-${i}`) as HTMLInputElement;
      let resultTwo:any|never = elementTWo?.value;
      if(ProjectTitleTwo.length +1 <numOfGroup){
        ProjectTitleTwo = [...ProjectTitleTwo,resultOne]
        ProjectSummaryTwo = [...ProjectSummaryTwo,resultTwo.replaceAll(',','*')]
        
      }
    }
  }
  return (
    <>
     <div id="project">
              {/* Experience group  */}
              <p className="text-extrabold text-2xl text-center mt-4">Projects</p>
              <p className='mb-6'>*Optional</p>
             {/* edu group  */}
             {projects.map((item:any, i:number) => ( <Group text={item} num={i+1} type={'project'}/> ))} 
            <svg onClick={()=>{
              addComponents();
              setnumOfGroup(numOfGroup+1)
            }} className='svg-add' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>  
            <button className="save-btn" id="save-btn-project" onClick={()=>{
                const saveButton = document.getElementById('save-btn-project');
               
               handleTakeData()
                console.log(ProjectTitleTwo,ProjectSummaryTwo)
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

export default Project
