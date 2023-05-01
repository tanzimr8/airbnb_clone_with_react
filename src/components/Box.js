const Box = (props)=>{
    const styles = {
        backgroundColor: props.on ? 'red' : '#fff'
    }
    return <div onClick={props.toggle} style={styles} className='box'></div>
}

export default Box;