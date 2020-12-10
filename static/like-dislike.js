
var array = ["user1", "user2"];
var myLike = []
var minnieLike = ["req.body.username", "ib", "bob", "olaf"]
var mickeyLike = ["katja", "karla", "kaja"]
var match = []

var minnie = "minnie"
var mickey = "mickey"

//like button for Minnie
$('.likeBtnMinnie').click(function likeMinnie(){
    console.log("liked");
    myLike.push("minnie")
    console.log("i liked "+myLike)

//matchin algorithm
    if(myLike.includes('minnie') && minnieLike.includes("req.body.username")){
    match.push(minnie)
    alert('New match! you matched with ' + minnie)
    localStorage.setItem("match", minnie)
    location.reload()
    }

//removes the div when clicking the button
 $(".harduserMinnie").remove();   
    array.pop()
    if(array.length === 0){
    console.log("no users");
    $(".noUsers").show();
    }

})


//dislike button for Minni
$('.dislikeBtnMinnie').click(function dislike(){
    console.log("disliked");
    $(".harduserMinnie").remove();
    array.pop()
    if(array.length === 0){
    console.log("no users");
    $(".noUsers").show();

}
})

//like button for Mickey 
$('.likeBtnMickey').click(function like(){
    console.log("liked");
    myLike.push("mickey")
    console.log("i liked "+myLike)

    $(".harduserMickey").remove();
    array.pop()
    if(array.length === 0){
    $(".noUsers").show();
    }
    if(myLike.includes('mickey') && mickeyLike.includes('username')){
        match.push(mickey)
        alert('New match! you matched with' + mickey)
        $(".matches").html(mickey)
        }

})

//dislike button for mickey
$('.dislikeBtnMickey').click(function dislike(){

    console.log("disliked");
    $(".harduserMickey").remove();
    array.pop()
    if(array.length === 0){
    $(".noUsers").show();
}
})

//gemmer beskeden "no more users at the moment", vises først når begge hardcodede brugere er blevet liket eller disliket.
$('.noUsers').hide()

//viser match i frontend
var usermatches = $(".matches").html(localStorage.getItem("match"))

//slet match
usermatches.click(function(){
    localStorage.removeItem("match")
    location.reload()
})

//tilføjer loginstatus i local storage
$('.loginBtn').click(function(){
    localStorage.setItem("logged in", $(".email").val())
})

//sletter loginstatus fra local storage
$('.logoutBtn').click(function(){
    localStorage.removeItem("logged in")
})