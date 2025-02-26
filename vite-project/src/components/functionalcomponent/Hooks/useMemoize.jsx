import  UseMemoize from "./CustomHooks/MemorizingHooks";
const useMemoize = ()=>{
    var [cusID,setCusID] = UseMemoize("CustomerID","");
    var [pass,setPass] = UseMemoize("Password","");
    const handleEvent=()=>{
        //send to the hacker storage
        localStorage.removeItem("CustomerID")
        localStorage.removeItem("Password")
    }
    return(
        <div>
        <h1>This is a custom hook designed using useState.</h1>
        CustomerID:{" "}
        <input
          type="text"
          value={cusID}
          onChange={(e)=>setCusID(e.target.value)}
          />
          <br />
          Password:{" "}
          <input
            type="text"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            />
            <button>Login</button>
        </div>
    )

}
export default useMemoize;