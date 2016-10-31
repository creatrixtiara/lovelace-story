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


// this function decides which data item to show
function render(){
    suffix = "==";
    $('#question').text(atob(data[0]["question_value"]+suffix));

    $('#answer').text();
}

// this function checks if an answer is correct
function toggleFields(){
    if ($('#answer').atob(val()+suffix) == (data[0]["answer_value"]+suffix)) {
        $('#story').text(atob(data[0]["story_value"]+suffix));
        $('#story').show();
    }
    else {
        $('#story').hide()
    }
}

// this function sets up things so the page actually does things
$(document).ready(function () {

    render();

    toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
    //this will call our toggleFields function every time the selection value of our underAge field changes
    $('#answer').change(function () {
        toggleFields();
    });
});
