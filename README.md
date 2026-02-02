<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# parseDuration

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Parse a duration string into an object.

<section class="installation">

## Installation

```bash
npm install @stdlib/time-base-parse-duration
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var parseDuration = require( '@stdlib/time-base-parse-duration' );
```

#### parseDuration

Parses a duration string into an object.

```javascript
var obj = parseDuration( '1m3s10ms' );
// returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 }

obj = parseDuration( '1m3s' );
// returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 0 }
```

The returned object has the following properties:

-   **days**: number of days.
-   **hours**: number of hours.
-   **minutes**: number of minutes.
-   **seconds**: number of seconds.
-   **milliseconds**: number of milliseconds.

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A duration string is a string containing a sequence of time units. A time unit is a nonnegative integer followed by a unit identifier. The following unit identifiers are supported:

    -   `d`: days
    -   `h`: hours
    -   `m`: minutes
    -   `s`: seconds
    -   `ms`: milliseconds

    For example, the string `1m3s10ms` is a duration string containing three time units: `1m` (1 minute), `3s` (3 seconds), and `10ms` (10 milliseconds). The string `60m` is a duration string containing a single time unit: `60m` (60 minutes).

-   Duration strings are case insensitive. For example, the string `1M3S10MS` is equivalent to `1m3s10ms`.

-   If a duration string does not contain a time unit, the respective property is set to `0`.

-   An empty string is considered a valid duration string and is parsed as `0d0h0m0s0ms`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var parseDuration = require( '@stdlib/time-base-parse-duration' );

var obj = parseDuration( '1m3s10ms' );
// returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 }

obj = parseDuration( '60m' );
// returns { 'days': 0, 'hours': 0, 'minutes': 60, 'seconds': 0, 'milliseconds': 0 }

obj = parseDuration( '2d3h' );
// returns { 'days': 2, 'hours': 3, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 }

obj = parseDuration( '1M3S' );
// returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 0 }

obj = parseDuration( '' );
// returns { 'days': 0, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 }
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-base-parse-duration.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-base-parse-duration

[test-image]: https://github.com/stdlib-js/time-base-parse-duration/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/time-base-parse-duration/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-base-parse-duration/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-base-parse-duration?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-base-parse-duration.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-base-parse-duration/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time-base-parse-duration/tree/deno
[deno-readme]: https://github.com/stdlib-js/time-base-parse-duration/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/time-base-parse-duration/tree/umd
[umd-readme]: https://github.com/stdlib-js/time-base-parse-duration/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/time-base-parse-duration/tree/esm
[esm-readme]: https://github.com/stdlib-js/time-base-parse-duration/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/time-base-parse-duration/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-base-parse-duration/main/LICENSE

</section>

<!-- /.links -->
