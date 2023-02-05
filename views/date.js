module.exports = {
    getDate,
    getDay
};

function getDate() {

    // Formating date object to a string.
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    // Converts date to string.
    return today.toLocaleDateString("en-US", options);
}

function getDay() {

    // Formating date object to a string.
    const today = new Date();

    const options = {
        weekday: "long",

    };

    // Converts date to string.
    return today.toLocaleDateString("en-US", options);
}