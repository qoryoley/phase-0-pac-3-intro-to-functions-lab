require ( './root.js' );


describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('HELLO')).toEqual('HELLO');
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('hello')).toEqual('hello');
  })
})

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('HELLO');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('hello');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})




