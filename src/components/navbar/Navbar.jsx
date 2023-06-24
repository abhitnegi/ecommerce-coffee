import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ShopContext } from '../../shop-context'
import { auth, provider } from '../../firebase-config'
import { signInWithPopup, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

export default function Navbar() {

  const [ user ] = useAuthState(auth) 

  const navigate = useNavigate()

  const { view, setView, showLinks, setshowLinks } = useContext (ShopContext)

  const login = async (e) =>{
    e.preventDefault();
    await signInWithPopup (auth, provider);
    navigate("/")
    setView(true)
  }

  const logout = async () => {
    await signOut(auth);
    setView(false)
    window.location.reload(true)
    navigate("/order")
  }

  const search = () => {
    alert("Search bar ka code likhna hai abhi.....") 
  }
  
  return (
    <>
    <div className='navbar'>
      <div className="left"> 
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to='/' onClick={() => {setshowLinks(!showLinks)}}>Home</Link>
          <Link to='/about' onClick={() => {setshowLinks(!showLinks)}}>About</Link>
          <Link to='/order' onClick={() => {setshowLinks(!showLinks)}}>Order</Link>  
        </div>
        <button className='button' onClick={() => {setshowLinks(!showLinks)}}><DensitySmallIcon /></button>
      </div>
      <div className="searchbar">
        <input type="text" placeholder='Search....'/>
        <button className='search' onClick={search}>Search</button>
      </div>
      <div className="right">
        {view && <Link to='/cart'>Cart</Link>}
        {!view ? <><button onClick={(e) => {login(e)}}>Log in</button></> : <div className='drop'>
        <button className='user'>{user?.displayName}</button>
        <div className="dropdown">
          <button onClick={logout}>Log Out</button>
        </div>
        </div>}
      </div>    
    </div> 
    </>
  )
}