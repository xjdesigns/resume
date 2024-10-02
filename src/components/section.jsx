export const Section = ({ title = '', children }) => {
  return (
    <div className="mb-2">
      <h3>{title}</h3>
      <div className="res-section-body">
        {children}
      </div>
    </div>
  )
}

export default Section
