let main = require("./script")

test ('apple should return appleway', () => {
 
    let test = main.translate('apple');
    expect(test).toEqual('appleway');
})

test (' else should return elseway', () => {
 
    let test = main.translate('index');
    expect(test).toEqual('indexway');
})

test ('giraffe should return giraffeway', () => {
 
    let test = main.translate('giraffe');
    expect(test).toEqual('giraffeway');
})

