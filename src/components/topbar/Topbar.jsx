import './topbar.scss';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={`topbar ${menuOpen && 'active'}`} id='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#contact" className='logo'>tanzimR</a>
          <div className="intemContainer">
            <PersonIcon className='icon'/>
            <span>01737102299</span>
          </div>
          <div className="intemContainer">
            <EmailIcon className='icon'/>
            <span>tanzim008@gmail.com</span>
          </div>
        </div>
        <div className="right">
          {/* <p>Somthing in right</p> */}
          <div className="hamburger" onClick = {()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
