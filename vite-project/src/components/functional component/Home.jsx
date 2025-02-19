function Home(){
    var styling = {
        textAlign: "center",
        color:"black",
        backgroundColor: "yellow",
        margin: "0px"
    }
    return(
        <div id="home">
          <h1 style={styling}>Home Page</h1>{/*inline CSS*/}
        </div>
    )
}
export default Home;