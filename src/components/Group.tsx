

const Group = (prop:any) => {
  return (
    <>
   <div id={`${prop.type}-${prop.num}`}>
   <span className="x-icon" onClick={()=>{
    document.getElementById(`${prop.type}-${prop.num}`)?.remove()
  }}>-</span>
   
        {prop.text}
   </div>
    </>
  )
}

export default Group
