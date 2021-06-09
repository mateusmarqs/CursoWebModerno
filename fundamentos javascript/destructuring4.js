function rand([min = 0, max = 100]) {
    if (min > max) {
        [min, max] = [max, min]
    }
    console.log([min, max])
}

rand([200])
rand([200,300])