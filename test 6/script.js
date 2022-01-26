class ConcurencyQueue {
  constructor(concurency) {
    this.requestId = concurency.requestId;
  }
  queue() {
    let p = new Promise((resolve, reject) => {
      setTimeout(resolve(console.log('Встать в очередь')), 1000);
    });
    p.then((result) => console.log(result));
  }

  deQueue(requestId) {}

  //Обработка очереди
  queuing(requestId) {}
}
