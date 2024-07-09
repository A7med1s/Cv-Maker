import { Link } from "react-router-dom"
const StartPage = () => {
  return (
   <>
   <div className="start-page text-center">
    <p className="pb-6 text-2xl font-bold">NINJA CV MAKER</p>
    <p className="pb-6">Help You To Make A Profissinal CV <br />
    You will easily get it </p>
    <Link className="start-btn" to={'/enter-data'}>Continue</Link>
   </div>
   </>
  )
}

export default StartPage
