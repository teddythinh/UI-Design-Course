import './NavBar.css'
import Button from '@mui/material/Button'

const NavBar: React.FC = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <h1 className="logo">My Train</h1>
            <div className="navItems">
                {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button className='navButton'>Login</Button>
                <Button className='navButton'>Register</Button>
                </ButtonGroup> */}
                
                <Button variant='contained' color='success' className='navButton'>Login</Button>
                <Button variant='contained' color='secondary' className='navButton'>Register</Button>
            </div>
        </div>
    </div>
  )
}

export default NavBar