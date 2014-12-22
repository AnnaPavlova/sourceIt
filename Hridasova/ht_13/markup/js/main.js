$(document).ready(function() {
	equalHeight($('.container div'));
	$('ul li:first-child').addClass('red-color');
	$('ul').each(function() {
		var element = $(this).find('li:odd');
		element.each(function(index) {
			$(this).prepend(index + " ");
		});
	});
	$('button').click(function(){
		$("input[value='']").each(function(i) {
			$(this).val('');
		});
		return false;
	});
	$('ul').each(function(){
		var element = $(this).find('li');
		element.each(function() {
			$(this).click(function() {
				element.removeClass('active');
				$(this).addClass('active');
			});
		});
	});
});
function equalHeight(columns) {
		var tallestColumn = 0;
		var currentHeight;
		columns.each(
			function() {
				currentHeight = $(this).height();
				if(currentHeight > tallestColumn) {
					tallestColumn = currentHeight;
				}
			}
		);
		columns.height(tallestColumn);
	}