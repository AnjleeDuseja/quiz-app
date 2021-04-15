import React from 'react'
import data from './questions.json'
function question(props){
    return(
<div>
    {
       data.filter(ques=>ques.id==props.number).map(q=><h3>{q.id}. {q.question}</h3>)
       
    }
</div>

    )

}
export default question;