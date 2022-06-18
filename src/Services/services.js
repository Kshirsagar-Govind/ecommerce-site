const AverageRating = (reviews) => {
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let max = 0;
    reviews.map(item => {
        if (item.rating == 1) {
            one = one + 1;
        } else if (item.rating == 2) {
            two = two + 1;
        } else if (item.rating == 3) {
            three = three + 1;
        } else if (item.rating == 4) {
            four = four + 1;
        } else if (item.rating == 5) {
            five = five + 1;
        }
    });

    let temp = [one, two, three, four, five];

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] > max) {
            max = temp[i];
        }
    }

    const t = 1 * one + 2 * two + 3 * three + 4 * four + 5 * five;
    const ar = one + two + three + four + five;

    return {
        one,
        two,
        three,
        four,
        five,
        max,
        final_rating: t / ar,
    }

}

const AlertCallback = (header, msg, type) => {

    return {
        a_header: header,
        a_msg: msg,
        a_type: type,
        _showAlert: true,
    }

}



module.exports = { AverageRating, AlertCallback }