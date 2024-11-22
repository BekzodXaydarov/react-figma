import "./Review.css"

export interface ReviewI { }

const Review: React.FC<ReviewI> = () => {
    return (
        <div className="review">
            <p className="review-text">
                <img src="/svgs/icon.svg" alt="" />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.....
            </p>
            <div className="review-img">
                <img src="/images/img1.png" alt="" />
                <img src="/images/img2.png" alt="" />
                <img src="/images/img3.png" alt="" />
                <img src="/images/img4.png" alt="" />
                <h1>
                    Scarlett Thomas
                    <span>
                        Singapore
                    </span>          
                          </h1>
            </div>
        </div>
    )
}

export default Review