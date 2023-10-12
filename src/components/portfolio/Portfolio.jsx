import { useState } from 'react';
import './portfolio.scss';
import PortfolioList from './PortfolioList';
import PortfolioItems from './PortfolioItems';
import data from './../../data'
function Portfolio() {
  const lists = [
    {
      id:'featured',
      title: 'Featured'
    },
    {
      id:'web app',
      title: 'Web App'
    },
    {
      id:'website',
      title: 'Website'
    },
    {
      id:'ecommerce',
      title: 'Ecommerce'
    },
  ];
  const [selected,setSelected] = useState('featured');
  let filteredData = data.filter((dataItem)=>{
    return dataItem.category === selected;
  });
  let featuredData = data.filter((dataItem)=>{
    return dataItem.isFetured === true;
  });
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
       {lists.map((item)=>{
        return <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected}/>
       })}
      </ul>
      <div className="container">
        { selected === 'featured' ?  featuredData.map((dataItem)=>{
    return <PortfolioItems title={dataItem.title}/>
  }) : filteredData.map((dataItem)=>{
    return <PortfolioItems title={dataItem.title}/>
  })  }
      </div>
    </div>
  )
}

export default Portfolio
