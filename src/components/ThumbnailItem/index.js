import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItemDeatils, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailItemDeatils

  const changeImage = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li>
      <button className="button" type="button" onClick={changeImage}>
        <img className="image" src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
