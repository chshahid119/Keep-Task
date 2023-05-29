import React from 'react'

const Footer = () => {
    let year=new Date().getFullYear();
    console.log(year)
  return (
    <div>
      <footer>
        <p>Copyright &copy; {year}</p>
      </footer>
    </div>
  )
}

export default Footer
