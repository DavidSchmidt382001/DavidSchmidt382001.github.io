function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Otázka " + currentQuestionNumber + " z " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1 class='text-center pt-5'>Výsledok</h1>";
    gameOverHTML += "<h2 id='score' class='text-center pt-5'> Tvoje skóre " + quiz.score + "</h2>" + "<br>" + "<button class='after' onclick='again()'>Hraj znovu</button>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

function again(){
    location.reload();
}


var questions = [
    new Question("Ktoré z týchto intravenóznych anestetík nepatrí medzi barbiturátové?",["Thiopental","Metohexidal","Pentobarbital","Ketamín"],"Ketamín"),
    new Question("Aké množstvo propofolu sa používa na uvedenie do celkovej anestézy?",["1 mg/kg","2,5 mg/kg","9 mg/kg","tak kilo a pol"],"2,5 mg/kg"),
    new Question("Ktorá kyselina je najsilnejšia na svete?",["H2S04","HCl","metanol z Ľetanovec","HSbF6"],"HSbF6"),
    new Question("Aká je smrteľná dávka radiácie?",["das 2 a pol deci","0,5 Sv","500 röntgenov počas 5 hodín","dinosaurus"],"500 röntgenov počas 5 hodín"),
    new Question("Koľko energie sa uvoľní z 1 gramu Uránu 235?",["10000 cal","75600 MJ","3 MWh","ta dosc na švecene 4 žiaroviek"],"75600 MJ"),
    new Question("Koľko žalúdkov má krava?",["1","3","4","A ja znam?"],"4"),
    new Question("Medzi experimentálne potvrdené intermediálne častice nepatrí:",["Gluón","Fotón","Bozón","Gravitón"],"Gravitón"),
    new Question("Aký je vek zeme?",["2019 rokov","4,5 mld rokov","Planckov čas","Ta nepamätám",],"4,5 mld rokov"),
    new Question("Za predpokladu, že derivácia je smernica sečnice dotyčnice a v tieni je 19 stupňov, koľko žiakov má naša škola?",["100","cca 600","dva sto","300"],"cca 600"),
    new Question("Ktorý z týchto jazykov nie je programovací?",["Python","C","Ruby","HTML"],"HTML")
]

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
