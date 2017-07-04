var a = ['abc', 'acb', 'bac', 'test', 'bca', 'cab', 'cba'];
function findUniq(array) {
    let string = array.join().replace(/\s+/g, '');
    let arr = string.split(',');
    for (let i = 0; i < arr.length; i++) {
        let firstSorted = arr[i].split("").sort().join("");
        for (let j = 0; j < arr.length; j++) {
            let secondSorted = arr[j].split("").sort().join("")
            if (firstSorted === secondSorted) {
                arr[j] = arr[i];
            }
        }
    }
    let objKey = arr.reduce(function (map, e) {
        map[e] = (map[e] || 0) + 1;
        return map;
    }, {});
    let unique = Object.keys(objKey).filter(function (e) {
        return objKey[e] == 1;
    })
    return unique;
}
console.log(findUniq(a));