
// ==== jQuery ====

$(function () {

// ==== ==== Header: on-scroll class ==== ====
    
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 80) {
            $(".navbar").addClass("ext_hd");
            $(".navbar .container").addClass("cont_pd");
            $(".navbar-nav .nav-link").css("margin-left", "45px");
        } 
        else {
            $(".navbar").removeClass("ext_hd");
            $(".navbar .container").removeClass("cont_pd");
            $(".navbar-nav .nav-link").css("margin-left", "");
        }
    });

// ==== ==== Header: Media btn ==== ====

    $('#menu_btn').click(function(){
        $(".navbar").toggleClass("med_btn_clk");
    });

// ==== ==== Banner: ban_slider ==== ====

    $('.ban_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
        
    });

// ==== ==== Programme: prog_slider ==== ====

    $('.prog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
        
    });

// ==== ==== Our_Events: venobox ==== ====

    $('.venobox').venobox();

// ==== ==== Our_Events: event_slider ==== ====

    $('.event_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '30px',
                    focusOnSelect: true,
                }
            }
        ]
        
    });

// ==== ==== Our_Events: Cancel Autoplay ==== ====

    $('.mix_config button').click(function(){
        $('.event_slider').slick('unslick');
    });

// ==== ==== Our_Teams: team_slider ==== ====

    $('.team_slider').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    focusOnSelect: true,
                }
            }
        ]
        
    });

// ==== ==== Gallery: gal_top_slider ==== ====

    $('.gal_top_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        rtl:true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
        
    });

// ==== ==== Gallery: gal_btm_slider ==== ====

    $('.gal_btm_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
        
    });

});

// ==== javascript ====

// ==== ==== Our_Events: mix_config ==== ====

var config = document.querySelector('.mix_config')
var mixer = mixitup(config);

// ==== ==== Form: validation ==== ====

var fname = document.getElementById('fname');
var fname_ersign = document.getElementById('fname_ersign');
var fname_ermsg = document.getElementById('fname_ermsg');
var fname_regex = (/^[A-Za-z]+$/);

var lname = document.getElementById('lname');
var lname_ersign = document.getElementById('lname_ersign');
var lname_ermsg = document.getElementById('lname_ermsg');
var lname_regex = (/^[A-Za-z]+$/);

var email = document.getElementById('email');
var email_ersign = document.getElementById('email_ersign');
var email_ermsg = document.getElementById('email_ermsg');
var email_regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

var pnum = document.getElementById('pnum');
var pnum_ersign = document.getElementById('pnum_ersign');
var pnum_ermsg = document.getElementById('pnum_ermsg');

var inst = document.getElementById('inst');
var inst_ersign = document.getElementById('inst_ersign');
var inst_ermsg = document.getElementById('inst_ermsg');

var sty = document.getElementById('sty');
var sty_ersign = document.getElementById('sty_ersign');
var sty_ermsg = document.getElementById('sty_ermsg');

var msub = document.getElementById('msub');
var msub_ersign = document.getElementById('msub_ersign');
var msub_ermsg = document.getElementById('msub_ermsg');

var inpro = document.getElementById('inpro');
var inpro_ersign = document.getElementById('inpro_ersign');
var inpro_ermsg = document.getElementById('inpro_ermsg');

var desc = document.getElementById('desc');
var desc_ersign = document.getElementById('desc_ersign');
var desc_ermsg = document.getElementById('desc_ermsg');

var ckbox = document.getElementById('ckbox');
var ckbox_ersign = document.getElementById('ckbox_ersign');
var ckbox_ermsg = document.getElementById('ckbox_ermsg');
var ckbox_txt = document.getElementById('ckbox_txt');

function form_sub(){

    if(fname.value == '' || !fname_regex.test(fname.value) || fname.value.length < 3){
        fname_ermsg.style.display = 'block';
        fname_ersign.style.display = 'block';
        fname.style.border = '1px solid #df1d1d';
        fname.focus();
        return false;
    }

    else if(lname.value == '' || !lname_regex.test(lname.value) || lname.value.length < 3){
        lname_ermsg.style.display = 'block';
        lname_ersign.style.display = 'block';
        lname.style.border = '1px solid #df1d1d';
        lname.focus();
        return false;
    }

    else if(email.value == '' || !email_regex.test(email.value)){
        email_ermsg.style.display = 'block';
        email_ersign.style.display = 'block';
        email.style.border = '1px solid #df1d1d';
        email.focus();
        return false;
    }

    else if(pnum.value == '' || pnum.value.length < 9 || pnum.value.length > 9){
        pnum_ermsg.style.display = 'block';
        pnum_ersign.style.display = 'block';
        pnum.style.border = '1px solid #df1d1d';
        pnum.focus();
        return false;
    }

    else if(inst.value == '' || inst.value.length < 4){
        inst_ermsg.style.display = 'block';
        inst_ersign.style.display = 'block';
        inst.style.border = '1px solid #df1d1d';
        inst.focus();
        return false;
    }

    else if(sty.value == '' || sty.value.length < 4){
        sty_ermsg.style.display = 'block';
        sty_ersign.style.display = 'block';
        sty.style.border = '1px solid #df1d1d';
        sty.focus();
        return false;
    }

    else if(msub.value == '' || msub.value.length < 4){
        msub_ermsg.style.display = 'block';
        msub_ersign.style.display = 'block';
        msub.style.border = '1px solid #df1d1d';
        msub.focus();
        return false;
    }

    else if(inpro.value == '' || inpro.value.length < 4){
        inpro_ermsg.style.display = 'block';
        inpro_ersign.style.display = 'block';
        inpro.style.border = '1px solid #df1d1d';
        inpro.focus();
        return false;
    }

    else if(desc.value.split(" ").length-1 < 10 || desc.value.split(" ").length-1 > 20){
        desc_ermsg.style.display = 'block';
        desc_ersign.style.display = 'block';
        desc.style.border = '1px solid #df1d1d';
        desc.focus();
        return false;
    }

    else if(ckbox.checked != true){
        ckbox_ermsg.style.display = 'block';
        ckbox_ersign.style.display = 'block';
        ckbox_txt.style.color = '#df1d1d';
        ckbox_txt.style.fontWeight = '500';
        ckbox.focus();
        return false;
    }

}

function err_valid(){

    if(fname.value != ''){
        fname_ermsg.style.display = 'none';
        fname_ersign.style.display = 'none';
        fname.style.border = '1px solid #dddddd';
    }

    if(lname.value != ''){
        lname_ermsg.style.display = 'none';
        lname_ersign.style.display = 'none';
        lname.style.border = '1px solid #dddddd';
    }

    if(email.value != ''){
        email_ermsg.style.display = 'none';
        email_ersign.style.display = 'none';
        email.style.border = '1px solid #dddddd';
    }

    if(pnum.value != ''){
        pnum_ermsg.style.display = 'none';
        pnum_ersign.style.display = 'none';
        pnum.style.border = '1px solid #dddddd';
    }

    if(inst.value != ''){
        inst_ermsg.style.display = 'none';
        inst_ersign.style.display = 'none';
        inst.style.border = '1px solid #dddddd';
    }

    if(sty.value != ''){
        sty_ermsg.style.display = 'none';
        sty_ersign.style.display = 'none';
        sty.style.border = '1px solid #dddddd';
    }

    if(msub.value != ''){
        msub_ermsg.style.display = 'none';
        msub_ersign.style.display = 'none';
        msub.style.border = '1px solid #dddddd';
    }

    if(inpro.value != ''){
        inpro_ermsg.style.display = 'none';
        inpro_ersign.style.display = 'none';
        inpro.style.border = '1px solid #dddddd';
    }
    
    if(desc.value.split(" ").length-1 > 9 && desc.value.split(" ").length-1 < 21){
        desc_ermsg.style.display = 'none';
        desc_ersign.style.display = 'none';
        desc.style.border = '1px solid #dddddd';
    }

    if(ckbox.checked != false){
        ckbox_ermsg.style.display = 'none';
        ckbox_ersign.style.display = 'none';
        ckbox_txt.style.color = '#081c32';
        ckbox_txt.style.fontWeight = '400';
    }

}

fname.addEventListener('blur', err_valid);
lname.addEventListener('blur', err_valid);
email.addEventListener('blur', err_valid);
pnum.addEventListener('blur', err_valid);
inst.addEventListener('blur', err_valid);
sty.addEventListener('blur', err_valid);
msub.addEventListener('blur', err_valid);
inpro.addEventListener('blur', err_valid);
desc.addEventListener('blur', err_valid);
ckbox.addEventListener('blur', err_valid);


