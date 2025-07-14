# Regex Search Results in EMU-ALG Tags

**Search Pattern:** `1\..*the value of _.*_\..*`
**Source File:** `spec.html`
**Generated:** Mon Jul 14 2025 19:18:27 GMT+0200 (Ora legale dell’Europa centrale)

## Summary

- **Total sections with matches:** 7
- **Total matches found:** 8

## Results

- FulfillPromise
  - `1. Assert: The value of _promise_.[[PromiseState]] is ~pending~.`

- Function.prototype.toString
  - `1. If _func_ is a built-in function object, return an implementation-defined String source code representation of _func_. The representation must have the syntax of a |NativeFunction|. Additionally, if _func_ has an [[InitialName]] internal slot and _func_.[[InitialName]] is a String, the portion of the returned String that would be matched by |NativeFunctionAccessor?| |PropertyName| must be the value of _func_.[[InitialName]].`

- GeneratorStart
  - `1. Assert: The value of _generator_.[[GeneratorState]] is ~suspended-start~.`

- InitializeInstanceElements
  - `1. Let _methods_ be the value of _constructor_.[[PrivateMethods]].`
  - `1. Let _fields_ be the value of _constructor_.[[Fields]].`

- Number::toString
  - `1. Let _n_, _k_, and _s_ be integers such that _k_ ≥ 1, _radix__k_ - 1 ≤ _s_ &lt; _radix__k_, 𝔽(_s_ × _radix__n_ - _k_) is _x_, and _k_ is as small as possible. If there are multiple possibilities for _s_, choose the value of _s_ for which _s_ × _radix__n_ - _k_ is closest in value to ℝ(_x_). If there are two such possible values of _s_, choose the one that is even. Note that _k_ is the number of digits in the representation of _s_ using radix _radix_ and that _s_ is not divisible by _radix_.`

- Promise.prototype.then
  - `1. Assert: The value of _promise_.[[PromiseState]] is ~rejected~.`

- RejectPromise
  - `1. Assert: The value of _promise_.[[PromiseState]] is ~pending~.`
