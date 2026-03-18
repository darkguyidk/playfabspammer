// THIS ENTIRE SCRIPT IS FOUND BY AI NOT MADE BY ME
function getRandomAlphaNumeric(length) {
    // Validate input
    if (typeof length !== "number" || length <= 0 || !Number.isInteger(length)) {
        throw new Error("Length must be a positive integer.");
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars.charAt(randomIndex);
    }

    return result;
}
