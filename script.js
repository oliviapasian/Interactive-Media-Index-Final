
let hs = $('.horizontal-stripes');

// Arrays to define the color palettes
let cp1 = ['#CDA997', '#BDA18F', '#C9AC99', '#C8B5A3'];
let cp2 = ['#E0CCBF', '#D6C0B4', '#DDC5BB', '#E3C7B6'];
let cp3 = ['#F7EFEA', '#F0E5DD', '#E8DDD5', '#F5E7DB'];
let cp4 = ['#9C8372', '#A68C79', '#8A7465', '#947D6C'];

//generating a random color from the predefined color palette
let randColor1 = Math.floor(Math.random() * cp1.length);
let randColor2 = Math.floor(Math.random() * cp2.length);
let randColor3 = Math.floor(Math.random() * cp3.length);
let randColor4 = Math.floor(Math.random() * cp4.length);

//variables to select div elements
let stripes1 = $('.mainassignment');
let stripes2 = $('.exercise');
let stripes3 = $('.reading');
let stripes4 = $('.resources');

//update background colour of stripes
stripes1.css('background-color', cp1[randColor1]);
stripes2.css('background-color', cp2[randColor2]);
stripes3.css('background-color', cp3[randColor3]);
stripes4.css('background-color', cp4[randColor4]);

//When cursor is over stripe is changes colour
stripes1.mouseenter(function () {
    let randColor1 = Math.floor(Math.random() * cp1.length);
    $(this).css('background-color', cp1[randColor1])
});
stripes2.mouseenter(function () {
    let randColor2 = Math.floor(Math.random() * cp2.length);
    $(this).css('background-color', cp2[randColor2])
});
stripes3.mouseenter(function () {
    let randColor3 = Math.floor(Math.random() * cp3.length);
    $(this).css('background-color', cp3[randColor3])
});
stripes4.mouseenter(function () {
    let randColor4 = Math.floor(Math.random() * cp4.length);
    $(this).css('background-color', cp4[randColor4])
});

// Variables to store original stripe height
let stripesHeight1 = stripes1.height();
let stripesHeight2 = stripes2.height();
let stripesHeight3 = stripes3.height();
let stripesHeight4 = stripes4.height();

// Click function to change the height of stripe
stripes1.click(function () {
    // Change height of stripe to 600px if less or equal to original height
    if ($(this).height() <= stripesHeight1) {
        $(this).css('height', 700);
    } else { // If stripe height is 600px then change back to original height
        $(this).css('height', stripesHeight1);
    }
});
stripes2.click(function () {
    // Change height of stripe to 600px if less or equal to original height
    if ($(this).height() <= stripesHeight2) {
        $(this).css('height', 700);
    } else { // If stripe height is 600px then change back to original height
        $(this).css('height', stripesHeight2);
    }
});
stripes3.click(function () {
    // Change height of stripe to 600px if less or equal to original height
    if ($(this).height() <= stripesHeight3) {
        $(this).css('height', 700);
    } else { // If stripe height is 600px then change back to original height
        $(this).css('height', stripesHeight3);
    }
});
stripes4.click(function () {
    // Change height of stripe to 600px if less or equal to original height
    if ($(this).height() <= stripesHeight4) {
        $(this).css('height', 700);
    } else { // If stripe height is 600px then change back to original height
        $(this).css('height', stripesHeight4);
    }
});

//Show/hide

$(document).ready(function () {
    $(".clickarea1").click(function () {
        $(".hidecontent1").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea2").click(function () {
        $(".hidecontent2").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea3").click(function () {
        $(".hidecontent3").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea4").click(function () {
        $(".hidecontent4").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea5").click(function () {
        $(".hidecontent5").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea6").click(function () {
        $(".hidecontent6").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea7").click(function () {
        $(".hidecontent7").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea8").click(function () {
        $(".hidecontent8").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea9").click(function () {
        $(".hidecontent9").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea10").click(function () {
        $(".hidecontent10").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea11").click(function () {
        $(".hidecontent11").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea12").click(function () {
        $(".hidecontent12").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea13").click(function () {
        $(".hidecontent13").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea14").click(function () {
        $(".hidecontent14").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea15").click(function () {
        $(".hidecontent15").toggle()
    });
});
$(document).ready(function () {
    $(".clickarea16").click(function () {
        $(".hidecontent16").toggle()
    });
});