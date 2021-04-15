import {useState,React, useEffect} from 'react'
import { Card,Button } from 'react-bootstrap';
import Ques from './question'
import Opt from './options'
import data from './questions.json'
import Result from './result'

function Myquiz(){

    const [count, setCount]=useState(1);     //questions count
    const [score1, setScore1]=useState(0);   // store the score of question 1 as per user's input
    const [score2, setScore2]=useState(0);
    const [score3, setScore3]=useState(0);
    const [score4, setScore4]=useState(0);
    const [score5, setScore5]=useState(0);
    let arr=[0,0,0,0,0]

    const handleChange = event => {

        //check if user choose the correct answer then set score of that question to 1
        const ans= data.filter(ques=>ques.id==count).map(q => q.answer)
        if(ans==event.target.value){
        
            switch(count){
                case 1:
                    setScore1(1);
                    break;
               case 2:
                    setScore2(1);
                    break;
               case 3:
                    setScore3(1);
                       break;
               case 4:
                    setScore4(1);
                           break;
               case 5:
                    setScore5(1);
                           break;
            }
         
        }
        
        //else if  user choose the incorrect answer then set score of that question to 0
        else if(ans!=event.target.value){
            
                switch(count){
                    case 1:
                        setScore1(0);
                        break;
                   case 2:
                        setScore2(0);
                        break;
                   case 3:
                        setScore3(0);
                           break;
                   case 4:
                        setScore4(0);
                               break;
                   case 5:
                        setScore5(0);
                               break;
                }
             
            }
        }
        

useEffect(() => { 
    if(count<5) {
return(
    <>
<Ques number={count} />
<Opt number={count} handleChange={handleChange}/>
</>
   )}
   
}, []);
    
//for next button
function nextQ() {
    if(count!=6){
    setCount(count+1);
      }

  }

//for previous button
  function preQ() {
      if(count!=1){
    setCount(count-1);
      }
      
      
  }

  // if questions are not completed then render this to show the questions
  if(count<=5){
    return(
        
     <>
        <Card>
        <Card.Header className="justify-content-center">Quiz</Card.Header>
        <Card.Body>
          <Card.Text>    
          <Ques number={count} />
          <Opt number={count} handleChange={handleChange} />
          </Card.Text>
          <Button variant="success" className="m-2"  onClick={preQ}>Previous</Button>
          <Button variant="success" onClick={nextQ}> Next</Button>
          
          
        </Card.Body>
       
        <Card.Footer>Questions {count}/5</Card.Footer>
    
      </Card>

     </>

 );
    }

    // if questions are completed then render the result component
  if(count==6){
    return(
        
     <>
        <Card>
        <Card.Header className="justify-content-center">Quiz</Card.Header>
        <Card.Body>
          <Card.Text>    
          </Card.Text>
          
          <Result s1={score1} s2={score2} s3={score3} s4={score4} s5={score5} total={count-1} />
          
          
        </Card.Body>
       
        <Card.Footer>Final Result</Card.Footer>
    
      </Card>

     </>

 );
    }
}
export default Myquiz;