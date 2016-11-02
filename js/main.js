var data = [
    {
        "question_number": "0",
        "question_value": "PHA+U28gaGVyZSdzIGhvdyB0aGlzIHdvcmtzLjwvcD4NCjxwPlR5cGUgJ2xvdmVsYWNlJyBpbiB0aGUgYm94IGJlbG93LCB3aXRob3V0IHF1b3RhdGlvbiBtYXJrcy48L3A+",
        "answer_value": "bG92ZWxhY2U=",
        "story_value": "PHA+RmlndXJlIG91dCB3aGF0IHlvdSBuZWVkIHRvIGVudGVyIHVwIHRoZXJlIGFuZCB5b3Ugd2lsbCBsZWFybiBzb21ldGhpbmcgZnJvbSBtZSAtIGEgcmVjaXBlLCBhIHJlYWRpbmcsIGEgcmVjb3VudGluZy48L3A+DQo8cD5SZXR1cm4gcmVndWxhcmx5IGFuZCB5b3UgbWF5IGZpbmQgc29tZXRoaW5nIGVsc2UgSSBoYXZlIGNvbWUgdG8gcmVhbGlzZSBhYm91dCB0aGlzIHdvcmxkLCBhYm91dCB0aGUgdW5zZWVuLCBhYm91dCBtZS48L3A+DQo8cD5Ob3cgdHJ5IGFub3RoZXIgcGFnZS48L3A+",
    },
/*    {
        "question_number": "1",
        "question_value": "V2hhdCBpcyAxICsxPw==", 
        "answer_value": "Mg==", 
        "story_value": "PHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgbm9uIGdyYXZpZGEgZXJhdC4gQWVuZWFuIG5vbiBsaWJlcm8gZGFwaWJ1cywgdGluY2lkdW50IGFudGUgZXVpc21vZCwgZWZmaWNpdHVyIHRlbGx1cy4gRnVzY2UgZXUgcGVsbGVudGVzcXVlIG5pYmguIFNlZCBzZW1wZXIgbWF4aW11cyBvZGlvLCBpZCBjb25kaW1lbnR1bSBtYWduYSBzb2xsaWNpdHVkaW4gdXQuIEFlbmVhbiBtb2xsaXMgbnVuYyBkaWN0dW0gY3Vyc3VzIHNvbGxpY2l0dWRpbi4gUHJvaW4gZmV1Z2lhdCBtYXNzYSBldSByaG9uY3VzIHJ1dHJ1bS4gTnVsbGEgcXVpcyBsaWJlcm8gYWMgYW50ZSBwb3J0YSBmaW5pYnVzIHZlbCB2ZWwgZXJhdC4gVmVzdGlidWx1bSBlZ2V0IHJpc3VzIHNpdCBhbWV0IG51bGxhIGxvYm9ydGlzIGN1cnN1cy4gU3VzcGVuZGlzc2Ugc2l0IGFtZXQgaW1wZXJkaWV0IHVybmEsIHNlZCBtb2xsaXMgZXJhdC4gQWxpcXVhbSBldSBkdWkgbm9uIGxhY3VzIGxvYm9ydGlzIGxhb3JlZXQuIFZlc3RpYnVsdW0gZXUganVzdG8gZGljdHVtLCBzdXNjaXBpdCBuaXNsIHF1aXMsIGdyYXZpZGEgc2VtLiBNb3JiaSBlZmZpY2l0dXIgcGxhY2VyYXQgZXgsIGV0IGxhY2luaWEgbGFjdXMgdmVzdGlidWx1bSBub24uIFZpdmFtdXMgdmVoaWN1bGEsIGlwc3VtIHZlbCBmaW5pYnVzIHZlc3RpYnVsdW0sIG5pYmggYXVndWUgZ3JhdmlkYSBuaXNpLCBzZWQgY29uc2VxdWF0IG1pIHVybmEgdXQgbWV0dXMuPC9wPg0KDQo8cD5WZXN0aWJ1bHVtIGRpY3R1bSBkYXBpYnVzIG5pYmggc2l0IGFtZXQgZWZmaWNpdHVyLiBBZW5lYW4gZWZmaWNpdHVyIG1hdXJpcyBxdWlzIGVzdCBmZXVnaWF0LCBlZ2V0IGNvbnZhbGxpcyByaXN1cyBtYWxlc3VhZGEuIEludGVnZXIgdGVtcG9yIHZhcml1cyBpcHN1bSwgaW4gY29uZ3VlIGlwc3VtIHB1bHZpbmFyIHZlaGljdWxhLiBJbiBzZWQgdG9ydG9yIG5lYyBqdXN0byB2ZXN0aWJ1bHVtIGFsaXF1YW0gYWMgdXQgdXJuYS4gQ3VyYWJpdHVyIG5pYmggZXN0LCBiaWJlbmR1bSBpZCBuZXF1ZSBncmF2aWRhLCBncmF2aWRhIHZpdmVycmEgbGliZXJvLiBDcmFzIGNvbmd1ZSB0ZWxsdXMgaW4gZXggZXVpc21vZCwgZXUgZXVpc21vZCBwdXJ1cyBtb2xsaXMuIFBoYXNlbGx1cyB1bGxhbWNvcnBlciBlcmF0IHNhcGllbiwgYWMgY29uZ3VlIG5pYmggcG9ydHRpdG9yIGEuIFV0IG5vbiBsaWJlcm8gdXJuYS4gU2VkIHN1c2NpcGl0IGxvcmVtIGFjY3Vtc2FuIGVsaXQgcG9zdWVyZSwgdml0YWUgdGluY2lkdW50IGVsaXQgZGljdHVtLiBOdWxsYSBlbGVtZW50dW0gc2VtIHF1aXMgaXBzdW0gZWxlbWVudHVtIHVsdHJpY2VzLiBQcmFlc2VudCBldCBpbnRlcmR1bSBqdXN0by4gQWVuZWFuIGlkIG1hZ25hIG1pLiBWZXN0aWJ1bHVtIGEgc3VzY2lwaXQgbGlndWxhLCBzZWQgZWxlbWVudHVtIGVyYXQuPC9wPg0KDQo8cD5BbGlxdWFtIGVyYXQgdm9sdXRwYXQuIEFlbmVhbiBoZW5kcmVyaXQgbWFzc2EgYWMgYXVndWUgbWF0dGlzLCBpZCBkaWN0dW0gdHVycGlzIHNjZWxlcmlzcXVlLiBGdXNjZSBuZWMgbWkgZW5pbS4gRG9uZWMgYmxhbmRpdCB2ZXN0aWJ1bHVtIHN1c2NpcGl0LiBOdWxsYSBvcm5hcmUgbGVvIHNlZCBwdWx2aW5hciBhbGlxdWFtLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIE51bmMgc2FnaXR0aXMgc2VkIGxvcmVtIGV1IHNlbXBlci48L3A+",
    } */
];

var questionIndex = data.length - 1;
var wrongAnswer = "<h2>Not quite there...</h2>";

// this function decides which data item to show
function render(){
        $('#questionNumber').text("&#x2728;" + (data[questionIndex]("question_number"]) + "&#x2728;");
        $('#question').html(atob(data[questionIndex]["question_value"]));
}

// this function checks if an answer is correct
function toggleFields(){
    var userAnswer = $('#answer-input').val();
    var comparisonAnswer = atob(data[questionIndex]["answer_value"]);
    if (userAnswer == comparisonAnswer) {
        $('#story').html(atob(data[questionIndex]["story_value"]));
        $('#story').show();
    }
    else {
        $('#story').html(wrongAnswer);
        $('#story').show();
    }
    
}

// this function sets up things so the page actually does things
$(document).ready(function () {

    render();

    toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
    //this will call our toggleFields function every time the answer changes
    $('#answer button').click(function () {
        toggleFields();
    });
    
    $('#story').hide();
    
    
});
