import React from 'react'
import data from './questions.json'

function result(props){

    const arr=[props.s1,props.s2,props.s3,props.s4,props.s5]

    return(
<>

<ul class="list-group list-group-flush">
    <li class="list-group-item"><h1>TestScore: {props.s1+props.s2+props.s3+props.s4+props.s5}/{props.total}</h1></li>
    
    {
    data.map(q =>(<li class="list-group-item">Q{q.id}. {q.question}   <br></br> 
    <strong>correct answer: </strong>{q.answer}  <br></br> 
    <strong>score: </strong>{arr[q.id-1]}</li>))
    }
    </ul>

</>
    )

}
export default result;
