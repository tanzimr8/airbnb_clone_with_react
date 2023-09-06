import MenuItems from './MenuItems';
import './menu.scss';
const menuItems = [
    {
        id:1,
        name: "Home",
        link: '#intro'
    },
    {
        id:2,
        name: "Portfolio",
        link: '#portfolio'
    },
    {
        id:3,
        name: "Works",
        link: '#works'
    },
    {
        id:4,
        name: "Testimonials",
        link: '#testimonials'
    },
    {
        id:5,
        name: "Contact",
        link: '#contact'
    },
];
function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={`menu ${menuOpen && 'active'}`}>
       <ul> 
        {menuItems.map((item)=>{
            return <MenuItems setMenuOpen={setMenuOpen} key={item.id} name={item.name} link={item.link}/>
        })}
      </ul>
    </div>
  )
}

export default Menu
