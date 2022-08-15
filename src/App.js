import React ,{useState} from 'react'
import data from './data.js'
export default function App() {

  const [dummyText , setDummyText] = useState([])
  const [count , setCount] = useState(0)
    const handleSubmit = (e) =>{
      e.preventDefault()
      let amount = parseInt(count)
      if(amount <=0)
      {
            amount = 1
      }
      if(amount >= data.length)
      {
        amount = data.length
      }

      setDummyText(data.slice(0,amount))

    }
  return (
    <>
    <div className="container">
    <h1>Generate dummy Text</h1>
   <form onSubmit={handleSubmit}>
   <label>paragraphs :</label>
   <input type="number" name="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
   <button type="submit" >generate</button>
   </form>
   <article>
   {dummyText.map((text,index)=><p key={index}>{text}</p>)}
   </article>
    </div>
    </>
  )
}
