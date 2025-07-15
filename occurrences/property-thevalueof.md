# Pattern Analysis: `1\..*[tT]he value of _.*_\..*`

## Summary
- **Sections with matches:** 7
- **Total matches:** 8

## Results

- [Number::toString (
              _x_: a Number,
              _radix_: an integer in the inclusive interval from 2 to 36,
            ): a String](https://tc39.es/ecma262/#sec-numeric-types-number-tostring)
  - `1. Let _n_, _k_, and _s_ be integers such that _k_ ≥ 1, _radix__k_ - 1 ≤ _s_ < _radix__k_, 𝔽(_s_ × _radix__n_ - _k_) is _x_, and _k_ is as small as possible. If there are multiple possibilities for _s_, choose the value of _s_ for which _s_ × _radix__n_ - _k_ is closest in value to ℝ(_x_). If there are two such possible values of _s_, choose the one that is even. Note that _k_ is the number of digits in the representation of _s_ using radix _radix_ and that _s_ is not divisible by _radix_.`

- [InitializeInstanceElements (
          _O_: an Object,
          _constructor_: an ECMAScript function object,
        ): either a normal completion containing ~unused~ or a throw completion](https://tc39.es/ecma262/#sec-initializeinstanceelements)
  - `1. Let _methods_ be the value of _constructor_.[[PrivateMethods]].`
  - `1. Let _fields_ be the value of _constructor_.[[Fields]].`

- [Function.prototype.toString ( )](https://tc39.es/ecma262/#sec-function.prototype.tostring)
  - `1. If _func_ is a built-in function object, return an implementation-defined String source code representation of _func_. The representation must have the syntax of a |NativeFunction|. Additionally, if _func_ has an [[InitialName]] internal slot and _func_.[[InitialName]] is a String, the portion of the returned String that would be matched by |NativeFunctionAccessor?| |PropertyName| must be the value of _func_.[[InitialName]].`

- [FulfillPromise (
            _promise_: a Promise,
            _value_: an ECMAScript language value,
          ): ~unused~](https://tc39.es/ecma262/#sec-fulfillpromise)
  - `1. Assert: The value of _promise_.[[PromiseState]] is ~pending~.`

- [RejectPromise (
            _promise_: a Promise,
            _reason_: an ECMAScript language value,
          ): ~unused~](https://tc39.es/ecma262/#sec-rejectpromise)
  - `1. Assert: The value of _promise_.[[PromiseState]] is ~pending~.`

- [PerformPromiseThen (
              _promise_: a Promise,
              _onFulfilled_: an ECMAScript language value,
              _onRejected_: an ECMAScript language value,
              optional _resultCapability_: a PromiseCapability Record,
            ): an ECMAScript language value](https://tc39.es/ecma262/#sec-performpromisethen)
  - `1. Assert: The value of _promise_.[[PromiseState]] is ~rejected~.`

- [GeneratorStart (
            _generator_: a Generator,
            _generatorBody_: a |FunctionBody| Parse Node or an Abstract Closure with no parameters,
          ): ~unused~](https://tc39.es/ecma262/#sec-generatorstart)
  - `1. Assert: The value of _generator_.[[GeneratorState]] is ~suspended-start~.`

