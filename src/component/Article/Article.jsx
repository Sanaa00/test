import RedParagraph from "./RedParagraph"
import DateAndTime from "./DateAndTime"
// import ReadingModeSection from "./ReadingModeSection"
import ShareButton from "./ShareButton"
import {  useState } from "react"
import { IoReaderOutline } from "react-icons/io5"
import Button from "./Button"
import  { paragraph ,paragraphContent} from "./Article.utility"
function Article() {
const [textSize,setTextSize]=useState(20)
const [readMode,setReadMode]=useState(true)
 

const readModeHandler=()=>{
  setReadMode(!readMode)
}
const zoominTextHandler=(size)=>{
  setTextSize(()=>size+1)
  console.log(textSize)
}
const zoomoutTextHandler=(size)=>{
  setTextSize(()=>size-1)
  console.log(textSize)
}
const defaultTextHandler=()=>{
  setTextSize(20)
  console.log(textSize)
}


  return (
    <div className="flex flex-col w-3/6 my-10 " >
   {readMode===true &&<> <p className="text-xl font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <div className="flex mt-4"> 
    {paragraph.map((p)=>{
      return <RedParagraph key={p.id} text={p.text} />
    })} 
    </div>
    <img className="w-full h-80 object-cover mt-4" src="https://plus.unsplash.com/premium_photo-1682088852290-a6aaa1472920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="article"/>
     </>}
     
      <div className="flex items-center justify-between \ mt-4">
      <DateAndTime/>
      <div className="flex"> 
      <ShareButton/>
       <div className="bg-gray-100 rounded-full px-4 py-1 flex justify-center items-center">
    <Button text={`${readMode===true? "Enable reading mode":"Disable reading mode"}`} icon={<IoReaderOutline/>} onClick={readModeHandler}/>
    <p className="px-2 text-gray-300">|</p>

    <Button text="A" symbol="-" onClick={()=>zoomoutTextHandler(textSize)}/>
    <Button text="A" onClick={()=>defaultTextHandler()} />
    <Button text="A" symbol="+" onClick={()=>zoominTextHandler(textSize)}/></div>
 
      </div>
      </div>
      <div >{paragraphContent.map((text)=>{
        return <p key={text.id} style={{marginTop:"15px",fontSize:`${textSize}px`}}>{text.text}</p>
      })}</div>
    
    </div>
  )
}

export default Article
