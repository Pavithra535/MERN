import Button from './Button';
import trackingMyButtonComp from './trackingMyButtonComp';
 const HoC = () =>{
    const ButtonTrack = trackingMyButtonComp(Button)
    return(
        <div>
            <h1>Welcome to Higher Order Component</h1>
            {/* <Button value={"Login"} /> */}
            <ButtonTrack value = {"Login"}></ButtonTrack>
        </div>
    )
 }
 export default HoC;