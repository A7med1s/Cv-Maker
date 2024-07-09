import BtnToDownloadPdf from '../components/BtnToDownloadPdf';

const PDFStyleOne = () => {
  function handleSkillsAndHobbies(){
    const skillsBeforeEdit:any = window.localStorage.getItem('user-skills') 
    if(skillsBeforeEdit.length ===2){
     
      return(<>
      </>)
    }
    else{
      const dataResolveOne = skillsBeforeEdit.replaceAll('"'," ")
    const dataResolveTwo = dataResolveOne.replaceAll('['," ")
    const dataResolveThree = dataResolveTwo.replaceAll(']'," ")
    const skills = dataResolveThree.split(',')
    return(<>
        <div className='skills' id='skills-in-pdf'>
        <p className='uppercase font-bold'>skills</p>
        <div>
        {skills.map((skill)=>{
          return(
            <>
            <p className='font-semibold capitalize'>- {skill}</p>
            </>
          )
        })}
        </div>
      </div>
    </>)
  
    }
    
  }
  
  // personal info 
  const name:any = window.localStorage.getItem('user-name') 
  // const age:any = window.localStorage.getItem('user-age') 
  const jobTitle:any = window.localStorage.getItem('user-setJobTitle') 
  const phone:any = window.localStorage.getItem('user-phone') 
  const email:any = window.localStorage.getItem('user-email') 
  const country :any = window.localStorage.getItem('user-country') 
  const city :any = window.localStorage.getItem('user-city') 
  // const about :any = window.localStorage.getItem('user-about') 
  
  // language
  function handleLanguages(){
    const languageBeforeEdit:any = window.localStorage.getItem('user-language') 
    if(!languageBeforeEdit){
      return(<></>)
    }
    else{
      const languages = languageBeforeEdit.split(',')
      const languageLevelBeforeEdit:any = window.localStorage.getItem('user-language-level') 
      const languagesLevel = languageLevelBeforeEdit.split(',')
      return(<>
       <div className='languages' id='languages-in-pdf'>
      <p className='uppercase font-bold'>languages</p>
        <div>
        {languages.map((language,i)=>{
          return(
            <>
            <p className='font-semibold '>- <span className='capitalize'>{language}</span> ({languagesLevel[i]})</p>
            </>
          )
        })}
        </div>
      </div>
      </>)
    }
  }

  
  

// experiences

function handleExp(){
  const experiencePlaceBeforeEdit:any = window.localStorage.getItem('user-experience-place') 
  if(!experiencePlaceBeforeEdit){
    return(<>
      </>)
  }else{
    const experiencePlace = experiencePlaceBeforeEdit.split(',')
const experienceCounrtyBeforeEdit:any = window.localStorage.getItem('user-experience-counrty') 
const experienceCountry = experienceCounrtyBeforeEdit.split(',')
const experienceStartBeforeEdit:any = window.localStorage.getItem('user-experience-start') 
const experienceStart = experienceStartBeforeEdit.split(',')
const experienceEndBeforeEdit:any = window.localStorage.getItem('user-experience-end') 
const experienceEnd = experienceEndBeforeEdit.split(',')
const experienceTitleBeforeEdit:any = window.localStorage.getItem('user-experience-title') 
const experienceTitle = experienceTitleBeforeEdit.split(',')
const experienceDescBeforeEdit:any = window.localStorage.getItem('user-experience-desc') 
const experienceDesc = experienceDescBeforeEdit.split(',')
return(<>
   <div className='experiences' id='experiences-in-pdf'>
        <p className='uppercase text-center font-bold text-xl'>experiences</p>
          {experiencePlace.map((item,i)=>{
            return(<>
               <div>
       <p className='font-semibold text-sm mt-3 capitalize'>{experienceTitle[i]} - {item}</p>
        <div className='small'>
        <p className='capitalize'>{experienceCountry[i]} - {experienceStart[i].slice(0,4)} / {experienceEnd[i].slice(0,4)}</p>
        <p>{experienceDesc[i].replaceAll('*',',')}</p>
        </div>
       </div>
      
            </>)
          })}
      </div>
</>)
  }
}


// eduction


  function handleEduction(){
    const eductionBeforeEdit:any = window.localStorage.getItem('user-eduction') 
    if(!eductionBeforeEdit){
      return(<>
      </>)
    }else{
      const eduction = eductionBeforeEdit.split(',')
      const eductionPlaceBeforeEdit:any = window.localStorage.getItem('user-eduction-place') 
      const eductionPlace = eductionPlaceBeforeEdit.split(',')
      const eductionStartBeforeEdit:any = window.localStorage.getItem('user-eduction-start') 
      const eductionStart = eductionStartBeforeEdit.split(',')
      const eductionEndBeforeEdit:any = window.localStorage.getItem('user-eduction-end') 
      const eductionEnd = eductionEndBeforeEdit.split(',')
      return(<>
            <div className='eduction mt-3' id='eductions-in-pdf'>
      <p className='uppercase font-bold'>eduction</p>
      {eduction.map((item,i)=>{
        return(<>
        <div className='small m-1'>
        <p className='capitalize'>{item}</p>
        <p className='uppercase'>{eductionPlace[i]}</p>
        <p className='uppercase'>{eductionStart[i].slice(0,4)}-{eductionEnd[i].slice(0,4)}</p>
      </div>
     
        </>)
      })}
      </div>
      </>)
    }
  }


  // projects
  
  function hanldeProject(){
    const projectBeforeEdit:any = window.localStorage.getItem('user-project') 
    if(!projectBeforeEdit){
      return(<>
        </>)
    }else{
      const projects = projectBeforeEdit.split(',')
      const projectSummaryBeforeEdit:any = window.localStorage.getItem('user-project-summary') 
      const projectsSummary = projectSummaryBeforeEdit.split(',')
      return(<>
           <div className='projects mb-3' id='projects-in-pdf'>
      <p className='uppercase text-center font-bold text-xl mt-3'>projects</p>
      {projects.map((item,i)=>{
            return(<>
               <div>
       <p className='font-semibold text-sm mt-3 capitalize'>{item}</p>
        <div className='small'>
        <p>{projectsSummary[i].replaceAll('*',',')}</p>
        </div>
       </div>
      
            </>)
          })}
      </div>
      </>)
    }
  }
  return (
   <>
   <BtnToDownloadPdf id={'pdf-one'}/>
   <div className='flex justify-evenly mt-2'>
 
   <button className='bg-black text-white rounded-lg p-1' onClick={()=>{
    document.getElementById('experiences-in-pdf')?.remove()
   }}>Delete Experiences</button>
   
   <button className='bg-black text-white rounded-lg p-1' 
   onClick={()=>{
    document.getElementById('eductions-in-pdf')?.remove()}}>Delete Eduction</button>
   <button className='bg-black text-white rounded-lg p-1'onClick={()=>{
    document.getElementById('languages-in-pdf')?.remove()}} >Delete Languages</button>
   <button className='bg-black text-white rounded-lg p-1' onClick={()=>{
    document.getElementById('projects-in-pdf')?.remove()}}>Delete Projects</button>
   <button className='bg-black text-white rounded-lg p-1' onClick={()=>{
    document.getElementById('skills-in-pdf')?.remove()}}>Delete Skills</button>
   </div>
  
   <div className='pdf-one' id='pdf-one'>
    <div className='layer-one'>
    <div className='top-level py-4'>
        <p className='font-bold text-2xl capitalize'>{name}</p>
        <p className='font-semibold uppercase'>{jobTitle}</p>
    </div>
    <div className='grid-system grid grid-cols-5'>
    {/* aside */}
    <div className='aside col-span-2 bg-slate-200 px-4 pt-3'>
      <div className='contact'>
      <p className='uppercase font-bold'>Contact</p>
      <p className='flex small-two'> <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.2 18.3c-3-3-6.5-3.4-9-.8-.3.3-.6.6-.8 1-1.4-1.2-2.6-2.5-3.8-3.8.4-.3.7-.5 1-.8 2.5-2.5 2.2-6-.8-9s-6.5-3.4-9-.8c-2.7 2.7-3.1 7.4-1 10.6 3.5 5.2 8.6 10.4 13.8 13.8 1.4.9 3 1.3 4.6 1.3 2.2 0 4.4-.8 5.9-2.3 2.5-2.7 2.2-6.2-.9-9.2z" />
    </svg> {phone}</p>
      <p className='flex small-two'>  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 5v4l-10 4L2 9V5a1 1 0 011-1h18a1 1 0 011 1zM2 11.154V19a1 1 0 001 1h18a1 1 0 001-1v-7.846l-10 4z" />
    </svg> {email}</p>
      <p className='flex'><svg viewBox="-4 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 9a3 3 0 100 6 3 3 0 000-6zm0 8a5 5 0 110-10 5 5 0 010 10zm0-17C5.373 0 0 5.373 0 12c0 5.018 10.005 20.011 12 20 1.964.011 12-15.05 12-20 0-6.627-5.373-12-12-12z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg> {country} , {city} </p>
      </div>
        {handleEduction()}
        {handleLanguages()}
      {handleSkillsAndHobbies()}
  
      {/* <div className='hobbies'>
        <p className='uppercase font-bold'>hobbies</p>
        <div>
        {hobbies.map((hobby)=>{
          return(
            <>
            <p className='font-semibold'>- {hobby}</p>
            </>
          )
        })}
        </div>
      </div> */}
    </div>
    
{/* main section */}
    <div className='main-section col-span-3 pl-4 pt-3'>
        {handleExp()}
        {hanldeProject()}
    </div>

    </div>
    </div>
   </div>
   </>
  )
}

export default PDFStyleOne
