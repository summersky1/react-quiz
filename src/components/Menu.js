const Menu = ({ categories }) => {
  return (
    <div>
      <h2 className="text-center">React Quiz</h2>
      <h5>Choose category...</h5>
      <select className="custom-select">
        {Object.entries(categories).map(([name, id]) => (
          <option key={id}>{name}</option>
        ))}
      </select>
    </div>
  )
}

export default Menu
