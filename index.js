import './index.css'

const CardItem = props => {
  const {keys} = props
  const {title, description, imgUrl, className} = keys

  return (
    <li className={className}>
      <h1 className="head">{title}</h1>
      <p className="para">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default CardItem
