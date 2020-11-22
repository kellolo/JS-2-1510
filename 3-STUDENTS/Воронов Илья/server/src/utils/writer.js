const fs = require('fs');

module.exports = async(fileURL, data) => {
    try {
        await fs.writeFile(fileURL, JSON.stringify(data, null, ''), err => { console.log('err wrt fl') });
        return true;
    } catch (err) {
        return false;
    }
}