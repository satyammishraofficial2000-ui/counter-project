function Shooting({count}){
        let Color;
        if(count > 0) Color = "green";
        else if(count < 0) Color = "red";
        else Color = "black";
    return(
        <div> 
            <h1>
                 Count : <span style={{ color: Color }}>{count}</span>
             </h1>
        </div>
    );
}
export default Shooting;