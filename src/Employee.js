const Employee = ({name,role,dept})=>{
    return (
        <div>
            <h2>{name}</h2>
            <h4>{role}</h4>
            <h6>{dept} Depatment</h6>
        </div>
    );
}
export default Employee;