## [Exchangerate.host](https://exchangerate.host)

ExchangeRate is a free API for current and historical foreign exchange rates published by the European Central Bank.

A public instance of the API lives at [https://api.exchangerate.host](https://api.exchangerate.host).

Rates are updated around midnight UTC every working day.

## Community libraries

- golang [asvvvad/exchange](https://github.com/asvvvad/exchange)
- elixir [81dr/ex_changerate](https://github.com/81dr/ex_changerate)
- forex rate web app [zayyarlin/d3viz](https://github.com/zayyarlin/d3viz), [forexrate.web.app](https://forexrate.web.app/)

## Usage

Get the all available currencies.

```http
GET https://api.exchangerate.host/symbols
```

Get the latest foreign exchange rates.

```http
GET https://api.exchangerate.host/latest
```

Get historical rates for any day since 1999.

```http
GET https://api.exchangerate.host/2000-01-03
```

Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.

```http
GET https://api.exchangerate.host/latest?base=USD
```

Request specific exchange rates by setting the symbols parameter.

```http
GET https://api.exchangerate.host/latest?symbols=USD,GBP
```

Currency conversion endpoint, can be used to convert any amount from one currency to another. 

```http
GET https://api.exchangerate.host/convert?from=EUR&to=USD
```

Timeseries endpoint are for daily historical rates between two dates of your choice, with a maximum time frame of 365 days.

```http
GET https://api.exchangerate.host/timeseries?start_date=2020-01-01&end_date=2020-04-04&symbols=EUR,USD,GBP
```

Using the fluctuation endpoint you will be able to retrieve information about how currencies fluctuate on a day-to-day basis. 

```http
GET https://api.exchangerate.host/fluctuation?start_date=2020-01-01&end_date=2020-04-04&symbols=EUR,USD,GBP
```

The primary use case is client side. For instance, with [money.js](https://openexchangerates.github.io/money.js/) in the browser

```js
let demo = () => {
  let rate = fx(1).from("GBP").to("USD")
  alert("£1 = $" + rate.toFixed(4))
}

fetch('https://api.exchangerate.host/latest')
  .then((resp) => resp.json())
  .then((data) => fx.rates = data.rates)
  .then(demo)
```
