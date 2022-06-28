import '../styles/Banner.css';

function Banner({title}) {
  return (
    <div className="banner">
      <h1 className="banner-text">{title}</h1>
    </div>
  )
}

export default Banner