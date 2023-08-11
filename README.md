## [Exchangerate.host](https://exchangerate.host)

[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=Kofi&color=%23fe8e86)](https://ko-fi.com/X8X5261MF)
[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=Github&color=%23fe8e86)](https://github.com/sponsors/arzzen)

ExchangeRate is a free API for current and historical foreign exchange rates published by the European Central Bank.

A public instance of the API lives at locations:
- Central Europe: [https://api.exchangerate.host](https://api.exchangerate.host).
- Scandinavian region: [https://api-eu.exchangerate.host](https://api-eu.exchangerate.host)
- Central America: [https://api-us.exchangerate.host](https://api-us.exchangerate.host)

Rates are updated around midnight UTC every working day.

## Community libraries

- Golang [rehhouari/exchange](https://github.com/rehhouari/exchange)
- Elixir [81dr/ex_changerate](https://github.com/81dr/ex_changerate)
- R [stevecondylios/priceR](https://github.com/stevecondylios/priceR)
- Vue [dvnikolaev/vue-exchange-rates](https://github.com/dvnikolaev/vue-exchange-rates)
- F# [blowin/CurrencyExchange](https://github.com/blowin/CurrencyExchange)
- PHP Laravel package [amrshawky/laravel-currency](https://github.com/amrshawky/laravel-currency)
- forex rate web app [zayyarlin/d3viz](https://github.com/zayyarlin/d3viz), [forexrate.web.app](https://forexrate.web.app/)
- .Net 5 Sample [serkanince/NetCoreBackgroundJobsSample](https://github.com/serkanince/NetCoreBackgroundJobsSample)
- Vue Sample [artisticLogicMK/Infinity-Currency-Converter-v2](https://github.com/artisticLogicMK/Infinity-Currency-Converter-v2)
- Typescript/Javascript API client [@checksanity/exchangerate-host-api](https://github.com/CheckSanity/exchangerate-host-api)

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

### Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/exchangeratehost#backer)]

[![backers](https://opencollective.com/exchangeratehost/backers.svg?width=890)](https://opencollective.com/exchangeratehost#backers)

### Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/exchangeratehost#sponsor)]

[![sponsor81](https://user-images.githubusercontent.com/6382002/130024560-65bb49a6-c7e9-48f9-8427-a29d8ff2a3db.png)](https://quaestor.com/?utm_source=github&utm_category=sponsor)
[![sponsor0](https://opencollective.com/exchangeratehost/sponsor/0/avatar.svg?v=1)](https://opencollective.com/exchangeratehost/sponsor/0/website)
[![sponsor1](https://opencollective.com/exchangeratehost/sponsor/1/avatar.svg)](https://opencollective.com/exchangeratehost/sponsor/1/website)
[![sponsor2](https://opencollective.com/exchangeratehost/sponsor/2/avatar.svg)](https://opencollective.com/exchangeratehost/sponsor/2/website)
[![sponsor3](https://opencollective.com/exchangeratehost/sponsor/3/avatar.svg)](https://opencollective.com/exchangeratehost/sponsor/3/website)
[![sponsor4](https://opencollective.com/exchangeratehost/sponsor/4/avatar.svg)](https://opencollective.com/exchangeratehost/sponsor/4/website)
[![sponsor5](https://opencollective.com/exchangeratehost/sponsor/5/avatar.svg)](https://opencollective.com/exchangeratehost/sponsor/5/website)
[![sponsor6](https://opencollective.com/exchangeratehost/sponsor/6/avatar.svg)](https://opencollective.com/exchangeratehost/sponsor/6/website)
[![sponsor7](https://opencollective.com/exchangeratehost/sponsor/7/avatar.svg)](https://opencollective.com/exchangeratehost/sponsor/7/website)
[![sponsor8](https://opencollective.com/exchangeratehost/sponsor/8/avatar.svg)](https://opencollective.com/exchangeratehost/sponsor/8/website)
[![sponsor9](https://opencollective.com/exchangeratehost/sponsor/9/avatar.svg)](https://opencollective.com/exchangeratehost/sponsor/9/website)

