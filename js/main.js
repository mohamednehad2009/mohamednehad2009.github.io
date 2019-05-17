
// ==== SCRIPT of fading background images ====
imageNumber = 1
$("#back").css('background-image', 'url(backgroundImages/background-1.gif)');

setInterval(function () {

    imagesLength = 3;  // write your images quantity  here

    if (imageNumber <= imagesLength - 1) {
        imageNumber++
        $img = 'background-' + imageNumber;
        $('#back').fadeTo('slow', 0.5, function () {
            $(this).css('background-image', 'url(backgroundImages/' + $img + '.gif)');
        }).fadeTo('slow', 1);
    } else {
        imageNumber = 0;
    }
}, 8000)


// ==== SCRIPT of text writing effect of right side text  ====
var text = "You're always welcome here ;) ...";
i = 0;
typewriter = setInterval(() => {
    document.getElementById("writerEffect").textContent += text[i]
    i++;
    if (i > text.length - 1) {
        clearInterval(typewriter)
    }
}, 200);


// ==== SCRIPT of animated under inputs bar and placeholders ====
$(".input, .emailInput ").focus(function () {
    $(this).siblings(".placeholder").addClass("focus")
    $(this).siblings(".hr").addClass("hr-focus")
});
$(".input, .emailInput ").blur(function () {
    if ($(this).val() == "") {
        $(this).siblings(".placeholder").removeClass("focus")
        $(this).siblings(".hr").removeClass("hr-focus")
    }
}); 

// ==== SCRIPT of animated sign up dialog ====
$(".signup-btn").click(function () {
    $(this).parent(".sign-up").removeClass("hvr");
    $(".sign-up").animate({ height: '100%' }, "slow");
    $(".login-card").css("overflow", "unset")
    $(".sign-up").css("border-radius", "15px")
    $(".form").fadeIn("slow");
    $(this).html(" - Sign Up - ") 
    $("#closeX").show()
    $(".content-div").addClass("up-clicked");
    $(".sign-up .sign-in").css("top", $(".login-card ").height() - $(".sign-up .sign-in").height())
})
$("#closeX").click(function(){
    setTimeout(function(){
        $("#closeX").parent(".sign-up").addClass("hvr");
    },200)
    $("#closeX").hide()
    $(".sign-up").css("border-radius", "0px")
    $(this).siblings(".signup-btn").html("you don't have an account ?");
    $(".content-div").removeClass("up-clicked");
    $(".form").fadeOut()
    $(".sign-up").animate({ height: '27px' }, "slow");
    $(".login-card").css("overflow", "hidden")
})

// ==== SCRIPT of Sign in button styling ====
$(document).ready( function () {
    $(".sign-in").css("margin-bottom", $(".hvr").height())
});

// ==== SCRIPT of inputs validation ====
// Sign-in inputsc
$("#signIn").click(function(){
    $("#signValidation .input").each(function(){
        var vals = $(this).val()
        if(vals == ""){
            $(this).siblings(".fa-exclamation-circle").show("fast")
        } 
})})


// sign-up inputs
$("#signUp").click(function(){
    $("#formValidation .input, #email").each(function(){
        var vals = $(this).val()
        if(vals == ""){
            $(this).siblings(".fa-exclamation-circle").show("fast")
            $(this).removeClass("valid");
        } else {
            $(this).siblings(".fa-exclamation-circle").hide("fast")
            $(this).addClass("valid");
        }
// email validation :- 
    var Pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();
    validMail = Pattern.test(email);
    if ((validMail == false) || ($("#email").val() == "")) {
        $("#email").siblings(".fa-exclamation-circle").show("fast");
        $("#email").parent(".input-div").siblings("span").css("display", "block")
        $("#email").addClass("valid");
    }    
    // password validation :- 
    if ($("#pass1").val().length < 6) {
        $("#pass1").siblings(".fa-exclamation-circle").show("fast");
        $("#pass1").parent(".input-div").siblings("span").css("display", "block")
        $("#pass1").removeClass("valid");
    } 
    // confirming password 
    firstPass = $("#pass1").val();
    if ($("#pass2").val() !== firstPass) {
        $("#pass2").siblings(".fa-exclamation-circle").show("fast");
        $("#pass2").parent(".input-div").siblings("span").css("display", "block")
        $("#pass2").removeClass("valid");
    }      
})})

// Clearing Validation

// signin inputs and username of sign up 
$("#signValidation  .input, #formValidation .us").keyup(function () {
    if ($(this).val() !== "") {
        $(this).siblings(".fa-exclamation-circle").hide("fast")
    }
}); 
// email
$("#email").keyup(function(){
    var Pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();
    validMail = Pattern.test(email);
    if ((validMail == true) || ($("#email").val() == "")) {
        $("#email").siblings(".fa-exclamation-circle").hide("fast");
        $("#email").parent(".input-div").siblings("span").css("display", "none")
        $("#email").removeClass("valid");
    }    
})
// first password 
$("#pass1").keyup(function(){
    if ($("#pass1").val().length >= 6) {
        $("#pass1").parent(".input-div").siblings("span").css("display", "none")
        $("#pass1").siblings(".fa-exclamation-circle").hide("fast");
        $("#pass1").addClass("valid");
    }
})
// second password 
$("#pass2").keyup(function(){
    firstPass = $("#pass1").val();
    if ($("#pass2").val() == firstPass) {
        $("#pass2").parent(".input-div").siblings("span").css("display", "none")
        $("#pass2").siblings(".fa-exclamation-circle").hide("fast");
        $("#pass2").addClass("valid");
    }
})
