$(function(){
	let searchField=$('#query');
	let icon=$('#search-btn');
	$(searchField).on('focus',function(){
		$(this).animate({width:'100%'},400);
		$(icon).animate({right:'10px'},400);
	});
	$(searchField).on('blur',function(){
		if(searchField.val()==''){
			$(searchField).animate({width:'45%'},400,function(){});
			$(icon).animate({right:'360px'},400,function(){});
		}
	});
	$('#search-form').submit(function(e){
		e.preventDefault();
	});
});

function search(){
	$('#results').html('');
	$('#buttons').html('');
	q=$('#query').val();
	$.get(
		"https://www.googleapis.com/youtube/v3/search",
		{
			part:'snippet,id',
			q:q,
			type:'video',
			key:'AIzaSyDgCQ8EuiJ1__t4xBmzM4C-Z5C9Vuda-1Y'
		},
		function(data){
			let nextPageToken=data.nextPageToken;
			let prevPageToken=data.prevPageToken;
			console.log(data);
			$.each(data.items,function(i,item){
				let output=getOutput(item);
				$('#results').append(output);
			});
			let buttons=getButtons(prevPageToken,nextPageToken);
			$('#buttons').append(buttons);
		}
	);
}

function nextPage(){
	let token=$('#next-button').data('token');
	let query=$('#next-button').data('query');
	$('#results').html('');
	$('#buttons').html('');
	q=$('#query').val();
	$.get(
		"https://www.googleapis.com/youtube/v3/search",
		{
			part:'snippet,id',
			q:q,
			pageToken: token,
			type:'video',
			key:'AIzaSyDgCQ8EuiJ1__t4xBmzM4C-Z5C9Vuda-1Y'
		},
		function(data){
			let nextPageToken=data.nextPageToken;
			let prevPageToken=data.prevPageToken;
			console.log(data);
			$.each(data.items,function(i,item){
				let output=getOutput(item);
				$('#results').append(output);
			});
			let buttons=getButtons(prevPageToken,nextPageToken);
			$('#buttons').append(buttons);
		}
	);
}

function prevPage(){
	let token=$('#prev-button').data('token');
	let query=$('#prev-button').data('query');
	$('#results').html('');
	$('#buttons').html('');
	q=$('#query').val();
	$.get(
		"https://www.googleapis.com/youtube/v3/search",
		{
			part:'snippet,id',
			q:q,
			pageToken: token,
			type:'video',
			key:'AIzaSyDgCQ8EuiJ1__t4xBmzM4C-Z5C9Vuda-1Y'
		},
		function(data){
			let nextPageToken=data.nextPageToken;
			let prevPageToken=data.prevPageToken;
			console.log(data);
			$.each(data.items,function(i,item){
				let output=getOutput(item);
				$('#results').append(output);
			});
			let buttons=getButtons(prevPageToken,nextPageToken);
			$('#buttons').append(buttons);
		}
	);
}

function getOutput(item){
	let videoId=item.id.videoId;
	let title=item.snippet.title;
	let description=item.snippet.description;
	let thumb=item.snippet.thumbnails.high.url;
	let channelTitle=item.snippet.channelTitle;
	let videoDate=item.snippet.publishedAt;

	let output='<li>'+
	'<div class="list-left">'+
	'<img src="'+thumb+'">'+
	'</div>'+
	'<div class="list-right">'+
	'<h3><a href="https://www.youtube.com/embed/'+videoId+'">'+title+'</h3>'+
	'<small>By <span class="cTitle">'+channelTitle+'</span > on '+videoDate+'</small>'+
	'<p>'+description+'</p>'+
	'</div>'+
	'</li>'+
	'<div class="clearfix"></div>'+
	'';
	return output;
}

function getButtons(prevPageToken,nextPageToken){
	if(!prevPageToken){
		var btnoutput='<div class="button-container">'+
		'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"'+
		' onclick="nextPage();">Next Page</button></div>';
	}
	else{
		var btnoutput='<div class="button-container">'+
		'<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'"'+
		' onclick="prevPage();">Prev Page</button>'+
		'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"'+
		' onclick="nextPage();">Next Page</button></div>';
	}
	return btnoutput;
}