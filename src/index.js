module.exports = function toReadable(number) {
    const ones = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const dozens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const counter = {
        ones: 0,
        dozens: 0,
        hundreds: 0,
    };

    if (number <= 19) {
        return ones[`${number}`];
    }

    if (number >= 20 && number <= 99) {
        counter.ones = number % 10;
        counter.dozens = Math.trunc(number / 10);
        if (counter.dozens >= 2 && counter.ones === 0) {
            return dozens[counter.dozens];
        }
        return dozens[counter.dozens] + " " + ones[counter.ones];
    }

    if (number >= 100) {
        counter.ones = number % 10;
        counter.dozens = Math.trunc((number % 100) / 10);
        counter.hundreds = Math.trunc(number / 100);
        if (counter.dozens === 0 && counter.ones === 0) {
            return ones[counter.hundreds] + " " + "hundred";
        }

        if (counter.dozens === 0 && counter.ones > 0) {
            return (
                ones[counter.hundreds] +
                " " +
                "hundred" +
                " " +
                ones[counter.ones]
            );
        }

        if (counter.dozens === 1 && counter.ones === 0) {
            return (
                ones[counter.hundreds] +
                " " +
                "hundred" +
                " " +
                ones[number % 100]
            );
        }

        if (counter.dozens > 0 && counter.ones === 0) {
            return (
                ones[counter.hundreds] +
                " " +
                "hundred" +
                " " +
                dozens[(number % 100) / 10]
            );
        }

        if (counter.ones >= 0 && counter.dozens < 2) {
            return (
                ones[counter.hundreds] +
                " " +
                "hundred" +
                " " +
                ones[number % 100]
            );
        }

        return (
            ones[counter.hundreds] +
            " " +
            "hundred" +
            " " +
            dozens[counter.dozens] +
            " " +
            ones[counter.ones]
        );
    }
};
