import Image from './../../images/tanzim.webp';
const Info = ()=>{
    return(
        <div>
            <img src={Image} alt="Tanzim" className='img-info' />
            <h2 className="info-card-title">Tanzim Rahman</h2>
            <h3 className="info-card-sub-title">Frontend developer</h3>
            <p><a href="">tanzim-rahman.com</a></p>
        </div>
    );
}
export default Info;