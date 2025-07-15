# Pattern Analysis: `1\..*If .*, .*\. Otherwise,.*`

## Summary
- **Sections with matches:** 23
- **Total matches:** 32

## Results

- [Number::exponentiate (
              _base_: a Number,
              _exponent_: a Number,
            ): a Number](https://tc39.es/ecma262/#sec-numeric-types-number-exponentiate)
  - `1. If _exponent_ > *+0*𝔽, return *+∞*𝔽. Otherwise, return *+0*𝔽.`
  - `1. If _exponent_ is an odd integral Number, return *-∞*𝔽. Otherwise, return *+∞*𝔽.`
  - `1. If _exponent_ is an odd integral Number, return *-0*𝔽. Otherwise, return *+0*𝔽.`
  - `1. If _exponent_ > *+0*𝔽, return *+0*𝔽. Otherwise, return *+∞*𝔽.`
  - `1. If _exponent_ is an odd integral Number, return *-0*𝔽. Otherwise, return *+0*𝔽.`
  - `1. If _exponent_ is an odd integral Number, return *-∞*𝔽. Otherwise, return *+∞*𝔽.`

- [Number::divide (
              _x_: a Number,
              _y_: a Number,
            ): a Number](https://tc39.es/ecma262/#sec-numeric-types-number-divide)
  - `1. If _x_ is *+0*𝔽 or _x_ > *+0*𝔽, return *+0*𝔽. Otherwise, return *-0*𝔽.`
  - `1. If _x_ is *+0*𝔽 or _x_ > *+0*𝔽, return *-0*𝔽. Otherwise, return *+0*𝔽.`
  - `1. If _x_ > *+0*𝔽, return *+∞*𝔽. Otherwise, return *-∞*𝔽.`
  - `1. If _x_ > *+0*𝔽, return *-∞*𝔽. Otherwise, return *+∞*𝔽.`

- [Number::lessThan (
              _x_: a Number,
              _y_: a Number,
            ): a Boolean or *undefined*](https://tc39.es/ecma262/#sec-numeric-types-number-lessThan)
  - `1. If ℝ(_x_) < ℝ(_y_), return *true*. Otherwise, return *false*.`

- [Runtime Semantics: StringNumericValue ( ): a Number](https://tc39.es/ecma262/#sec-runtime-semantics-stringnumericvalue)
  - `1. If |ExponentPart| is present, let _e_ be the MV of |ExponentPart|. Otherwise, let _e_ be 0.`

- [Runtime Semantics: StringNumericValue ( ): a Number](https://tc39.es/ecma262/#sec-runtime-semantics-stringnumericvalue)
  - `1. If |ExponentPart| is present, let _e_ be the MV of |ExponentPart|. Otherwise, let _e_ be 0.`

- [Runtime Semantics: StringNumericValue ( ): a Number](https://tc39.es/ecma262/#sec-runtime-semantics-stringnumericvalue)
  - `1. If |ExponentPart| is present, let _e_ be the MV of |ExponentPart|. Otherwise, let _e_ be 0.`

- [ToUint8Clamp (
          _argument_: an ECMAScript language value,
        ): either a normal completion containing an integral Number or a throw completion](https://tc39.es/ecma262/#sec-touint8clamp)
  - `1. If _f_ is even, return 𝔽(_f_). Otherwise, return 𝔽(_f_ + 1).`

- [IsLessThan (
          _x_: an ECMAScript language value,
          _y_: an ECMAScript language value,
          _LeftFirst_: a Boolean,
        ): either a normal completion containing either a Boolean or *undefined*, or a throw completion](https://tc39.es/ecma262/#sec-islessthan)
  - `1. If _lx_ < _ly_, return *true*. Otherwise, return *false*.`

- [GetActiveScriptOrModule ( ): a Script Record, a Module Record, or *null*](https://tc39.es/ecma262/#sec-getactivescriptormodule)
  - `1. If no such execution context exists, return *null*. Otherwise, return _ec_'s ScriptOrModule.`

- [FunctionDeclarationInstantiation (
          _func_: an ECMAScript function object,
          _argumentsList_: a List of ECMAScript language values,
        ): either a normal completion containing ~unused~ or a throw completion](https://tc39.es/ecma262/#sec-functiondeclarationinstantiation)
  - `1. If _parameterNames_ has any duplicate entries, let _hasDuplicates_ be *true*. Otherwise, let _hasDuplicates_ be *false*.`

- [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-relational-operators-runtime-semantics-evaluation)
  - `1. If _r_ is *undefined*, return *false*. Otherwise, return _r_.`

- [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-relational-operators-runtime-semantics-evaluation)
  - `1. If _r_ is *undefined*, return *false*. Otherwise, return _r_.`

- [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-relational-operators-runtime-semantics-evaluation)
  - `1. If _r_ is either *true* or *undefined*, return *false*. Otherwise, return *true*.`

- [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-relational-operators-runtime-semantics-evaluation)
  - `1. If _r_ is either *true* or *undefined*, return *false*. Otherwise, return *true*.`

- [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-equality-operators-runtime-semantics-evaluation)
  - `1. If _r_ is *true*, return *false*. Otherwise, return *true*.`

- [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-equality-operators-runtime-semantics-evaluation)
  - `1. If _r_ is *true*, return *false*. Otherwise, return *true*.`

- [Decode (
            _string_: a String,
            _preserveEscapeSet_: a String,
          ): either a normal completion containing a String or a throw completion](https://tc39.es/ecma262/#sec-decode)
  - `1. If _preserveEscapeSet_ contains _asciiChar_, set _S_ to _escape_. Otherwise, set _S_ to _asciiChar_.`

- [Number.prototype.toFixed ( _fractionDigits_ )](https://tc39.es/ecma262/#sec-number.prototype.tofixed)
  - `1. If _n_ = 0, let _m_ be *"0"*. Otherwise, let _m_ be the String value consisting of the digits of the decimal representation of _n_ (in order, with no leading zeroes).`

- [GetSubstitution (
              _matched_: a String,
              _str_: a String,
              _position_: a non-negative integer,
              _captures_: a List of either Strings or *undefined*,
              _namedCaptures_: an Object or *undefined*,
              _replacementTemplate_: a String,
            ): either a normal completion containing a String or a throw completion](https://tc39.es/ecma262/#sec-getsubstitution)
  - `1. If _templateRemainder_ starts with *"$"* followed by 2 or more decimal digits, let _digitCount_ be 2. Otherwise, let _digitCount_ be 1.`

- [CharacterSetMatcher (
              _rer_: a RegExp Record,
              _A_: a CharSet,
              _invert_: a Boolean,
              _direction_: ~forward~ or ~backward~,
            ): a Matcher](https://tc39.es/ecma262/#sec-runtime-semantics-charactersetmatcher-abstract-operation)
  - `1. If there exists a CharSetElement in _A_ containing exactly one character _a_ such that Canonicalize(_rer_, _a_) is _cc_, let _found_ be *true*. Otherwise, let _found_ be *false*.`

- [RegExp.prototype [ %Symbol.match% ] ( _string_ )](https://tc39.es/ecma262/#sec-regexp.prototype-%symbol.match%)
  - `1. If _flags_ contains *"u"* or _flags_ contains *"v"*, let _fullUnicode_ be *true*. Otherwise, let _fullUnicode_ be *false*.`

- [RegExp.prototype [ %Symbol.replace% ] ( _string_, _replaceValue_ )](https://tc39.es/ecma262/#sec-regexp.prototype-%symbol.replace%)
  - `1. If _flags_ contains *"g"*, let _global_ be *true*. Otherwise, let _global_ be *false*.`
  - `1. If _flags_ contains *"u"* or _flags_ contains *"v"*, let _fullUnicode_ be *true*. Otherwise, let _fullUnicode_ be *false*.`

- [RegExpBuiltinExec (
            _R_: an initialized RegExp instance,
            _S_: a String,
          ): either a normal completion containing either an Array exotic object or *null*, or a throw completion](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
  - `1. If _fullUnicode_ is *true*, let _input_ be StringToCodePoints(_S_). Otherwise, let _input_ be a List whose elements are the code units that are the elements of _S_.`

