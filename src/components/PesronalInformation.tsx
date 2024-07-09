import { useState } from "react"
import ImageUploader from "./ImageUploader"

const PesronalInformation = () => {
  const [name,setName]=useState('')
  // const [age,setAge]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [jobTitle,setJobTitle]=useState('')
  const [country,setCountry]=useState('')
  const [city,setCity]=useState('')
  const [about,setAbout]=useState('')
  const [errors, setErrors]:any = useState({});


  const validateInputs = () => {
    const newErrors:any = {
  
    };

    if (!name) {
      newErrors.name = 'name is required';
    }

    if (!phone) {
      newErrors.phone = 'phone is required';
    }
    if (!email) {
      newErrors.email = 'email is required';
    }
    if (!jobTitle) {
      newErrors.jobTitle = 'job title is required';
    }
    if (!country) {
      newErrors.country = 'country is required';
    }
    if (!city) {
      newErrors.city = 'city is required';
    }
    if (!about) {
      newErrors.about = 'about is required';
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateInputs()) {
      const saveButton = document.getElementById('save-btn-personal');
      saveButton?.classList.add('saved-btn');
      saveButton?.classList.remove('save-btn');
      if (saveButton instanceof HTMLElement) {
        saveButton.innerHTML = 'Saved';
      }

      sendDataToLocalStorage();
    }
  };

function sendDataToLocalStorage(){
  window.localStorage.setItem('user-name',name)
  // window.localStorage.setItem('user-age',age)
  window.localStorage.setItem('user-phone',phone)
  window.localStorage.setItem('user-email',email)
  window.localStorage.setItem('user-country',country)
  window.localStorage.setItem('user-city',city)
  window.localStorage.setItem('user-about',about)
  window.localStorage.setItem('user-setJobTitle',jobTitle)
}
function changeBtn(){
  const saveButton = document.getElementById('save-btn-personal');
  saveButton?.classList.remove('saved-btn')
                saveButton?.classList.add('save-btn')
                if (saveButton instanceof HTMLElement) {
                    saveButton.innerHTML = 'Save!';
                }
}

  return (
 <>
   <p className="text-extrabold text-2xl">Personal Informations</p>
   <p className="mb-6">*Required</p>
   <div className="">
          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
                <label>Full Name</label>
                <input onChange={(e)=>{
                  setName(e.target.value)
                  changeBtn()
                  
                }} type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>

              <div className="md:col-span-5">
                <label>Phone</label>
                <input onChange={(e)=>{
                  setPhone(e.target.value)
                  changeBtn()
                }}  type="number" name="phone" id="phone" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
             
              <div className="md:col-span-5">
                <label>Email Address</label>
                <input onChange={(e)=>{
                  setEmail(e.target.value)
                  changeBtn()
                }}  type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="md:col-span-5">
                <label>Job Title</label>
                <input onChange={(e)=>{
                  setJobTitle(e.target.value)
                  changeBtn()
                }}  type="text" name="job-title" id="job-title" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                {errors.jobTitle && <p className="text-red-500">{errors.jobTitle}</p>}
              </div>
              <div className="md:col-span-5 ">
              <label>Uoplad Your Photo</label>
                <ImageUploader/>
              </div>
              <div className="md:col-span-3">
                <label >Country</label>
                <input onChange={(e)=>{
                  setCountry(e.target.value)
                  changeBtn()
                }}  type="text" name="country" id="country" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                {errors.country && <p className="text-red-500">{errors.country}</p>}
              </div>       
              <div className="md:col-span-2">
                <label >City</label>
                <input onChange={(e)=>{
                  setCity(e.target.value)
                  changeBtn()
                }}  type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                {errors.city && <p className="text-red-500">{errors.city}</p>}
              </div>       

      
              <div className="md:col-span-5">
                <label>About You</label>
                <textarea onChange={(e)=>{
                  setAbout(e.target.value)
                  changeBtn()
                }}  cols={30} rows={5} className="border mt-1 rounded px-4 w-full bg-gray-50"></textarea>
                 {errors.about && <p className="text-red-500">{errors.about}</p>}
              </div>
                </div>
                </div>
                <button className="save-btn" id="save-btn-personal" onClick={handleSave}>Save!</button>
                </div>
              
 </>
  )
}

export default PesronalInformation
