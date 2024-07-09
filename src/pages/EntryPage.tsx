import { Link } from 'react-router-dom'
import Skills from '../components/Skills'
import PesronalInformation from '../components/PesronalInformation'
import Eduction from '../components/Eduction'
import Experience from '../components/Experience'
import Language from '../components/Language'
import Project from '../components/Project'
const EntryPage = () => {

  return (
    
    <>
    <div className="entry-page text-center">
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div>
    {/* personal */}
      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 text-center">
                
        <div className="">
          <div className="lg:col-span-2">
          <PesronalInformation/>
          <hr  className='mt-4'/>
            <Eduction/>
         
             
            <hr  className='mt-4'/>
            <Experience/>
            <hr  className='mt-4'/>
            <Project/>
            <hr  className='mt-4'/>
            <Language/>
            <hr  className='mt-4'/>
            <Skills/>
            {/* <hr  className='mt-4'/> */}
          {/* <Hobby/> */}
          
             </div>
        </div>
      </div>
    <Link to={'/examples'} className='continue-btn'>Continue</Link>
    </div>
  </div>
</div>


    {/* </div> */}
    </>
  )
}

export default EntryPage
