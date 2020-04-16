$(function () {
    //==============Slider--Start=============

    $('.slider_full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: true,
        arrows: false,
    });

    //==============Venobox--Start=============

    $('.venobox').venobox({
        spinner: 'double-bounce',
    });
    //Banner text slider

    $('.text_banner_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: true,
        arrows: false,
    });

});

//=======================Form validation==========================

var full_names = document.getElementById('full_name');

var full_names_err = document.getElementById('full_name_err');

var emails = document.getElementById('email');

var email_errs = document.getElementById('email_err');

var subjects = document.getElementById('subject');

var subject_errs = document.getElementById('subject_err');

var email_rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function form_valid() {

    if (full_names.value == '') {

        full_names_err.innerHTML = "Please enter your full name!!";
        full_names_err.style = "color: red; text-align: center; margin: 0 auto; margin-bottom: 10px; margin-top: -10px; font-size: 14px; font-weight: 400; font-family: 'Hammersmith One', sans-serif; text-transform: uppercase;";
        full_names.style = "border: 1px solid red;";
        full_names.focus();



        return false;

    } else if (emails.value == '') {

        email_errs.innerHTML = "Please enter your valid email!!";
        email_errs.style = "color: red; text-align: center; margin: 0 auto; margin-bottom: 10px; margin-top: -10px; font-size: 14px; font-weight: 400; font-family: 'Hammersmith One', sans-serif; text-transform: uppercase;";
        emails.style = "border: 1px solid red;";
        emails.focus();

        return false;

    } else if (!email_rgx.test(emails.value)) {

        email_errs.innerHTML = "Your email is not valid!!";
        email_errs.style = "color: red; text-align: center; margin: 0 auto; margin-bottom: 10px; margin-top: -10px; font-size: 14px; font-weight: 400; font-family: 'Hammersmith One', sans-serif; text-transform: uppercase;";
        emails.style = "border: 1px solid red;";
        emails.focus();

        return false;

    } else if (subjects.value == '') {

        subject_errs.innerHTML = "Please enter your subject here!!";
        subject_errs.style = "color: red; text-align: center; margin: 0 auto; margin-bottom: 10px; margin-top: -10px; font-size: 14px; font-weight: 400; font-family: 'Hammersmith One', sans-serif; text-transform: uppercase;";
        subjects.style = "border: 1px solid red;";
        subjects.focus();

        return false;

    }
}




full_names.addEventListener('blur', function () {

    if (full_names.value != "") {

        full_names_err.innerHTML = "";
        full_names_err.style = "margin-bottom: inherit; margin-top: inherit;";
        full_names.style = "border: 1px solid inherit";

    }

});

emails.addEventListener('blur', function () {

    if (emails.value != '') {

        email_errs.innerHTML = "";
        email_errs.style = "margin-bottom: inherit; margin-top: inherit;";
        emails.style = "border: 1px solid inherit;";

    }
});

subjects.addEventListener('blur', function () {

    if (subjects != '') {

        subject_errs.innerHTML = "";
        subject_errs.style = "margin-bottom: inherit; margin-top: inherit;";
        subjects.style = "border: 1px solid inherit;";

    }
});


//Newslater Validation

var newslaters = document.getElementById('newslater');

var newslaters_email_rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var newslater_errs = document.getElementById('newslater_err');

function newslater_valid() {

    if (newslaters.value == '') {
        newslater_errs.innerHTML = "Enter email!!";
        newslater_errs.style = "color: red; text-align: left; font-size: 14px; font-weight: 400; font-family: 'Hammersmith One', sans-serif; text-transform: uppercase;";
        newslaters.style = "border: 1px solid red;";
        newslaters.focus();

        return false;

    }
    if (!newslaters_email_rgx.test(newslaters.value)) {

        newslater_errs.innerHTML = "Email not valid!!";
        newslater_errs.style = "color: red; text-align: left; font-size: 14px; font-weight: 400; font-family: 'Hammersmith One', sans-serif; text-transform: uppercase;";
        newslaters.style = "border: 1px solid red;";
        newslaters.focus();

        return false;

    }
}


newslaters.addEventListener('blur', function () {

    if (newslaters.value != '') {

        newslaters.innerHTML = "";
        newslaters.style = "border: 1px solid inherit;";

    }

});
