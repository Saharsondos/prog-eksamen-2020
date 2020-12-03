
var array = ["user1", "user2"];
var myLike = []
var minnieLike = ["username", "ib", "bob", "olaf"]
var mickeyLike = ["katja", "karla", "kaja"]
var match = []
//var minniLike = [req.body.username]

var minnie = "minnie"
var mickey = "mickey"

//like button for Minnie
$('.likeBtnMinnie').click(function like(){
    console.log("liked");
    myLike.push("minnie")
    console.log("i liked "+myLike)

//removes the div when clicking the button
    $(".harduserMinnie").remove();
    array.pop()
    if(array.length === 0){
    console.log("no users");
    $(".noUsers").show();
    }

//matchin algorithm
    if(myLike.includes('minnie') && minnieLike.includes('username')){
    match.push(minnie)
    alert('New match!')
    }
})

//dislike button for Minnir
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

//gemmer beskeden "no more users at the moment", viser først besked senere.
$('.noUsers').hide()


// get error "$ is not defined" when running server. 
//module.exports.match = match;

