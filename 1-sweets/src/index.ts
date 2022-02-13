const renderSweet = (num: number, divisibleBy: number) => {
  const criteria: any = {
    2: (n: number) => n % 2 === 0 && "candy",
    11: (n: number) => n % 11 === 0 && "bar",
    22: (n: number) => n % 22 === 0 && "candybar"
  };

  return criteria[divisibleBy](num) || num;
};

console.log(renderSweet(22, 11));
