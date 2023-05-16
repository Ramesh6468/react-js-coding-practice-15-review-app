// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  onClickLeftArrow = () => {
    const {reviewIndex} = this.state

    if (reviewIndex > 0) {
      this.setState(prevState => ({
        reviewIndex: prevState.reviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props

    if (reviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewIndex: prevState.reviewIndex + 1,
      }))
    }
  }

  getProfile = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="reviewContainer">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[reviewIndex]
    return (
      <div className="bgContainer">
        <h1 className="heading">Reviews</h1>
        <div className="profileContainer">
          <button
            type="button"
            className="button1"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          {this.getProfile(currentReviewDetails)}
          <button
            type="button"
            className="button1"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
