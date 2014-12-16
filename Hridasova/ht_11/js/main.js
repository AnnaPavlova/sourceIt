(function(){
    function bubbleSort(data) {
        var arr = data.slice()
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var i;
        var arrText = document.createElement('p');
        var sortText = document.createElement('p');
        for(i = 0; i < 10; i++){
            arr[i] = getRandomInt(1, 100);
        }
        arrText.innerHTML = 'Array: ' + arr.join(' ');
        document.getElementById('sort').appendChild(arrText);
        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
        document.getElementById('sort').appendChild(sortText);
    }
	var arr = [1,2,[3,4,[6,7,8],9],10,11];
	var i, size = 1;
    function recursiveList (data) {
		var leng = data.length;
		var ul = document.createElement('ul');
		var list = document.getElementById('list');
		for (i = 0; i < leng; i++) {
			var para = document.createElement('li');
			var node = document.createTextNode(data[i]);
			para.appendChild(node);
			if(typeof (data[i]) == 'number') {
				list.appendChild(para);
			} else if(typeof (data[i]) !== 'number') {
				ul.appendChild(para);
				list.appendChild(ul);
				recursiveList(data[i]);	
				}
		}
    }
    function recursiveHeadings (data, weight) {
		var leng = data.length;
		var element = document.getElementById('headings');
		for (i = 0; i < leng; i++) {
			if (typeof (data[i]) == 'number') {
				var para = document.createElement('h' + weight);
				var node = document.createTextNode(data[i]);
				para.appendChild(node);
				element.appendChild(para);
			} else {
				recursiveHeadings (data[i], weight + 1);
				}
		}
		return element;
	}

    function simpleValidation() {
	var nameHolder = document.getElementsByTagName('input').value;
	document.getElementsByTagName('button').addEventListener('click', checkF);
		function checkF() {
			if (nameHolder == '') {
				document.getElementsByName('input').style.borderColor = '#ee2327';
				document.getElementsByName('input').style.borderWidths = '2px';
			} else {
				document.getElementsByName('input').style.border = 'none';
				}
		}
	}
	
	//вызывать функции здесь!
	recursiveList(arr);
	recursiveHeadings(arr, size);
    sortHandler();
})();