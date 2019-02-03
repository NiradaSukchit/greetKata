function greet(name) {
    if (name === null) {
        return 'Hello, my friend.'
    }
    if (!Array.isArray(name) && name == name.toUpperCase()) {
        return `HELLO ${name}!`
    }
    if (Array.isArray(name)) {
        if (name.length > 2) {
            return `Hello, ${name[0]}, ${name[1]}, and ${name[2]}.`
        }
        return `Hello, ${name.join(' and ')}.`
    }
    return `Hello, ${name}.`
}

module.exports = greet;