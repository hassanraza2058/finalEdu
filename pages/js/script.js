// // --------------------------Index Navbar JS code-----------------
// // ------THE BELOW CODE WILL WORK BUT IT ONLY CLOSE WHEN I WILL CLICK ON CROSS BTN , AND WHEN YOU WILL SCROLL IT WILL NOT LOOK GOOD-----------------

// // let hamburger = document.querySelector('#hamburger');
// // let crossbutton = document.getElementById('close-btn');
// // let head = document.getElementById('head');

// // if(hamburger){
// //     hamburger.addEventListener('click', function(){
// //         document.querySelector('.nav-right').classList.toggle('active');
// //     });

// // }

// // if(crossbutton){
// //     crossbutton.addEventListener('click', function(){
// //                 document.querySelector('.nav-right').classList.remove('active');

// //     });
// // }



// // -------------THE BELOW LINE WILL NOT LET TO OPPEN THE NAVBAR WHEN YOU WILL CLICK ON HAMBUGER ICON BECOUSE EVERTYHING COMES UNDER HEAD----------

// // if(head){
// //      head.addEventListener('click', function(){
// //                 document.querySelector('.nav-right').classList.remove('active');

// //     });
// // }



// // -----------------------THE BELOW CODE WILL WORK FINE ----------------


// // TO OPEN WITH HAMBURGER

// let hamburger = document.querySelector('#hamburger');
// if(hamburger){
//     hamburger.addEventListener('click', function(){
//         document.querySelector('.nav-right').classList.toggle('active');
//     });

// }

// // TO CLOSE WHEREVER CLICK OR SCROLL

// document.addEventListener('click', function(event) {
//     const navRight = document.querySelector('.nav-right');
//     const hamburger = document.querySelector('#hamburger');
//     const crossbutton = document.getElementById('close-btn');
//     if (
//         navRight &&
//         navRight.classList.contains('active') &&
//         !navRight.contains(event.target) &&
//         event.target !== hamburger &&
//         event.target !== crossbutton
//     ) {
//         navRight.classList.remove('active');
//     }
// });




// --------------------------Index Navbar JS code-------------------------

let hamburger = document.querySelector('#hamburger');
if (hamburger) {
    hamburger.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents document click from firing
        document.querySelector('.nav-right').classList.toggle('active');
    });
}

// TO CLOSE WITH CROSS BUTTON
let crossbutton = document.getElementById('close-btn');
if (crossbutton) {
    crossbutton.addEventListener('click', function (event) {
        event.stopPropagation();
        document.querySelector('.nav-right').classList.remove('active');
    });
}

// TO CLOSE WHENEVER CLICK OUTSIDE NAV OR BUTTONS

document.addEventListener('click', function (event) {
    const navRight = document.querySelector('.nav-right');
    const hamburger = document.querySelector('#hamburger');
    const crossbutton = document.getElementById('close-btn');
    if (
        navRight &&
        navRight.classList.contains('active') &&
        !navRight.contains(event.target) &&
        event.target !== hamburger &&
        event.target !== crossbutton
    ) {
        navRight.classList.remove('active');
    }
});

// TO CLOSE WHENEVER SCROLL
window.addEventListener('scroll', function () {
    const navRight = document.querySelector('.nav-right');
    if (navRight && navRight.classList.contains('active')) {
        navRight.classList.remove('active');
    }
});


// Prevent clicks on nav links from bubbling up to document
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the body click listener from closing nav
    });
});





// TO CLOSE NAV WHEN ENQUIRY BUTTON CLICKED-----but added in the equiry form--this line  document.querySelector('.nav-right')?.classList.remove('active');
// BECAUSE two enquirybutton were present and js don't work if there is two same variable
// let enquirybutton = document.getElementById('enquiry-btn');
// if (enquirybutton) {
//     enquirybutton.addEventListener('click', function () {
//         document.querySelector('.nav-right')?.classList.remove('active');
//         document.querySelector('.overlay')?.classList.add('showOverlay');
//         document.querySelector('.form-container')?.classList.add('showEnquiryForm');
//     });
// }







// ---------------------- Enquiry Form --------------------------------------------------------



// Place this script at the end of your HTML file or in your JS file

// let fetchPath = window.location.pathname.endsWith('index.html') || window.location.pathname === '/'
//     ? 'pages/enquiry-form.html'
//     : 'enquiry-form.html';

// fetch(fetchPath)
//     .then(response => response.text())
//     .then(html => {
//         document.getElementById('enquiry-form-placeholder').innerHTML = html;

//         let enquirybutton = document.getElementById('enquiry-btn');
//         if (enquirybutton) {
//             enquirybutton.addEventListener('click', function () {
//                 document.querySelector('.nav-right')?.classList.remove('active');
//                 document.querySelector('.overlay')?.classList.add('showOverlay');
//                 document.querySelector('.form-container')?.classList.add('showEnquiryForm');
//             });
//         }

//         let Enquiryclosebutton = document.getElementById('Enquiry-close-btn');
//         if (Enquiryclosebutton) {
//             Enquiryclosebutton.addEventListener('click', function () {
//                 document.querySelector('.overlay')?.classList.remove('showOverlay');
//                 document.querySelector('.form-container')?.classList.remove('showEnquiryForm');
//             });
//         }
//         const Support_btn = document.getElementById('support');
//         if (Support_btn) {
//             Support_btn.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 document.querySelector('.overlay')?.classList.add('showOverlay');
//                 document.querySelector('.form-container')?.classList.add('showEnquiryForm');
//             });
//         }
//     });

let fetchPath = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')
    ? 'pages/enquiry-form.html'
    : 'enquiry-form.html';

fetch(fetchPath)
    .then(response => response.text())
    .then(html => {
        document.getElementById('enquiry-form-placeholder').innerHTML = html;

        let enquirybutton = document.getElementById('enquiry-btn');
        if (enquirybutton) {
            enquirybutton.addEventListener('click', function () {
                document.querySelector('.nav-right')?.classList.remove('active');
                document.querySelector('.overlay')?.classList.add('showOverlay');
                document.querySelector('.form-container')?.classList.add('showEnquiryForm');
            });
        }

        let Enquiryclosebutton = document.getElementById('Enquiry-close-btn');
        if (Enquiryclosebutton) {
            Enquiryclosebutton.addEventListener('click', function () {
                document.querySelector('.overlay')?.classList.remove('showOverlay');
                document.querySelector('.form-container')?.classList.remove('showEnquiryForm');
            });
        }

        const Support_btn = document.getElementById('support');
        if (Support_btn) {
            Support_btn.addEventListener('click', function (event) {
                event.preventDefault();
                document.querySelector('.overlay')?.classList.add('showOverlay');
                document.querySelector('.form-container')?.classList.add('showEnquiryForm');
            });
        }
    });






// ---------------------- Login Close to hide ----------------------

// let logincrossbutton = document.getElementById('login-cross-btn');
// if (logincrossbutton) {
//     logincrossbutton.addEventListener('click', function () {
//         document.querySelector('.login-container')?.classList.add('hide-login-container');
//         console.log("login cross found?", logincrossbutton);
//     });
// }

// ---------------------- Sign Up Close to hide----------------------

// let signupcrossbutton = document.getElementById('signup-cross-btn');
// if (signupcrossbutton) {
//     signupcrossbutton.addEventListener('click', function () {
//         document.querySelector('.signUp-container')?.classList.add('hide-signUp-container');
//         console.log("signup cross found?", signupcrossbutton);
//     });
// }


let logincrossbutton = document.getElementById('login-cross-btn');
if (logincrossbutton) {

    logincrossbutton.addEventListener('click', function () {
        window.history.back(); // takes the user to the previous page
    });

    // logincrossbutton.addEventListener('click', function () {
    //window.location.href = "../index.html"; // takes the user to the specific page here index.html 
    // });

}

let signupcrossbutton = document.getElementById('signup-cross-btn');
if (signupcrossbutton) {
    signupcrossbutton.addEventListener('click', function () {
        window.history.back();
    });
}


//index---------Explore Programs - Start Your Journey btn--------------------

let exploreBUTTON = document.getElementById('explore-btn');
if (exploreBUTTON) {
    exploreBUTTON.addEventListener('click', function () {
        window.location.href = "pages/course.html";
    });
}




//----------------------------- Expand button Working -----------------------------------------------------------

// -------using forEach loop-------
const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach(button => {
    button.addEventListener('click', function () {
        const courseFlow = button.closest('.each-course-flow');

        const chevron = courseFlow.querySelector('.chevron');
        chevron.classList.toggle('chevron-rotate');

        const hiddenFlow = courseFlow.querySelector('.hidden-course-flow');
        hiddenFlow.classList.toggle('show-hidden-course-flow');
    });
});

//  -------using for loop-------

// const expandButtons = document.querySelectorAll('.expand-btn');

// for (let i = 0; i < expandButtons.length; i++) {
//   expandButtons[i].addEventListener('click', function () {
//     const courseFlow = expandButtons[i].closest('.each-course-flow');

//     const chevron = courseFlow.querySelector('.chevron');
//     chevron.classList.toggle('chevron-rotate');

//     const hiddenFlow = courseFlow.querySelector('.hidden-course-flow');
//     hiddenFlow.classList.toggle('show-hidden-course-flow');
//   });
// }


//  -------using for of loop-------

// const expandButtons = document.querySelectorAll('.expand-btn');

// for (let button of expandButtons) {
//   button.addEventListener('click', function () {
//     const courseFlow = button.closest('.each-course-flow');

//     const chevron = courseFlow.querySelector('.chevron');
//     chevron.classList.toggle('chevron-rotate');

//     const hiddenFlow = courseFlow.querySelector('.hidden-course-flow');
//     hiddenFlow.classList.toggle('show-hidden-course-flow');
//   });
// }




// -----------------------------------SUPPORT BUTTON IN FOOTER---------------------------------------

const Support_btn = document.getElementById('support');
if (Support_btn) {

    Support_btn.addEventListener('click', function () {
        document.querySelector('.form-container')?.classList.add('showEnquiryForm');
    });

}


// ----------------------------------SCROLL BUTTON----------------------------------------------

//  const leftBtn = document.querySelector(".left-btn");
//   const rightBtn = document.querySelector(".right-btn");
//   const container = document.querySelector(".cards-container");

//   rightBtn.addEventListener("click", () => {
//     container.scrollBy({ left: 300, behavior: "smooth" });
//   });

//   leftBtn.addEventListener("click", () => {
//     container.scrollBy({ left: -300, behavior: "smooth" });
//   });