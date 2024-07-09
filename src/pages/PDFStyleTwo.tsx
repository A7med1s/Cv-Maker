import { FaPhone, FaEnvelope,FaProjectDiagram ,FaBriefcase ,FaUniversity  } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import BtnToDownloadPdf from '../components/BtnToDownloadPdf';
import DisplayImage from '../components/DisplayImage';



  // personal info 
  const name:any = window.localStorage.getItem('user-name') 
  const jobTitle:any = window.localStorage.getItem('user-setJobTitle') 
  const phone:any = window.localStorage.getItem('user-phone') 
  const email:any = window.localStorage.getItem('user-email') 
  const country :any = window.localStorage.getItem('user-country') 
  const city :any = window.localStorage.getItem('user-city') 
  // const about :any = window.localStorage.getItem('user-about') 



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
    <div className="" id='languages-in-pdf'>
        <h2 className="text-lg font-semibold">Languages</h2>
        <ul className="list-disc ml-4">
          {languages.map((language,i) => (
            <li key={language}>{language}({languagesLevel[i]})</li>
          ))}
        </ul>
      </div>
    </>)
  }
}




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
       <div className="" id='skills-in-pdf'>
        <h2 className="text-lg font-semibold">Skills</h2>
        <ul className="list-disc ml-4">
          {skills.map(skill => (
            <li key={skill} className='uppercase'>{skill}</li>
          ))}
        </ul>
      </div>
  </>)

  }
  
}



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
    <div className="space-y-4" id='eductions-in-pdf'>
      <h2 className="text-xl font-bold flex items-center">
        <FaUniversity className="mr-2" /> Education
      </h2>
      {eduction.map((edu, i) => (
        <div key={i} className="border p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold">{edu} - {eductionPlace[i]}</h3>
          <p className="text-sm text-gray-600">{eductionStart[i].slice(0,4)}-{eductionEnd[i].slice(0,4)}</p>
        </div>
      ))}
    </div>
    </>)
  }
}



function handleExp(){
  const experiencePlaceBeforeEdit:any = window.localStorage.getItem('user-experience-place') 
  if(!experiencePlaceBeforeEdit){

    return(
      <>
      {/* <p>nothing</p> */}
      </>
    )
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
     <div className="space-y-4" id='experiences-in-pdf'>
    <h2 className="text-xl font-bold flex items-center">
      <FaBriefcase className="mr-2" /> Work Experience
    </h2>
    {experiencePlace.map((item, i) => (
      <div key={i} className="border p-4 rounded shadow-sm">
        <h3 className="text-lg font-semibold">{experienceTitle[i]} - {item}</h3>
        <p className="text-sm text-gray-600">{experienceCountry[i]} - {experienceStart[i].slice(0,4)} / {experienceEnd[i].slice(0,4)}</p>
        <p className="text-gray-700">{experienceDesc[i].replaceAll('*',',')}</p>
      </div>
    ))}
  </div>
 </>)
  }
}



function handleproject(){
  const projectBeforeEdit:any = window.localStorage.getItem('user-project') 
  if(!projectBeforeEdit){
      return(<>
      
      </>)
  }else{
    const projects = projectBeforeEdit.split(',')
const projectSummaryBeforeEdit:any = window.localStorage.getItem('user-project-summary') 
const projectsSummary = projectSummaryBeforeEdit.split(',')
    return(<>
      <div className="space-y-4" id='projects-in-pdf'>
      <h2 className="text-xl font-bold flex items-center">
        <FaProjectDiagram className="mr-2" /> Projects
      </h2>
      {projects.map((item, i:number) => (
        <div key={i} className="border p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold">{item}</h3>
          <p className="text-gray-700">{projectsSummary[i].replaceAll('*',',')}</p>
          
        </div>
      ))}
    </div>
    </>)
  }
}




const PDFStyleTwo= () => {
  return (
    <>
    <BtnToDownloadPdf id={'pdf-two'}/>
    <div className='flex justify-evenly mt-2'>
   <button className='bg-black text-white rounded-lg p-1' onClick={()=>{
    document.getElementById('picture-in-pdf')?.remove()
   }}>Delete Picture</button>
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
    <div className="pdf-two " id='pdf-two'>
 <div className='layer-one'>
 <div className="">
        <div className="top-level">
<div id='picture-in-pdf'>
        <DisplayImage/>

</div>
<div>
<p className="text-xl font-bold mt-4 uppercase">{name}</p>
        <p className="text-lg font-semibold mt-4 uppercase">{jobTitle}</p>
        <div className="flex gap-2 items-center mt-2">
          <FaPhone className="text-black" />
          <span>{phone}</span>
        </div>
        <div className="flex gap-2 items-center">
          <FaEnvelope className="text-black" />
          <span className='uppercase'>{email}</span>
        </div>
        <div className="flex gap-2 items-center">
          <MdLocationOn className="text-black" />
          <span className='uppercase'>{country},{city}</span>
        </div>
</div>
        </div>
      </div>
     <div className='grid grid-cols-6 layer-two py-4 px-4'>
     <div className='col-span-2'>
     {handleEduction()}
     {handleLanguages()}
     {handleSkillsAndHobbies()}
  </div>
  <div className='col-span-4'>
   
        {handleExp()}
        {handleproject()}
  
       {/* projects */}
       
  </div>
 
     </div>
     



 </div>
    </div>
   </>
  );
};

export default PDFStyleTwo;