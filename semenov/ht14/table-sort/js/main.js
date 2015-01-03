$(function(){
	sortTable('#main_table', '#main_table th', '#main_table tbody');
	
	function sortTable(table, tableHead, tableBody){
		var head = $(tableHead);
		var body = $(tableBody);
		var rows = $(body).children();		
		var i,		
		max = rows.length,
		rowA, rowB,	
		aValue, bValue,
		tmp;
		
		$(head).each(function(index){
			$(this).on('click', function(e){
				e.preventDefault();
				console.log(max);
				for (i = 0; i < 17; i++) {
					rowA = $(rows[i]);
					//rowB = $(rows[1]);
					aValue = +$(rowA).children()[index].getElementsByTagName('span' || 'td')[0].innerHTML || 0;
					//bValue = +$(rowB).children()[index].getElementsByTagName('span')[0].innerHTML;
					//console.log(aValue);
					//console.log(bValue);
				}				
			})			
		})        
	}
})
