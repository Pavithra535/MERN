/*function promiseEg(value){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
        if(value)
          resolve("The promise is resolved");
        else
          reject("This promise is rejected due to some problem");
        },1000);
    })
}
promiseEg()
.then((res)=>{
    console.log(res);
})
.catch((res)=>{
    console.log(res);
})*/
/*function locationFinder(loc,time){
    var location = new Promise((locFound,locNotFound)=>{
      setTimeout(()=>{
        if(isLocationFound(loc,time)){
            locFound("America");
        }
        else{
            locNotFound(loc,"Not Found");
        }
      },time)
    });
location.then((found,notFound)=>{
    console.log(found);
})
.catch(()=>{
    console.log(notFound);
})
}
isLocationFound = (loc,time)=>{
    location = "America"
    t = 7000;
    if(loc === location && time<=t) {
        return true;
    }
    else{
        return false;
    }

}
locationFinder("America",5000);
*/
likeCode=()=>{
    return new Promise((likePost)=>{
        setTimeout(()=>{
          likePost("I liked your post")
        },5000);
    })
}
function postCode(){
    var post = new Promise((createPost)=>{
        setTimeout(()=>{
            createPost("Post created successfully")
        },5000);
    }).then((res)=>{
    console.log(res);
    })
   .catch((res)=>{
    console.log(res);
    })
} 
postCode();  
likeCode().then((res)=>{
 console.log(res);
})