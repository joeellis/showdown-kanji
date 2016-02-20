# showdown-kanji
---

This extension is intended to provide helpers for the  [showdown JS markdown plugin](https://github.com/showdownjs/showdown), kanji characters, and the Japanese language in general.

Right now, it's only feature is allowing an easy to add [furigana](https://en.wikipedia.org/wiki/Furigana) to [kanji characters](https://en.wikipedia.org/wiki/Kanji) using HTML5 `<ruby>` tags - however more features may be added in the future.

### Install
---

1. Get the [Showdown](https://github.com/showdownjs/showdown) package (you'll need to install this package separately).

2. Install this package via:

```
npm install --save showdown-kanji-helpers
```

3. Add the extension to your showdown converer, ex:

```
var Showdown = require("Showdown");
var kanjiExtension = require("showdown-kanji-helpers");

var markDown = "{私}(わたし)はジョーと{申}(もう)します";
var converter = new Showdown.Converter({ extensions: [kanjiExtension] });
var html = converter.makeHtml(markDown);

console.log(html) #=> <p><ruby>私<rt>わたし</rt></ruby>はジョーと<ruby>申<rt>もう</rt></ruby>します</p>
```

### Furigana
---

Adding furigana to your kanji characters is quite easy using this plugin (although this does not work consistently well on older browsers - please check [this table](http://caniuse.com/#feat=ruby) for `<ruby>` tag support first).

Take a look at these examples to understand how it works:

```
{漢字}(かんじ)
#=> <p><ruby>漢字<rt>かんじ</rt></ruby></p>
```

```
{漢}(かん){字}(じ)
#=> <p><ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby></p>
```

```
**これは**ジョーの{記}(き){事}(じ)です
#=> <p><strong>これは</strong>ジョーの<ruby>記<rt>き</rt>事<rt>じ</rt></ruby>です</p>
```

### TODO
---
- add `rp` tag support

### License

This packaged is licensed under the [BEER-WARE LICENSE](https://en.wikipedia.org/wiki/Beerware)

```
Joe Ellis wrote this file.  As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.
```
