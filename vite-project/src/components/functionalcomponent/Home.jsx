 function Home(properties){
    var styling = {
        textAlign: "center",
        color:"black",
        backgroundColor: "yellow",
        margin: "0px"
    }
    return(
        <div id="home">
          <h1 style={styling}>Home Page</h1>{/*inline CSS*/}
          <h3>Below below is the usage of properties</h3>
          <h3>Props:{properties.properties} {properties.hi}</h3>
        </div>
    )
}
export default Home;