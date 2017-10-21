// CREATE QUESTIONS
const questions = [
{
	"question": "Hvilket nummer ringer du dersom det er behov for akutt medisinsk hjelp?",
	"option1": "22 22 55 55",
	"option2": "112",
	"option3": "113",
	"answer": "3"
}, 
{
	"question": "Må en person være bevisstløs for at man kan utføre hjerte-lunge-redning?",
	"option1": "Neida",
	"option2": "Ikke nødvendigvis",
	"option3": "Ja",
	"answer": "3"
}, 
{
	"question": "Ved større blødninger, skal du ringe 113 selvom du kan grunnleggende førstehjelp?",
	"option1": "Se ann situasjonen",
	"option2": "Ja, selvsagt",
	"option3": "Nei",
	"answer": "2"
}, 
{
	"question": "Dersom en person er bevisstløs, hva er viktig å sjekke før du setter igang HLR?",
	"option1": "Kan personen snakke?",
	"option2": "Har personen frie luftveier?",
	"option3": "ligger personen i ro",
	"answer": "2"
}, 
{
	"question": "Hva gjør du hvis et spedbarn under 1 år har satt noe i halsen?",
	"option1": "Snu barnet opp-ned",
	"option2": "Gi 5 slag mot rygg og 5 brystkompresjoner",
	"option3": "Spør om det går bra",
	"answer": "2"
}, 
{
	"question": "Hva er typiske symptomer på slag/hjerneslag/hjerneblødning?",
	"option1": "klarer ikke si alfabetet baklengs",
	"option2": "hodepine, lammelser og taleproblemer",
	"option3": "Vanskelig å sitte",
	"answer": "2"
}, 
{
	"question": "Dersom du er førstemann på stedet ved en trafikkulykke. hva gjør du?",
	"option1": "Sett opp varseltrekant",
	"option2": "Sjekk puls på de involverte",
	"option3": "Ring 112",
	"answer": "1"
}, 
{
	"question": "Ved store blødninger, er det nødvendig å heve det blødende stedet?",
	"option1": "Nei",
	"option2": "Det har ingen betydning",
	"option3": "Ja, hvis mulig",
	"answer": "3"
}, 
{
	"question": "På en voksen person, hvor mange brystkompresjoner skal du ta?",
	"option1": "30:2",
	"option2": "32:4",
	"option3": "30:4",
	"answer": "1"
}, 
{
	"question": "Hva ville du gjort dersom kjæresten din slo hodet og ble bevisstløs?",
	"option1": "Ringt mamma",
	"option2": "Fått panikk",
	"option3": "Ringt 113",
	"answer": "3"
}
];


// MAKE QUIZ
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
var container = document.getElementById('quizContainer');
var questionElement = document.getElementById('question');

// ANSWERS
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');

// SHOW CURRENT QUESTION NUMBER
// var whatQuestion = document.querySelector('.questionNumber');

// NEXT QUESTION BUTTON
var nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('mousedown', loadNextQuestion);

// RESULTS
var resultCont = document.getElementById('result');
var yourScore = document.getElementById('score');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionElement.innerHTML = q.question;
	opt1.innerHTML = q.option1;
	opt2.innerHTML = q.option2;
	opt3.innerHTML = q.option3;
};


function loadNextQuestion () {
    
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Velg ett svaralternativ!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 1;
	}
    
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totalQuestions - 1){
		nextButton.innerHTML = 'Fullfør Quiz!';
	}
	if(currentQuestion == totalQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
        
        // GIVE USER A SCORE AND SOME WORDS 
        if(score == 10){
    		yourResult.innerHTML = '<span>Imponerende!</span><br> Du klarte ' + score + ' av ' + questions.length;
        }
        
        if(score >= 5 && score <= 10){
            yourResult.innerHTML = '<span>Godt jobbet!</span><br> Du klarte ' + score + ' av ' + questions.length;
        }
        
        if(score <= 5){
    		yourResult.innerHTML = '<span>Dessverre!</span><br> Du klarte ' + score + ' av ' + questions.length + ' <br> Du må øve litt mer! ';
        }
		return;
	}
    
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);







