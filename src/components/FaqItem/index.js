// Write your code here.
import {Component} from 'react'

import './index.css'

const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleImageActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderAnswerImage = () => {
    const {isActive} = this.state

    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE

    const altText = isActive ? 'minus' : 'plus'

    return (
      <button
        className="button"
        type="button"
        onClick={this.onToggleImageActive}
      >
        <img src={image} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails
    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderAnswerImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
