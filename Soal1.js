let x = true;

for (let i = 2; i <= 1000; i++) {
    x = true;

    for (let n = 2; n < i; n++){
        if (i % n === 0){
            x = false;
        }
    }

    if (x == true){
        console.log(i);
    }
}