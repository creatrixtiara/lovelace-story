data = [
    {
        "date": "2016-10-31",
        "question_value": "V2hhdCBpcyAxICsxPw",
        "question_type": "text",
        "answer_value": "Mg",
        "answer_type": "text",
        "story_value": "T25jZSB1cG9uIGEgdGltZS4uLg",
        "story_type": "text"
    },
    {
        "date": "2016-10-31",
        "question_value": "V2hhdCBpcyAxICsxPw",
        "question_type": "text",
        "answer_value": "Mg",
        "answer_type": "text",
        "story_value": "T25jZSB1cG9uIGEgdGltZS4uLg",
        "story_type": "text"
    }
];

var questionIndex = data.length - 1;
var suffix = "==";

// this function decides which data item to show
function render(){
    $('#question').text(atob(data[questionIndex]["question_value"]+suffix));
}

// this function checks if an answer is correct
function toggleFields(){
    var userAnswer = $('#answer-input').val();
    var comparisonAnswer = atob(data[questionIndex]["answer_value"]+suffix);
    if (userAnswer == comparisonAnswer) {
        $('#story').text(atob(data[questionIndex]["story_value"]+suffix));
        $('#story').show();
    }
    else {
        $('#story').hide();
    }
}

// this function sets up things so the page actually does things
$(document).ready(function () {

    render();

    toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
    //this will call our toggleFields function every time the answer changes
    $('#answer').change(function () {
        toggleFields();
    });
    
    
    
});
