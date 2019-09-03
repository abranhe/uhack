Work in Progress...

<img src="./static/logo.svg" height="300" width="300">

# Hackathon Badges

> Awesome Badges for your Hackathons


![](https://cdn.abranhe.com/projects/hackathon-badges/screenshot.png)

## Why?

I started creating some badges to use on my projects READMEs for the hackathons that I participated, but I thought that it was cool to have more badges for multiple hackathons.

So I decided to create differennts svg badges with diferents years for differents hackathons but it was annoying creating a new badge for each year hackathon. So I came up with the idea 💡 to create a simple API to host and search those badges. So there you have it [hackathon.badge.pw](https://hackathon.badge.pw)

## Usage

```
https://hackathon.badge.pw/:hackathon?template=:template
```

or

```
https://hackathon.badge.pw/:hackathon/:year?template=:template
```

where

#### Hackathon

You can search all Hackathons at [/api/hackathons](https://hackathon.badge.pw/api/hackathons) or search it on our website.

If you know any hackathon you can [create a issue](https://github.com/abranhe/hackathon-badges/issues/new?body=**Required***%0A++%0A_name_%3A+%3C%21--+Fill+in+here+--%3E%0A_website_%3A+%3C%21--+Fill+in+here+--%3E%0A%0A**Not+required**%0A%0AOfficial+logo+picture+url%3A+%3C%21--+Fill+Here+--%3E%0A&title=New+Hackathon+request%21%21%21) adding the hackathon or instead submit a pull request with the hackathon.

#### Year

Any integer between 1900 - 2099

- Present

Example:

```md
![Shellhacks](https://hackathon.badge.pw/shellhacks)
```

![Shellhacks](https://hackathon.badge.pw/shellhacks)

- Past

Example:

```md
![Shellhacks](https://hackathon.badge.pw/shellhacks/2017)
```

![Shellhacks](https://hackathon.badge.pw/shellhacks/2017)

- Future

Example:

```md
![Shellhacks](https://hackathon.badge.pw/shellhacks/2052)
```

![Shellhacks](https://hackathon.badge.pw/shellhacks/2052)


#### Templates

- `flat` (Default)

Example:

```md
![Mangohacks](https://hackathon.badge.pw/mangohacks)
```

![Mangohacks](https://hackathon.badge.pw/mangohacks)

- `plastic`

Example:

```md
![Mangohacks](https://hackathon.badge.pw/mangohacks?template=plastic)
```

![Mangohacks](https://hackathon.badge.pw/mangohacks?template=plastic)

- `flat-square`

Example:

```md
![Mangohacks](https://hackathon.badge.pw/mangohacks?template=flat-square)
```

![Mangohacks](https://hackathon.badge.pw/mangohacks?template=flat-square)


- `for-the-badge`

Example:

```md
![Mangohacks](https://hackathon.badge.pw/mangohacks?template=for-the-badge)
```

![Mangohacks](https://hackathon.badge.pw/mangohacks?template=for-the-badge)


## License

MIT © [Abraham Hernandez](https://abranhe.com)

<!-- Uhack

https://img.shields.io/badge/UHack-2021-2a6118.svg?colorA=2a6118&colorB=e3793b&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAN0AAADOCAQAAAAQj8%2BkAAARaUlEQVR42u2de3xV1ZXHDyQ8RJCHrYBKi4OPWpAKjIgVFRUUBq0i4gOoig9QptZhsB9Ey0cqxScK0alIP%2B1AnbGoqLVgFaSoUOWZQQW5Ee%2FNi0AeRENICAkkud%2F5A5E87s1dZ5%2Bzz6PslX9v1t6%2F8z3n7Nc6a1mWMWPJje7cxByWsY18yqjnMGXkso4lTOMyTgilpjO4kbn8mY%2FJIptcPuMD3iCDO%2BhL638GaP15hm3EackO8h5TOTkkitIYxULyWlRUwUom0Tms0NoymUzkVsMyLgq4ptN4kkKxomre5OrwYZvKLlTsIy4OqKZeLKJGQdEnDA8PuEuJoG5xlnJawBSdwCyqHGhay4%2BDj60Di1KMbBIrY3yANA10dCsefXlOD%2FTkhbP4HLdsMe0CoekBDrmkaB29ggpuBPtx0zbQ3fcx%2Bw%2BuKtrNeUEEdy3VuG07Od1XcH91XVEFVwUN3Dhq0WHZnOqTovas1KKohlHBmlPWoMu20tEHRa34H22KKjg%2FKODOpQyd9g5pnmt6QquiAr%2FeJU1fLNvQbY94%2FvrXbZm09R%2Fdf6Hfahni6XbX1x5oetRvcFe4sACXzTXbeTbKrfZE0SH6%2Bgku3YOX5VGb4ZGmmzxTtMn7MbzhToN3VkEPT0buXA81TfRvglKs9KIo4qCS0AwPNE1X6tkBipUGjiyfnjum2OpmPgu4nJ60sizLojOjmEeJLQ%2BVdNWsqI3No6ocZnMZHSzLsmjH2YznbZsr3Fv8ANeKr2xIvOUIsmZbTXez14bQmZo1TbCFbUyiswC6MZ%2FDYi9fJLouutFdIj5%2Fe6Kl2SFdeVMsNKZZ0z%2FEPXnhyLOWxM%2FZfCr25H1kAC8Jd%2BxuEzy%2F8r2LCzQq6iUcr%2Bq5O6WvjiwXKlrgNbg00bI1zlihv%2BeEQucFYIoyWXiFZNvXezw%2BguVfRd2aa%2BNW%2BEDkcbtGTbIevCT2142YyOOl3qKT3KGZdu4neouWDHFdQX%2B0FUWfFHCi6%2FOBWd6ikxxC%2FpuW3frrNCm6SNT6HTa9viPw%2Bba36FK%2FCjbb9nmqKApE0z3KVEHbhXb3%2BxkseZK9BNeWupQd%2BpWC3%2FcEQv%2BkSZNkovS8wupXssj3LgaHHwm600%2FB7%2F2SkFRNmpa7PwRYlmXxosDvhUFaju9X8jvUv2U5WwRt91Twe7fAr3fRKozSc4HpKZBZrElT6jDZGiW%2FowWaJniHLnUAwAYlvx0km9CaNOWnbLlUye9Agab7vUP385SdWaPkN10g87AmTakPsIqU%2FPYTaHrIoAsrupkGnUFn0Bl0Bp1BZ9AZdAadQWfQGXQGnUFn0Bl0Bp1BZ9AdL%2Bg4hT4MYhBXMJxrGc7FDOIsetO15SAng85zdHRlKFOYz19Yz64Wo1tq2UMmK5jPVIY3zWFi0HmEjo5cxWOstpFsLcH5G6t4gjF8z6DzBl0d89niaqqPONvIoMKg043OPzPoDDqDzqAz6Aw6g86gM%2BjCh66DQRdKdAxnh0EXOnScyQqCbgZdM29t%2BLXGfJoGnS509BN9Y2PQBQsdacxyLZ%2B5QecdOrrzPmEyg%2B67%2BWQxGHQhQ0dr5nqUAtWgcxMdHXlby6UtZCPLeJYZ%2FILJ3MxYRjCOcUzkAebwEn9jh2I6R4POsiyL3i4Wj4FqNvI7JtGf9sK%2B9%2BAqZvAqUYPOFjoGuDTC1bOFxxhCGwcqTufnLKbAoBOgY5gLVX9qWc7t7mUaoRUX8jTZBl0L6LjecdWfz5mmKz2MIA3A8YqOmwUZjpLbYZYwUKum3QZdQnTc4CCGq4oMfqBdU%2BqIMKVcXqLkG7MDi46f2ciG3BTbb4%2FESWpWJDnkjWi6VvB6kNB92ODXVyqeC8R5xas6i3QT9GejkmdBoqn6PwcJ3ZYG7%2Fp9SuC2MNTyTtEgQY9WKXkWJGusezlI6LK%2B%2FWUvwfDf3A5wn7dJ5LlV0KtlSp6nCeZg%2Fx0kdLsty7I4ie0K4D7hTMtjY4GgX08peX40teOahUFCV0MrWvEX29gO8ZAfxVL4TNC325U8ZwheMvOChA668bBtcHkMsnwweovOMZRqLEgKh37zm2Ch%2B0%2FqbYJbpSubeko9M0Xz3U5Kvt9N7br4oWChswvucb%2BquZEu2sHMUvQuGO3zHwgWOntbyvdYvhnjRX1coGuXpjYevSus6Kq4xkdwbdkp6qVSfmZ6CI4cD0fvDCe6ch9qSTXUIptMVbdUOasF75eldl1REU505R4mik%2BkZIBwk%2B5dRf%2BC8oxfF4cRnd%2FguvClsKfj9C31C%2FPCh%2B4gF%2FsKrq2wdhaUqBaAZ3Nq57mhQ1fHGF%2FBtReVlDpizyi20UlyShkrDxu6X%2FgK7nt8aOMmO1uxlZGCdVE8SrjQZfgKboggEuWYKReAkpR1q6wMF7p1ToLwHPa9EwtsRckc4gzltj5J7b50T5jQ7aGHT9g6M5NSm719Qbm1kyRfMeXnhgddnZen3w2gXc8rCmHr5eq3GRMlDUQrwoPucQ8wDWAk45jEVGbwFK%2FxuXIg4SQH%2FRB8Yl1TGyUs6LaqrpAEu4VjmMfHoqLbUnvHQX%2B6Sl6XZXvDgq6Gvhp6cyYz2Kjho68yTnPQq0mSJnblhgXdHJf70YabWIseq3e2ZSApKB8neiAc6LI5wdXdkGmOEplqDSbndMk%2BStXBKOFAN9q19tO4U1R5WN0c1mGW1Vgv3hUOdO%2B61no%2FNqLXPqSdox524BvRa6gkDOjiDHCl5XRma0%2FX8b7asWqDXt4nOr09%2FC24gKNb6tKm8d%2FRbe9IP21O2stWgmrLQElBGNDVcpYrm8a7tYNb6nx3VVTOGoiVhgHdqy60OZoqzdjqmN1yGQvhMycaib%2BbXQYc3RDHLU5Q%2FkJPakUMc%2BXa3ChrriAvDOjWO25vku2AXLu2hG4uTaNE0S618WhtGNDd6LC1a1wtSNHcdnKVa1fmPlmTpYUNwAUWXS7pjtoazAGN2Ap4wL0NcU6WbX7HiX0dBnQPOzwP0JcEbjv3Ol0INOntElnDFZWNwAUUXZx%2FcbTh9YEWaOX8rzuTkka9vVR6epG7KwzoNjlq5zHXTwO28SIjdZwZ0pGYrBONlgUBRjfNQSsDHE9PythNlExWkMEvGcFJGq%2FJ78WDf14Y0NWrH1bSmk0KsOJ8yjOMpS8nWh4a10g7mOCZCyS6tQ7amGobWwlz6GP5YPRir%2FiZyw8HOuXZJZ1sBt3tY7q3z1mDvraTvx8SPnOBRKf85RyP2AL3ul%2BRnZZlWSyUv81zCsOBrlJ1F57OlNkIVbrX8tGk%2BycAX%2B9NCC6A6N5T9v%2Bg%2BGpUuL8%2Bs9XTn8kjPOvi0cqwoJuhfGyyUwxusK%2FgLrRzELUnPwk4CscHDd1PFb0PE16Lw1ztK7jz7Eylqg9F44nBZX9JwJ66uOoCmJeFV2O6r%2BD6yhcELUxQiLJ%2Fc9DQFSj6TpdFU7HK29x9TXp5rr1t8aKCZOBiUeJBQ7dK6%2Buyxo1oF2X9F1BiB1xVdbKXZZT9GyBo6BYo%2Bp4nuhqP%2BwhupL0TxHpiyRYFZG8nHjx0UxR9S6rZVXmRDzpJ%2FybZjZLZnZcMXJSqbRA8dJcreW4rSkHzok%2FY0kUpTxsfXuxIDi7%2F6AZawNCdoziKSMyXRDmcrBDAmxd7NSm6qkO7g4mui5LnyQLPOX7MLbnSRvWfo3aA%2FrGnkqErXvPd7wKFrlrR81OCC%2FJ7z7G150mFcMI4N1lWbHqSCUpOvCaY6AoVPb8muCQTPQY3ULFe%2BmzLsqzoxITo6r%2BdoAQQXbaiZ0FOLc73EFsXMhTDLP5wxEPs%2BkTodn%2FY6LeBQrdd0XNM8Bry6EiV1txlZ7Orka04Gn0avTrBDkpevDK46DYrei5KPfR7pHGE6A2QJFT%2F2Bd6scuboaut%2BqLJ7wOFboOi59SlCYs92S9Z7yAObSOdj%2FmKXtQUXUnzxAX%2FFOhSf7Gap3nRPUYpEq3B%2B6YhOMvaObgxuJwtCeaqBp1DVb34jeOPLzc3Xc82Qbe7LtHoeXygi%2Bdn%2FdT5B4zN5pHjWe6oquURW928jEUjdNXViZcZxwe6ul0RIoWRhVnXfNnJBSU%2FZDIrXEos8Faij08aoivbkOQ%2FjyN0R%2F5qI%2F%2FImrvjukhPhRHtfO5jCVkufs%2BQkfhdcAxd4bqk%2F3vcoTv2V5S1JvK70lsZRb9kdYHoycVM4Nf8kXWuf7F3KPkR11F0eZ%2B0sJV2HKMjQoTSo9u51ewlmywyyWQb2ZRSiU4r4ZLkio6gy9kWb6mwt0GHH7aJH7akaOfgKNlf1bd88xh0nmOLk5HqW72dg7Nz6%2Fal8GPQeQyuVJKwrnRQbeoQJIPOU3ArZN8OMljgy6DzDFsJt4kVGXSBQRdniZ14NIMuKOj%2Bz24JKYMuAOgO7%2BUe%2B7unBp3P6GrLCjZFq5QUGXT%2BoavdV7A5ejhK9JBBFyJ01QW7jmDDoAsNuni8fHtOpNExqUEXfHQ1RUUboqXNwoEMuiCjqykp2RjLThJqbtA5RlerA93BWNGGWH7yr3IMOsfoyMvssGNoZEZkReQbF9DVsYNFjOOUaF2L2Aw6N9B999u0HedH7oo8GXkr8kWkxha6EtbwPFMYeiyS2qDzKZiP1l%2BeUT6cKczieZbyNqtZTyaZbGI1K3mdpbzAI9zBKM5LnKDboAttHKZBZ9AZdMFDF8tTSVdn0PmLriZv%2Ff7N1KnkXzLo%2FEJXl%2FN56dr6o2FBBl0o0B3M3fzNurrGIUEGXaDR1WRvK%2FqocmvCkFeDLojoYjt2fVz6cVUk3lLKHYMuiOhEmfYMOoPOoDPoDDqDzqALPLrxKTujWEFLkGsyR5OmPT6iu807dNen7ExUyW87gcztmjRJSph1V%2FA7UuD3Bu%2FQXZmyM%2BVKfnsJZG7UpOkzQdvnahlcYIR36CQJR7tqukNXadK0Vs%2FTIapO5F2hDb4v6M7NCn4fF%2FhdqEnTYkHbz2q6JbzMZC0ol%2FSygteIQOavNCl6WND2V3bz39JFMPEqs7w0NqTs0AG7g7qwwsF1mhTdIGp9uE2v0wQ%2BN3iLLkPQpQU2fUoiuuKcoklRDxE6W3Uw6SgqZTHfW3RjJKHE9LPh8VbRpcvSqOkrUQ9sVL3iaT%2FfI8k6dbIojXVUOs%2BkD%2BUimS9p1LRI1INyzhTf3pI65XUqc3FnQj8SCV1NR4GvU4V3vNYVEMOFfYghyErGRVSIvK2xvDbuEQr9NFWSCn5MVBy1nK5RUZq4OlYOfVP4upGDQl93eo%2Buq6iEC0ARk5J9g00a%2Fy68OwGe16xpvrgnB3gw2W3EqSwWvSoBqtVKeTgV%2Bkcbn2VsZWLjxLqWRUfuFK3kjlq97sJnnGErnelOftl0nGIQT9tKJrfQ8sP4kc2KGzWsZAH%2FwS1MZi7vUW3zq5y3PND0ms0%2B1ZHJQh5lOs%2FyBtm2%2F7uP5Y%2FxBt5ZnAs8UNTfhTTCcnvF8svoY%2FvJUbc%2FeaRpkWeKDtLb8s9EG8ZuWBW9PFJ0inCF6dxmWX4aJ4on9s7sfg813eaJou2Jknx7C2%2BQS%2FnKW7KV3lasY6l2RdX8xPLfeFCzzEKVwAKHa1bd75IpVjCMF7UO5j6U96SPcg2t4K7mEgptw0pNIus83lc%2FpukS8VaWXXvT7eooTqcrqzWIrGWCj5ou05Jkf7nv05NmQtvxlutD%2BVifNQ1jn8uaFpNmBc9IZ55421WyaT0kAJrOER9HSV7%2BM%2F2o7SyVOsalBe3fZfnMPVDUxaWlQjFXWME2fsByhyIrmRaogdxivCjGpKX918XJag0FDd9YURh44oOdVzk9gIo685zy1kMmw6zwGOncYXtZW8cy%2BgdYUy8WUGVT02auDfD4llRqa0bwinB1FGOOVxvMDp%2B%2BKawXnVOWksFAK8xGR0bzHFuThEOUs4qHGBAyTd25ncVsT3i2V8T7PMzgQC4CFOWm0YfRTOReZjCDyYxnaBBHNVua2nMOwxnHJO5mHFdzoS%2BRJsbCZv8PrmJh1SLbHPUAAAAASUVORK5CYII%3D
-->

<!-- Shellhacks

https://img.shields.io/badge/ShellHacks-2021-4d4d4d.svg?colorA=ff1f8f&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAH8AAACMCAMAAABiZYaWAAAC7lBMVEUAAAD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FjtXoAAAA%2BXRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4%2FQEFCQ0RFRkdISUpLTE1OT1BSU1RVVldZWltcXV5fYGNkZWZnaGlqa2xtbm9wcXJ1dnd4eXp7fH1%2Bf4CBgoOEhYaHiImKi4yNjo%2BQkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr%2FAwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3%2BDh4uPk5ebn6Onq6%2Bzt7u%2Fw8fLz9PX29%2Fj5%2Bvv8%2Ff45aOzKAAAH5klEQVR4AcXaa3gU1R0G8Hez2bAhQFSwCdIIBkOhULk0QCooiMQUAhUoFgsKQhGwIEqtlEKxFSgphUK4FASVCpYINVxIQFEuDalcLJeEGgkGCSFACJh7wm7eb53ZfZLsZWd2zuzs8vu%2Bz87znP2fc%2BZ9F8HQ7vgvcC%2BlkTlJuGe6N1CyrTPukWw61L5pwb0whk3OJCL0rJfYzLa8NULtd3RVOAihFVdNN3d%2FG4ZQ%2BpCeDsYgdIbSW%2BlwhIr5LH2wzUaIzKJv6eEIhQ7lVJAdjRBYT0V5nRB0%2FexUdvFhBNsxqimKR3BNpLribgimNiX0o%2FhhBNFS%2BpX%2FAIImoZ7%2BHbMiWPZRi11hCI5R1GYRgiLia2rTOALB8Aa1utUFxutURc1OWmC4DyhgEYw2mCIa%2BsBYYV9SyBkLDPUyBc2HkR4oo6DqTjDQGgp7D8bpbaOwxv4wzBHq8BmMMoG6DIIxoq5Ql30wxh%2BpUz8YoWsddfoHjJBJveraI3A%2FpX5zEbCIr6jf%2FxCw1xiIAQhQxwoGYhkC9B4DUghN2iZOXPzPffuzsrIPZKyYOzoOTcwbGxiQvvAnZtqeYnoo%2B3hyezh1XlvLALwBVY%2FMPWanT7ZDr8TBIWaDnbp9AhUjc6gqMxEOfXOpV20rKEn9gn7tS4LMPN9GnYbCt1EnqEn2AMieKKE%2Br8OX7%2B2lVvY0KySPXqYu2%2BFD6nUKyOsFSedC6vE1vESuppjqCZB0%2Boo6NEbBQ888CltmAhCbRx26w90Pb1KHtSYA8d9R3DNw07WEuqyE5HmKmwJXcUUMZJC2UNhCuIgtoF72UQDaFFDUJrS47xz1u9kRwI%2FvUtABNDNnMxBZJgDrKSgfzZYwMJMAPFRDMUVoktzIwBRHAVhKMVeaF7%2BYgfo9gAfrKeQaZFpmp3Jv2q%2BShw1Pmb7mSC19utUawHYKuQGnJ6iqZlOqFc2ixr57lT7MBDCMQsq1BEjVy2PgwTr7Fr1cAGAqpIgKOEyiij0d4UP0WnrpDWAVRVRCZi6goqqpaBbbMQotptvp4W0AoyjiKmS%2FpKLbSXAIS0nPuU3SdurtIWFwepUezgBo00AB5yA7RyU3%2B0JmGnve9UOj4bSB7uz3icZBn0PyOJXYnoQsLofujnSEzHKW7lJF07iP1Gd%2FHmRDr9PTN90gS%2FZxDM%2BlgL8DiK6hgk9NkKTW0%2BnonEEJ8UkzPraRvNbBV%2BmyAcDPKGAJgBlU0PgYJL2r6PDvPgBGr8w9feCjjAZyB2QjvV%2BoelLALAAHqGAHJObzdFhjAvrn0KmGZAoklnK6OgEgVvD%2B17qOCsZCMpUOfwEwtM7r6bDZK1JpTwFdgFQqKLMAaFVC2UkT0LOCrurug2Q2XV0CEE3t6sKA1VSwyWVn%2FjmAnXSX5F27nQcQRe3OA8ingucg%2BZSy0nAgwU534%2BH1a8sFYBUbf6uNCuIAWGqa5%2BpFepgGyY%2FoajeAGLEepJ%2Fq1WhAy2vCQnoYDclP6GoFgEep3XBgMhVkuRwxIwEspocekKR43UCeomaN0UCaakWyiQ6JAMbRXQFk87wSxZeoWR6AHVSQ5nI0PA3g%2B3fpZoF3%2FlxjAfA3avYOgM9UW8p36fASJOl0VdoWEnOZ15LlUrMXAZylgjSX718FScwNtrCl%2Btj%2FJwCIbKBmnQCUUMF6SNaxef6B7sVsUvMCHDLo4rYVwEix3Qe1VJDhur2Oguzh92102PsIHPo30kW6YBm4FJIK1Xh%2BKJ0uRMIh4ZW1%2B7YvGginVv%2Blq0QA5lLBCqyUCuyRACwVdPorvIVt9Tp88Qw1uxYGyTfqj%2FchnRpfgKfInXQzDJIMarYKsjwq%2BbPrArBxYRjcxB%2Bnmz2QRN2hZgMhO0klFyE7xSbHB6NF9LJ6uqmIh2SecPRwhIqSIHmSLQrShkQBMMVO2FFFDxMhiSijZnPgsI2KdkG2lW4qC4oa6G0dZDOomS0GDm9SUWMPSO6%2FRP8%2BsUASWy7ePYyhskzIepbRn0NtINstGBfJEqjiOcgSv6O6TCtkC6jdnUg4hdVSWWkHyHp%2FSxX2P5jFFl%2B2Gk1OU8XRVpA9uJ%2BKipLhMMFOAb3QZD3VbDXB4fk8%2BlS7OBIOIxooIEvzH%2Be2hMPBNOIgvdz%2BUwyc5tRTxHA0s1ZR1e7WgFPv9HONbFGZMT4STg9kUsgpuNhFded7oVl0yqLtB0%2FkHt6Z9nI%2FM5oM%2FpZinoWLyfSjfoEVKjqvsVHMF3DVwU5%2FLs%2B0QkG3dxoCbV0O0r%2FSjNGt4CXi6e12CjsEdyOoSVXmq4%2Ffj2bmrlN3VVIH22PwcI6a3TiyceWK5cvW7C9ooE7p8DSZIVTeHp4irjJ0psLb6wyZ%2FfChXQlD5NZD8GU8Q2Q8fNvLkNgCBV2qGQL5baHkNQZfeQIUhX%2FJYLMlQ0V8GYNsOlQ9dZdB9Rb8mMlgWge%2F1jF4Nprgl%2BVzBss6EzRol8PgmA9t2uYwCO5OhlZts2m4yhRoZ9lMg13sAyHz7TTStnYQlFJGw1RPgbjOh2mQsz2gh2lWFQ1Q9ZsI6NTlAAOWEYcAjLnAgBSkIDDmKVeoW%2BG0CATM%2BuvL1CV%2FUjgMET7pNIXljjPBOAM3V1JA8ZIeMJj12ffvUJOqD1LCEAwRIzYWUZ39P28NiUAQxY5ZeriaPl3JWj7ufoSA%2BQfJUxZtOZRfeOV6eVXt9fyj%2F9q0bNqgaOj2fx7%2BjgUHw5MXAAAAAElFTkSuQmCC

-->



<!-- Mangohacks

https://img.shields.io/badge/MangoHacks-2018-ed821e.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAADWElEQVQ4y22SfWxTZRTGHza21mF1OhlgR0YEhOBHFDI1fgYBP9CRYIbG6HTLFIJOJG6GzG2ZCpolxlmzNBvJlllpBrJsA7UZTi1jKaXOcrl2N0tXa725er17eXN36evleikxr38gyUb7%2FHee8zsnJ08OME%2F3A%2FDfEfucJNk%2F7IJyWthzqHQMR10Dq1ehHlnyorFAqKa%2FWpeMuBzUTrMZ%2B7J%2BMvhwqoFO%2FHB79Fr8BRTnx962%2FjbORl%2F0Ln3IWX%2F94Np4M1OZTpNEkj%2Fm2DAXfxAcY88as%2FKwr5xhGwCgHsDoI8aUIcuC%2BBlw99yBAI6U6hFyxrv86Bx3AzjGN5vn%2F%2BVkUqxpKei62tgIjvgbpiE%2BY2PHvEMbUZiX%2BjRzmQqMxmv5VduP3hL6Exna5%2FRkRSFDvNeaiTXI7frkidUAgFXgEJ83jVilCWeO7N530BF9oG%2BFLiabAADdaC%2BiAXqq54b%2B7KxxCziSHzDJe7PiIeMA3oQG4UlmSHUca5BLGcRfNf8Il6deoeqV%2FYvo1%2FTskdLjyK0Uxqt0bXBt9Ali4ClwiC%2BZafE1joostBGfFIV3dhcnqtlfwZXi02QWYXyz0pgko13F%2Fhy730PndeG6jptSbcZ0V0myhigYcOk%2BRiKP6rgrC%2B9El0PaLpZtLyAB%2Bi3ylP1aBIl6i8mNWPByFu6EjfAmg8QqR9YxTd7LoX6l9EGPku86XL4s%2FAEE0LtUO0nPdbqT7aYSXtNzI51I7QFLJ5o5yq%2FBi6Ggb5ly2EoLVcH7zPOajyN4J40Lj4GxZBPHknl4GyoLxjaSU9bFqXdDbvP7DFePFeZHn9PEQ2XQfiHH3nJ%2BBABYhlpsXehZEtqa%2BtJMM03c6Vms%2BuxZqVv%2FPbI50awGdjggNplpcbc7rwXACQy7lS%2F0aStjMvXw4Ppet9pvWcmmd1xaP51UflY6OOArIUPmBanB45IQRGAdOUdC8QPHK7YVjT5Oz1gXpdZWZxhjt5GgzRO7OSBieIUWsDPaiFDlL9u1qO%2FW10vaSiNbFJ%2FJzD%2BFuprCD3EPVAwsn%2FKGtiQAFybQs1g6YM7YGfYb%2BdEeIqP6tG1bac0fWr9wQe3%2FQbRgn2OXY%2B%2BVYj%2Bq88crpA5VorbJ9UskkTwY3tTqzPXs%2FwFTeMBV0Y%2Fb3gAAAABJRU5ErkJggg%3D%3D

-->