# Regex Search Results in EMU-ALG Tags

**Search Pattern:** `1\..*If .*, .*; otherwise,.*`
**Source File:** `spec.html`
**Generated:** Mon Jul 14 2025 19:40:49 GMT+0200 (Ora legale dell’Europa centrale)

## Summary

- **Total sections with matches:** 16
- **Total matches found:** 26

## Results

- BuiltinCallOrConstruct
  - `1. [id="step-call-builtin-function-result"] Let _result_ be the Completion Record that is the result of evaluating _F_ in a manner that conforms to the specification of _F_. If _thisArgument_ is ~uninitialized~, the *this* value is uninitialized; otherwise, _thisArgument_ provides the *this* value. _argumentsList_ provides the named parameters. _newTarget_ provides the NewTarget value.`

- Date.prototype.setFullYear
  - `1. If _t_ is *NaN*, set _t_ to *+0*𝔽; otherwise, set _t_ to LocalTime(_t_).`
  - `1. If _month_ is not present, let _m_ be MonthFromTime(_t_); otherwise, let _m_ be ? ToNumber(_month_).`
  - `1. If _date_ is not present, let _dt_ be DateFromTime(_t_); otherwise, let _dt_ be ? ToNumber(_date_).`

- Date.prototype.setUTCFullYear
  - `1. If _month_ is not present, let _m_ be MonthFromTime(_t_); otherwise, let _m_ be ? ToNumber(_month_).`
  - `1. If _date_ is not present, let _dt_ be DateFromTime(_t_); otherwise, let _dt_ be ? ToNumber(_date_).`

- Date.prototype.toUTCString
  - `1. If _yv_ is *+0*𝔽 or _yv_ > *+0*𝔽, let _yearSign_ be the empty String; otherwise, let _yearSign_ be *"-"*.`

- DateString
  - `1. If _yv_ is *+0*𝔽 or _yv_ > *+0*𝔽, let _yearSign_ be the empty String; otherwise, let _yearSign_ be *"-"*.`

- HasSuperBinding
  - `1. If _envRec_.[[FunctionObject]].[[HomeObject]] is *undefined*, return *false*; otherwise, return *true*.`

- HasThisBinding
  - `1. If _envRec_.[[ThisBindingStatus]] is ~lexical~, return *false*; otherwise, return *true*.`

- BigInt.asIntN
  - `1. If _mod_ ≥ 2_bits_ - 1, return ℤ(_mod_ - 2_bits_); otherwise, return ℤ(_mod_).`

- Runtime Semantics: ForLoopEvaluation
  - `1. If the second |Expression| is present, let _test_ be the second |Expression|; otherwise, let _test_ be ~empty~.`
  - `1. If the third |Expression| is present, let _increment_ be the third |Expression|; otherwise, let _increment_ be ~empty~.`
  - `1. If the first |Expression| is present, let _test_ be the first |Expression|; otherwise, let _test_ be ~empty~.`
  - `1. If the second |Expression| is present, let _increment_ be the second |Expression|; otherwise, let _increment_ be ~empty~.`
  - `1. If the first |Expression| is present, let _test_ be the first |Expression|; otherwise, let _test_ be ~empty~.`
  - `1. If the second |Expression| is present, let _increment_ be the second |Expression|; otherwise, let _increment_ be ~empty~.`

- SameValueNonNumber
  - `1. If _x_ and _y_ have the same length and the same code units in the same positions, return *true*; otherwise, return *false*.`
  - `1. If _x_ and _y_ are both *true* or both *false*, return *true*; otherwise, return *false*.`
  - `1. If _x_ is _y_, return *true*; otherwise, return *false*.`

- SetTypedArrayFromTypedArray
  - `1. If IsSharedArrayBuffer(_srcBuffer_) is *true*, IsSharedArrayBuffer(_targetBuffer_) is *true*, and _srcBuffer_.[[ArrayBufferData]] is _targetBuffer_.[[ArrayBufferData]], let _sameSharedArrayBuffer_ be *true*; otherwise, let _sameSharedArrayBuffer_ be *false*.`

- Static Semantics: FunctionBodyContainsUseStrict
  - `1. If the Directive Prologue of |FunctionBody| contains a Use Strict Directive, return *true*; otherwise, return *false*.`

- Static Semantics: ScriptIsStrict
  - `1. If |ScriptBody| is present and the Directive Prologue of |ScriptBody| contains a Use Strict Directive, return *true*; otherwise, return *false*.`

- String.prototype.lastIndexOf
  - `1. If _numPos_ is *NaN*, let _pos_ be +∞; otherwise, let _pos_ be ! ToIntegerOrInfinity(_numPos_).`

- parseInt
  - `1. If _S_ contains a code unit that is not a radix-_R_ digit, let _end_ be the index within _S_ of the first such code unit; otherwise, let _end_ be the length of _S_.`

- Date.prototype.setYear
  - `1. If _t_ is *NaN*, set _t_ to *+0*<sub>𝔽</sub>; otherwise, set _t_ to LocalTime(_t_).`