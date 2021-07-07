import React , { useState } from 'react'
import './QuestionContainer.css'
import Question from './Question'
import faq from './data';
import { ReactComponent as Illust } from './images/illustration-woman-online-desktop.svg';
import {ReactComponent as BoxIllust} from './images/illustration-box-desktop.svg'
function QuestionContainer() {
    const [faqs,setFaq] = useState(faq) 

    return (
        <div className = 'QuestionContainer'>
            <div className = 'flex_item'>
                <BoxIllust className = 'box'/>
                <Illust />
            </div>
            <div className = 'faq'>
                <h1>FAQ</h1>
                { faqs.map(faq => (
                    <Question faq = {faq} faqs = {faqs} setFaq = {setFaq} key = {faq.id}/>
                ))}
            </div>

        </div>
    )
}

export default QuestionContainer
