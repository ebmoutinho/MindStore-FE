import starFull from '../../assets/star-full.png'
import starEmpty from '../../assets/star-empty.png'
import starHalf from '../../assets/star-half.png'

function RenderRating(props) {
    const { productRating } = props;
    if (productRating.rate <= 0.4) {
        return (
            <div className="product-detail_rating">
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (productRating.rate <= 0.9) {
        return (
            <div className="product-detail_rating">
                <img src={starHalf} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (productRating.rate <= 1.4) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (productRating.rate <= 1.9) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starHalf} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (productRating.rate <= 2.4) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (productRating.rate <= 2.9){ 
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starHalf} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (productRating.rate <= 3.4){ 
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (productRating.rate <= 3.9){ 
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starHalf} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (productRating.rate <= 4.4){ 
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (productRating.rate <= 4.4){ 
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starHalf} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    } else { 
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
            </div>
        )
    }
}

export default RenderRating;