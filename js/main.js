var data = [
/*  {
        "question_number": " ";
        "question_value": " ";
        "answer_value": " ";
        "story_value": " ";
    }, */
    {
        "question_number": "0",
        "question_value": "PHA+U28gaGVyZSdzIGhvdyB0aGlzIHdvcmtzLjwvcD4NCjxwPlR5cGUgJ2xvdmVsYWNlJyBpbiB0aGUgYm94IGJlbG93LCB3aXRob3V0IHF1b3RhdGlvbiBtYXJrcy48L3A+",
        "answer_value": "bG92ZWxhY2U=",
        "story_value": "PHA+RmlndXJlIG91dCB3aGF0IHlvdSBuZWVkIHRvIGVudGVyIHVwIHRoZXJlIGFuZCB5b3Ugd2lsbCBsZWFybiBzb21ldGhpbmcgZnJvbSBtZSAtIGEgcmVjaXBlLCBhIHJlYWRpbmcsIGEgcmVjb3VudGluZy48L3A+DQo8cD5SZXR1cm4gcmVndWxhcmx5IGFuZCB5b3UgbWF5IGZpbmQgc29tZXRoaW5nIGVsc2UgSSBoYXZlIGNvbWUgdG8gcmVhbGlzZSBhYm91dCB0aGlzIHdvcmxkLCBhYm91dCB0aGUgdW5zZWVuLCBhYm91dCBtZS48L3A+DQo8cD5Ob3cgdHJ5IGFub3RoZXIgcGFnZS48L3A+",
    },
    {
        "question_number": "1",
        "question_value": "PHA+d2UnbGwgdGFrZSBvdXIgaGF0cyBvdXRzaWRlPGJyIC8+DQpsZWF2ZSBvdXIgbGl2ZXMgYmVoaW5kPGJyIC8+DQphbmQgd2F0Y2ggdGhlIDxhIGhyZWY9Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9M050NHZmemVveFEiPiYjeDI3Mjg7ICYjeDI3Mjg7ICYjeDI3Mjg7PC9hPiBnbyBvdXQ8L3A+", 
        "answer_value": "c3RhcnM=", 
        "story_value": "PHA+SSB1bmRlcnN0YW5kIHRoYXQgcGVvcGxlIGhlcmUgbG9vayBhdCBzdGFycyBhcyBhIG1lYW5zIG9mIHdheWZpbmRpbmcuIFNlZWsgdGhlIE5vcnRoIFN0YXIsIEkgYW0gdG9sZCwgYW5kIG9uZSB3aWxsIGFsd2F5cyBrbm93IHdoZXJlIHRoZXkgYXJlLCBob3cgdG8gZ2V0IHRvIHdoZXJlIHRoZXkgd2lzaCB0byBiZS48L3A+DQo8cD5JIGdyZXcgdXAgdW5kZXJzdGFuZGluZyB0aGUgc3RhcnMgYXMgcGF0aHdheXMuIE9uZSBkb2VzIG5vdCBqdXN0IGxvb2sgdXAgYXQgdGhlIHN0YXJzIHRvIGZpZ3VyZSBvdXQgdGhlIG5leHQgc3RlcDogb25lIHVzZXMgdGhlIHN0YXJzIHRvIDxlbT5nZXQ8L2VtPiB0aGVyZS4gVGFrZSBhIGRlZXAgYnJlYXRoLCBjb25uZWN0IHlvdXIgaGVhcnQgdG8gdGhlIGhvdCwgcHVsc2luZyBjb3JlIG9mIHRoZSBzdGFyLCBmZWVsIHlvdXJzZWxmIGRpc3NvbHZlIGFuZCByZXNvbHZlIHRvIHdoZXJlIHlvdSBpbnRlbmQuPC9wPg0KPHA+TW9zdCBwZW9wbGUgaGFkIHZlcnkgY2xlYXIgaW50ZW50aW9ucyBvZiB3aGVyZSB0aGV5IHdhbnRlZCB0byB0cmF2ZWwgdG8sIGNvbnN1bHRpbmcgc3RhciBtYXBzIGFuZCBjaGFydGluZyBjb3Vyc2VzIGFyb3VuZCBwbGFuZXRzLiBMZW9uaXMgc3F1YXJlcyBDeWduaSByaWdodCBieSBTaXJpdXMgLSBJIGhlYXIgdGhlcmUgaXMgYSB3b3JsZCBmdWxsIG9mIGZyaWVuZGx5IGJlaW5ncyBmdWxsIG9mIGZsdWZmIGFuZCBsb3ZlLiBUaGUgcGFzc2FnZSBvZiBBc3Rlcm9pZCAxMTgxIGJyaW5ncyBhbiBpbnRpbWlkYXRpbmcgeWV0IGFsbHVyaW5nIHdvcmxkIHdoZXJlIEZlbW1lIGhvbGRzIHBvd2VyIGFuZCBjYWxscyBvbiB0aG9zZSB2aXNpdGluZyB0byBoYXJuZXNzIHRoZWlyIG93biAtIGJ5IGhvbGRpbmcgb24gdG8gdGhlaXIgZGVtb25zLCBiZWZyaWVuZGluZyB0aGVtLCBmaW5kaW5nIHN0cmVuZ3RoIGFuZCBwb3dlciB3aXRoaW4gdGhlbS4gVGhlIGVmZmVjdCBpcyBldmVuIG1vcmUgcG90ZW50IHdoZW4gdmlzaXRlZCBvbiBibG9vZCBtb29ucy48L3A+DQo8cD5JIHBlcnNvbmFsbHkgZW5qb3kgdHJhdmVsbGluZyBhdCByYW5kb20sIHBpY2tpbmcgdGhlIGZpcnN0IHN0YXIgSSBzZWUgLSBvciByZWFsbHksIHRoZSBmaXJzdCBzdGFyIHdob3NlIGNvcmUgY2FsbGVkIHRvIG15IGhlYXJ0IC0gYW5kIGxldHRpbmcgaXQgdGFrZSBtZSB3aGVyZSBpdCB3YW50cyBtZSB0byBiZS4gSSd2ZSBzZWVuIHBsYW5ldHMgdGhhdCByYWluZWQgZGlhbW9uZHMsIG1ldGVvcnMgaG9sZGluZyBjcnVjaWJsZXMgb2YgaW1wZW5kaW5nIGxpZmUsIGV2ZW4gcm9kZSBhIGNvbWV0IHJvdW5kIGEgZ2FsYXh5LjwvcD4NCjxwPk9uIHRoYXQgdmVyeSBjb21ldCByaWRlLCB0dXJuaW5nIGEgY29ybmVyIHBhc3QgS3VpcGVyLCBJIGZlbHQgYSB2ZXJ5IHN0cm9uZyBwdWxsIHRvd2FyZHMgYSBicmlnaHQsIHdhcm0gc3Rhcjsgbm90IHRoZSBiaWdnZXN0IEkgaGFkIGV2ZXIgc2VlbiwgYnV0IHRoZSBtb3N0IGludHJpZ3VpbmcsIHRoZSBtb3N0IGVsZWN0cmljLCBmdWxsIG9mIHB1bHNhdGluZyBsaWZlIGFuZCBtYWdpYyBhbmQgcG90ZW50aWFsLiBDYWxsaW5nIHRvIG1lIGFuZCBkcmF3aW5nIG1lIGluIHNvIGxvdWRseSBJIGZlbHQgbGlrZSB0aGUgY29tZXQgaXRzZWxmIHdhcyBiZWluZyBwdWxsZWQgb2ZmLWNvdXJzZS48L3A+DQo8cD5JIGRpZCBub3QgcmVjb2duaXNlIHRoaXMgc3RhciwgZGlkIG5vdCBrbm93IHdoZXJlIGl0IHdvdWxkIHRha2UgbWUuIEkgaGFkIG5vIHN0YXIgY2hhcnRzIG9uIG1lLCBubyB3YXkgdG8gY2hlY2sgd2hlcmUgSSB3b3VsZCBnbyBvciBob3cgSSB3b3VsZCBnZXQgaG9tZS4gSWYgSSB3YW50ZWQgdG8gZXZlbiBnZXQgaG9tZS48L3A+DQo8cD5UaGlzIGZlbHQgbW9yZSBsaWtlIGhvbWUsIHNvbWVob3cuPC9wPg0KPHA+TmVydm91cyB3aXRoIGVuZXJneSwgSSBsaW5rZWQgbXkgaGVhcnQgd2l0aCB0aGUgbXlzdGVyeSBzdGFyJ3MgY29yZTsgYSBnaWFudCB3YXZlIG9mIHNvbmljZXNxdWUgZW5lcmd5IG92ZXJ3aGVsbWVkIG1lLiBKdXN0IGFzIG15IGNvbWV0IHJpZGUgd2FzIGFib3V0IHRvIGNyYXNobGFuZCBpbnRvIGEgbGVzc2VyIGFzdGVyb2lkLCBJIGZlbHQgbXlzZWxmIGRpc3NvbHZlIHNvIHJhcGlkbHkgYW5kIHJlc29sdmUgZXZlbiBxdWlja2VyLCBvbiB0aGlzIHN0cmFuZ2Ugd29ybGQgSSBub3cgd3JpdGUgZnJvbS48L3A+DQo8cD5Tb2RkZW4gYW5kIHJvYnVzdCBhbmQgYmFsbXkgYW5kIGJyaXNrIGFuZCBidXp6aW5nIHdpdGggdml0YWxpdHkgYW5kIG11dGVkIHdpdGggc3VidGxldHkuIEEgbWVzcyBvZiBjb250cmFkaWN0aW9ucy4gQW5kIHRoZSBsb2NhbHMgZG9uJ3Qgc2VlbSB0byBwaWNrIHVwIG9uIGhvdyBtdWNoIHRoaXMgcGxhY2UgcmVhbGx5IGhvbGRzLjwvcD4NCjxwPldoZXJlIGFtIEk/IFdoYXQgaXMgdGhpcyBwbGFjZT8gPGVtPldoeTwvZW0+IHRoaXMgcGxhY2U/PC9wPg0KPHA+SSdtIGdvaW5nIHRvIGZpbmQgb3V0LjwvcD4=",
    }
];

var questionIndex = data.length - 1;
var wrongAnswer = "<h2>Not quite there...</h2>";

// this function decides which data item to show
function render(){
       // $('#questionNumber').text("&#x2728;" + (data[questionIndex]("question_number"]) + "&#x2728;");
        $('#question').html(atob(data[questionIndex]["question_value"]));
        $('#otherquestions').html(buildQuestionList() + ' &#x2728;');
}

// this function checks if an answer is correct
function toggleFields(){
    var userAnswer = $('#answer-input').val();
    var comparisonAnswer = atob(data[questionIndex]["answer_value"]);
    if (userAnswer == comparisonAnswer) {
        $('#story').html(atob(data[questionIndex]["story_value"]));
        $('#story').fadeIn(600);
    }
    else {
        $('#story').html(wrongAnswer);
        $('#story').show();
    }
    
}

// e.g.
// var q = getQuerystringParams();
// var questionNumber = parseInt(q['q']);
function getQuerystringParams(){
	var querystring = window.location.search;
	var questionmarkIndex = querystring.indexOf('?');
	if(questionmarkIndex < 0){
		return {};
	} else {
		var keyValueItems = querystring.substring(questionmarkIndex+1).split('&');
		var items = {}, pair, d = decodeURIComponent, i;
		for (i = 0; i < keyValueItems.length; i++) {
			pair = keyValueItems[i].split('=');
			items[d(pair[0])] = d(pair[1]);
		}
		return items;
	}
}

// this function creates an entry for each of the data items
function buildQuestionList(){
	var html = '';
	for(var i = 0; i < data.length;i++){
		html += '&#x2728; <a href="/lovelace-story?q=' + (i) + '">' + (data[i]["question_number"]) + '</a> ';	
    }
	return html;
}

// this function sets up things so the page actually does things
$(document).ready(function () {

    render();

    toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
    //this will call our toggleFields function every time the answer changes
    $('#answer-form').submit(function (e) {
        e.preventDefault();
        toggleFields();
    });
    
    buildQuestionList();
    
    $('#story').hide();
    
    
});
