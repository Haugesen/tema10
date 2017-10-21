    // ANIMATE THE MENU ICON
    var menuButton = document.querySelector('#burger-icon');
    menuButton.addEventListener('mousedown', activeBurger);

    function activeBurger(event) {

        var burgerTop = document.querySelector('.burger-top');
        burgerTop.classList.toggle('active');

        var burgerMid = document.querySelector('.burger-mid');
        burgerMid.classList.toggle('active');

        var burgerBot = document.querySelector('.burger-bot');
        burgerBot.classList.toggle('active');
    }

    // OPEN THE MENU & MOVE PAGE CONTENT
    var menuButton = document.querySelector('#burger-icon');
    menuButton.addEventListener('mousedown', activeMenu);

    function activeMenu(event) {
        
        menuButton.classList.toggle('active');

        var fullMenu = document.querySelector('#menu');
        fullMenu.classList.toggle('active');

        var mainContainer = document.querySelector('.main-content');
        mainContainer.classList.toggle('move');
    }

    // GET MENU TO WORK

    // HOME
        var homeButton = document.querySelector('.menu-logo');
        homeButton.addEventListener('mousedown', closeAll);

    // HLR SCREEN
        var hlrButton = document.querySelector('#hlr-btn');
        var hlrScreen = document.querySelector('.hlr-screen');
        hlrButton.addEventListener('mousedown', openHlr);

    // FREMMEDLEGEME SCREEN
        var fremmedlegemeButton = document.querySelector('#fremmedlegeme-btn');
        var fremmedlegemeScreen = document.querySelector('.fremmedlegeme-screen');
        fremmedlegemeButton.addEventListener('mousedown', openFremmedlegeme);

    // SLAG SCREEN
        var slagButton = document.querySelector('#slag-btn');
        var slagScreen = document.querySelector('.slag-screen');
        slagButton.addEventListener('mousedown', openSlag);

    // BLØDNINGER SCREEN
        var blodningerButton = document.querySelector('#blodninger-btn');
        var blodningerScreen = document.querySelector('.blodninger-screen');
        blodningerButton.addEventListener('mousedown', openBlodninger);

    // BENBRUDD SCREEN
        var benbruddButton = document.querySelector('#benbrudd-btn');
        var benbruddScreen = document.querySelector('.benbrudd-screen');
        benbruddButton.addEventListener('mousedown', openBenbrudd);

    // QUIZ SCREEN
        var quizButton = document.querySelector('#quiz-btn');
        var quizScreen = document.querySelector('.quiz-screen');
        quizButton.addEventListener('mousedown', openQuiz);


    // REMOVE ACTIVE SCREENS
    function removeActive(){
        hlrScreen.classList.remove('active');
        slagScreen.classList.remove('active');
        fremmedlegemeScreen.classList.remove('active');
        blodningerScreen.classList.remove('active');
        benbruddScreen.classList.remove('active');
        quizScreen.classList.remove('active');
    }

    function closeAll(){
        activeMenu();
        activeBurger();
        removeActive();
    }

    // REMOVE LIST ITEMS ACTIVE STATE
    function removeList(){
        
    }

    function openHlr(event){
        activeMenu();
        activeBurger();
        removeActive();
        hlrScreen.classList.add('active');
    }

    function openFremmedlegeme(event){        
        activeMenu();
        activeBurger();
        removeActive();
        fremmedlegemeScreen.classList.add('active');
    }

    function openSlag(event){
        activeMenu();
        activeBurger();
        removeActive();
        slagScreen.classList.add('active');
    }

    function openBlodninger(event){        
        activeMenu();
        activeBurger();
        removeActive();
        blodningerScreen.classList.add('active');
    }

    function openBenbrudd(event){        
        activeMenu();
        activeBurger();
        removeActive();
        benbruddScreen.classList.add('active');
    }

    function openQuiz(event){
        activeMenu();
        activeBurger();
        removeActive();
        quizScreen.classList.add('active');
    }


    // GET ACCORDION PANELS TO WORK
    var acc = document.getElementsByClassName('accordion');
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      }
    }

    // GET QUIZ TO DISPLAY
        var startquizButton = document.querySelector('#start-quiz');
        var showQuiz = document.querySelector('.quiz-content');
        var quizInfo = document.querySelector('.quiz-info');
        startquizButton.addEventListener('mousedown', startQuiz);
    
    function startQuiz(event){
        showQuiz.classList.add('active');
        quizInfo.classList.add('hide');
    }

        var resetButton = document.querySelector('#restart');
        resetButton.addEventListener('mousedown', resetQuiz);

    function resetQuiz(){
        window.location.reload();
    }

        var introQuizbtn = document.querySelector('#intro-quiz');
        introQuizbtn.addEventListener('mousedown', openQuizintro);

        function openQuizintro(event){
            quizScreen.classList.add('active');
        }