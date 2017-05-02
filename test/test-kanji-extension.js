var assert = require('assert');
var Showdown = require('showdown');
var kanjiExtension = require('../index.js');

var showdown = new Showdown.Converter({extensions:[ kanjiExtension ]});

describe('Kanji Showdown Extension', function() {
  it('should convert marked kanji into furigana ruby tags', function () {
    var html = showdown.makeHtml("{漢}(かん){字}(じ)");

    assert.equal(html, "<p><ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby></p>");
  });

  it('should be able to handle multi-byte japanese parentheses', function () {
    var html = showdown.makeHtml("｛私｝（わたし）はジョーと｛申｝（もう）します。");

    assert.equal(html, "<p><ruby>私<rt>わたし</rt></ruby>はジョーと<ruby>申<rt>もう</rt></ruby>します。</p>");
  });

  it('should be able to handle a mix of utf-8 and japanese parens', function () {
    var html = showdown.makeHtml("{私}（わたし)はジョーと{申}(もう）します。");

    assert.equal(html, "<p><ruby>私<rt>わたし</rt></ruby>はジョーと<ruby>申<rt>もう</rt></ruby>します。</p>");
  });

  it('should be able to handle multi-byte japanese braces', function () {
    var html = showdown.makeHtml("｛私｝(わたし)はジョーと｛申｝(もう)します。");

    assert.equal(html, "<p><ruby>私<rt>わたし</rt></ruby>はジョーと<ruby>申<rt>もう</rt></ruby>します。</p>");
  });

  it('should be able to handle a mix of utf-8 and japanese parens and braces', function () {
    var html = showdown.makeHtml("{私｝(わたし)はジョーと｛申}(もう）します。");

    assert.equal(html, "<p><ruby>私<rt>わたし</rt></ruby>はジョーと<ruby>申<rt>もう</rt></ruby>します。</p>");
  });

  it('should be able to handle japanese parens and braces', function () {
    var html = showdown.makeHtml("｛私｝（わたし）はジョーと｛申｝（もう）します。");

    assert.equal(html, "<p><ruby>私<rt>わたし</rt></ruby>はジョーと<ruby>申<rt>もう</rt></ruby>します。</p>");
  });

  it('should convert kanji while not interfering with normal markdown accents', function () {
    var html = showdown.makeHtml("**これは**ジョーの{記}(き){事}(じ)です");

    assert.equal(html, "<p><strong>これは</strong>ジョーの<ruby>記<rt>き</rt>事<rt>じ</rt></ruby>です</p>");
  });
});
