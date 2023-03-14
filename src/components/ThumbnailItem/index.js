import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onChangeImage = () => {
    changeImage(id)
  }

  const activeImage = isActive ? 'activeImg' : ''

  return (
    <li className="list-item">
      <button type="button" onClick={onChangeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbNail ${activeImage}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
