function compare (dataset1, dataset2) {
  const dataset1obj = {};

  if (dataset1.length !== 0) {
    // eslint-disable-next-line array-callback-return
    dataset1.map(item => {
      dataset1obj[item.Symbol] = item.Price;
    });
  }
  console.log(dataset1obj);

  const dataset2Obj = {};
  if (dataset2.length !== 0) {
    dataset2.map(item => {
      dataset2Obj[item.Symbol] = item.PriceInfo.Price;
    });
  }

  return JSON.stringify(dataset1obj) === JSON.stringify(dataset2Obj);
}

const dataset1 = [
  {
    Symbol : 'Amzn',
    Price  : 1885
  },
  {
    Symbol : 'IBM',
    Price  : 123
  },
  {
    Symbol : 'MSFT',
    Price  : 456
  }
];

const dataset2 = [
  {
    Symbol    : 'Amzn',
    PriceInfo : {
      Currency : 'Usd',
      Price    : 1885
    }
  },
  {
    Symbol    : 'IBM',
    PriceInfo : {
      Currency : 'Usd',
      Price    : 123
    }
  },
  {
    Symbol    : 'MSFT',
    PriceInfo : {
      Currency : 'Usd',
      Price    : 456
    }
  }
];
console.log(compare(dataset1, dataset2));
