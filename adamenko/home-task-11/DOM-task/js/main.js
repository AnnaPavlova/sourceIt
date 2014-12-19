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

    function recursiveList (data) {
        // рекурсию, наверное даже можно не смотреть, нахардкодил вобщем, пошел не в ту степь:)
        var i, titles;
        titles = [1,2,[3,4,[6,7,8],9],10,11];
        document.write("<ul>");
        for (i = 0; i < titles.length; i++){

            document.write("<li>");

            document.write(titles[i]);

            if(titles[i].length > 0){
                document.write("<ul>");
                for( var j = 0; j < titles[i].length; j++ ){
                    document.write("<li>");
                    document.write(titles[i][j]);
                    document.write("<ul>");
                    for( var y = 0; y < titles[i][j].length; y++ ){
                        document.write("<li>");
                        document.write(titles[i][j][y]);
                        document.write("</li>");
                    }
                    document.write("</ul>");
                    document.write("</li>");
                }
                document.write("</ul>");
            }

            document.write("</li>");

        }
        document.write("</ul>");
        return list;
    }

    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return fragment;
    }

    function simpleValidation(form) {
        // решение в индексе, из main.js ошибку выдавало, так и не разобрался почему
    }


	//вызывать функции здесь!
    recursiveList();
    sortHandler();
})();