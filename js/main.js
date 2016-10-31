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

function render(){
    suffix = "==";
    $('#question').text(atob(data[0]["question_value"]+suffix));

    $('#answer').text();
    
    if ($('#answer').atob(val()+suffix) == (data[0]["answer_value"]+suffix)) {
        $('#story').text(atob(data[0]["story_value"]+suffix));
        $('#story').show();
    }
    else {
        $('#story').hide()
    }
}

$( document ).ready(function() {
    render();
});
