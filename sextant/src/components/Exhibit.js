import '../styles/Exhibit.css';

function Exhibit({name, children}) {
  return (
    <div className="exhibit">
      <h2 className="exhibit-name">{name}</h2>
      <div className="exhibit-content">
        {children}
      </div>
    </div>
  )
}

export default Exhibit