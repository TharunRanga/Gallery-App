// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, thumbnailImg, isActiveThumbnailImg} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails

  const onThumbnailImg = () => {
    thumbnailImg(id)
  }

  const isThumbnailActive = isActiveThumbnailImg ? 'active-thumbnail' : ''

  return (
    <li className="thumbnail-item">
      <button className="thumbnail-btn" type="button" onClick={onThumbnailImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${isThumbnailActive}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
