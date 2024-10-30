import React,{useState} from 'react'

function Card({id,name,image,price,info,removeTour}) {
const [readMore,setReadMore] = useState(false)
    function readmoreHandler(){
        setReadMore(!readMore)
    }
function RemoveHandler(){
    removeTour(id)
}
   
    const description = readMore ? info : `${(info || '').substring(0, 200)}...`;
  return (
    <div>
      <img src={image}></img>
      <div>

      <div>{name}</div>

        <div>{price}</div>
        
        <div>
            {description}

            <span className="readMore" onClick={readmoreHandler}>
                        {readMore ? `show less` : `read more`}
                    </span>

        </div>

      </div>

      <div>
      <button className="btnRed" onClick={RemoveHandler}>
                Not Interested
            </button>
      </div>
    </div>
  )
}

export default Card
