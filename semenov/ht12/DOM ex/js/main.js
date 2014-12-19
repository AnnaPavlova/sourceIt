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
        var list = document.createElement('ul');
        for (var i = 0, len = data.length; i < len; i++) {
            var item = document.createElement('li');
            if (typeof data[i] === 'object') {
                item.appendChild(recursiveList(data[i]));
            } else {
                item.innerHTML = data[i];
            }
            list.appendChild(item);
        }
        return list;
    }

    function recursiveHeadings (data, weight) {
        weight = weight || 1;
        var fragment = document.createDocumentFragment();
        for (var i = 0, len = data.length; i < len; i++) {
            var title = document.createElement('h' + weight);
            if (typeof data[i] === 'object') {
                fragment.appendChild(recursiveHeadings(data[i], weight + 1));
            } else {
                title.innerHTML = data[i];
            }
            fragment.appendChild(title);
        }
        return fragment;
    }

    function simpleValidation(form) {
        var inputs = form.getElementsByTagName('input');
        form.addEventListener('submit', function (ev) {
            ev.preventDefault();
            var error = false;
            for (var i = 0, len = inputs.length; i < len; i++ ) {
                var color = '';
                if (!inputs[i].value.length) {
                    color = 'red';
                    error = true;
                }
                inputs[i].setAttribute('style', 'border-color: ' + color);
            }
            if (!error) {
                alert('Form has been successfully validated!!!');
            }
        })
    }

    sortHandler();
    document.getElementById('list').appendChild(recursiveList([1,2,[3,4,[6,7,8],9],10,11]));
    document.getElementById('headings').appendChild(recursiveHeadings([1,2,[3,4,[6,7,8],9],10,11]));
    simpleValidation(document.getElementById('form'));
})();