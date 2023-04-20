import Card from './TravelCard'
import data from './../travel_data'
const Travel = ()=>{
    const travel_data = data.map((item)=>{
        return <Card key={item.id} {...item} />
    })
    return(
        <div className="travel_container">
            <header className="travel_header">
                <h2>My Travel Journal</h2>
            </header>
            <main className="travel_wrapper">
                {travel_data}
            </main>
        </div>
    )
}
export default Travel;