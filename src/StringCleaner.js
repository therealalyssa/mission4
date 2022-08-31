module.exports = (input) =>{
    const replaced = input.replace(/[^a-z0-9]/gi, ' ');
    return replaced.trim();
}