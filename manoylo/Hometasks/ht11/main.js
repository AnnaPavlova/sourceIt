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

	var listHolder = document.getElementById("list");
	
	function recursiveList (data) {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]

		var list = document.createElement("ul");
		var ul = null;
		var listItem = null;
		
		for(i = 0; i < data.length; i++){
			listItem = document.createElement("li");
		
			if(data[i] instanceof Array){
				ul = recursiveList(data[i]);
				listItem.appendChild(ul);
			}
			
			else{
				listItem.innerHTML = data[i];
			}
			
			list.appendChild(listItem);
		}
		return list;
	}
	
	
	
    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return fragment;
    }

    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
		
		document.getElementById(form).onsubmit = function(){
			checkFields()
		}
		
		function checkFields(){
			firstName = document.getElementById("first-name").value;
			lastName = document.getElementById("last-name").value;
			
			if(firstName.value == "" && lastName.value == ""){
				firstName.style.border = "1px solid red";
				lastName.style.border = "1px solid red";
				alert("Enter fields!");
			}
			
			else if(firstName.value == ""){
				firstName.style.border = "1px solid red";
				alert("Enter first name!");
			}
			
			else if(lastName.value == ""){
				lastName.style.border = "1px solid red";
				alert("Enter last name!");
			}
		}
    }
	
	//вызывать функции здесь!
	listHolder.appendChild(recursiveList([1,2,[3,4,[6,7,8],9],10,11]));
	simpleValidation("form");
    sortHandler();
})();