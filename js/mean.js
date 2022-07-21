var bookmarkName = document.getElementById("bookmarkName")
var websiteURL = document.getElementById("websiteURL")
var containerA=[]


if (localStorage.getItem("localS") != null){
    containerA= JSON.parse( localStorage.getItem("localS"))
    displayS()
    
   
}
else{
    containerA = []
}

function submitValue () {
    var hey= {
        bookmarkName : bookmarkName.value,
        websiteURL : websiteURL.value
    }

    containerA.push(hey)
    localStorage.setItem("localS" , JSON.stringify(containerA))

    
    console.log(containerA)
    
    displayS ()

    evacuation()
    // towOne()
    

}

function displayS (){
    var cartona = ``
    for (var i=0 ; i<containerA.length; i++){


        cartona+=`
       
        <div class="container mt-4 pb-5 w-75  " style="background-color: #f1f1f1 ;">
        <div class="pt-5 row">
            <div class="col-md-5">
        <h3 style="display: inline-block; padding-right: 6em; " class="">${containerA[i].bookmarkName }   </h3> 
    </div>
    <div class="col-md-7">
            <div   class= " text-center hov btn btn-primary m-auto " style=" text-align: center;  text-shadow: none;  display:inline-block;  text-rendering: auto;  letter-spacing: normal; text-transform: none; line-height: normal;    word-spacing: normal;          background-color: rgb(17, 103, 196); color: white;     border-width: 1px; border-style: solid;     border-color: rgb(17, 103, 196);     border-image: initial; font-size: 15px; cursor: pointer;     max-width: fit-content;     padding:  10px 15px;          border-radius: 5px;     appearance: auto;     writing-mode: horizontal-tb !important;  " > <a class="an  text-decoration-none" href="${containerA[i].websiteURL}"> Vist </a> </div>
            <button  onclick=" deleteV(${i})" class=" text-center hove btn btn-danger m-auto " style=" text-align: center;  text-shadow: none;  display:inline-block;  text-rendering: auto;  letter-spacing: normal; text-transform: none; line-height: normal;    word-spacing: normal;          background-color: rgb(201, 16, 16); color: white;     border-width: 1px; border-style: solid;     border-color: rgb(196, 17, 17);     border-image: initial; font-size: 15px; cursor: pointer;     max-width: fit-content;     padding:  10px 15px;          border-radius: 5px;     appearance: auto;     writing-mode: horizontal-tb !important;  " > Delete</button>
    </div>
    </div>

    </div>
        
        `

    }

    // console.log(containerA[i].websiteURL)
    document.getElementById("hello").innerHTML=cartona
    localStorage.setItem("localS" , JSON.stringify(containerA))
    // console.log( containerA[i].websiteURL)


}

function deleteV(index){
    containerA.splice(index,1)
    displayS()
    localStorage.setItem("localS" , JSON.stringify(containerA))

}

function evacuation(){
 
    bookmarkName.value= ""
    websiteURL.value= ""
}

// function towOne(){
//     // if (containerA[i].bookmarkName== "" ){
//     //     alert(sorry)
//     // }
//         // document.getElementById("one").innerHTML = ` <div class="  text-center m-auto mt-1  " style=" color: rgba(255, 0, 0, 0.589); width: 80% ; padding: 6px; background-color: rgba(255, 0, 0, 0.226); border-radius:2px; border-color: rgb(102, 4, 4)!important; " >Name is required</div>`
//         // document.getElementById("two").innerHTML = `  <div class="  text-center m-auto mt-1  " style=" color: rgba(255, 0, 0, 0.589); width: 80% ; padding: 6px; background-color: rgba(255, 0, 0, 0.226); border-radius:2px; border-color: rgb(102, 4, 4)!important; " >Url Field is required</div>
//         hey.bookmarkName =/ [^""]  /
//     hey.websiteURL= / [^""] /
      

//     }




