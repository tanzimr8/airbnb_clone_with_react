import './works.scss';

function Works() {
  return (
    <div className='works' id='works'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="https://picsum.photos/200" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quaerat quia architecto assumenda? Molestiae, minima quis, natus aspernatur magnam laboriosam quasi, ipsam debitis recusandae totam sint mollitia nemo reprehenderit voluptate!</p><span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://picsum.photos/300" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
