import React from 'react'
import './Question.css'
import {ReactComponent as Arrow} from './images/icon-arrow-down.svg'

const Question = ({faq,setFaq,faqs}) => {
    const handleAnswer = ()=>{
        setFaq(faqs.map(f => {
                f.id === faq.id ? f.show = !f.show : f.show = false
                return f
            })
        )
    }
    return (
        <div className = 'question' onClick = {handleAnswer}>
            <div>
                <h2 className = {faq.show ? 'bold' : ''}>{faq.question}</h2>
                <Arrow className = {`arrow ${faq.show ? 'arrowup' : ''}`}/>
            </div>
            <p className = {faq.show ? 'show' : ''}>
                {faq.answer}
            </p>      
        </div>
    )
}

export default Question
