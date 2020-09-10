function myCallback(done) {
  setTimeout(() => {
    done();
  }, 3000);
}

myCallback(() => console.log('my call back'));

console.log('only log');
let msg = 'my msg';
console.log(msg);
