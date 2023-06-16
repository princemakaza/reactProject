interface Props{
    title:string
}


const Header = ({title}: Props) => {
  return (
    <header>
        <h1 style={{color: "red"}}>{title}</h1>
    </header>
  )
}

export default Header