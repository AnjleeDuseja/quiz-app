import React, { useState } from 'react'
import data from './questions.json'
function options(props){
   
    return(
<div>
    {
    
    data.filter(ques=>ques.id==props.number).map(q=> q.options.map( optio=> {
        const result = Object.keys(optio).map((key) => optio[key]);
        return(
            <>
            {
       result.map(res =>
        <div>

        <label>
         <input type="radio" value={res} name="answer"  onChange={props.handleChange}/>
         {res}  
         </label> 

    </div>
        )
        } </>  )
    }
      

    ))


}
</div>
    )
}
export default options