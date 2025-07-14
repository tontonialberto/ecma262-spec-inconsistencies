# Regex Search Results in EMU-ALG Tags

**Search Pattern:** `1\..*If .*, .*; otherwise .*`
**Source File:** `spec.html`
**Generated:** Mon Jul 14 2025 19:20:30 GMT+0200 (Ora legale dell’Europa centrale)

## Summary

- **Total sections with matches:** 26
- **Total matches found:** 30

## Results

- AllocateArrayBuffer
  - `1. If _maxByteLength_ is present and _maxByteLength_ is not ~empty~, let _allocatingResizableBuffer_ be *true*; otherwise let _allocatingResizableBuffer_ be *false*.`

- AllocateSharedArrayBuffer
  - `1. If _maxByteLength_ is present and _maxByteLength_ is not ~empty~, let _allocatingGrowableBuffer_ be *true*; otherwise let _allocatingGrowableBuffer_ be *false*.`
  - `1. If _allocatingGrowableBuffer_ is *true*, let _allocLength_ be _maxByteLength_; otherwise let _allocLength_ be _byteLength_.`

- BigInt::equal
  - `1. If ℝ(_x_) = ℝ(_y_), return *true*; otherwise return *false*.`

- BigInt::lessThan
  - `1. If ℝ(_x_) &lt; ℝ(_y_), return *true*; otherwise return *false*.`

- Contains (ClassTail : ClassHeritage? `{` ClassBody `}`)
  - `1. If |ClassHeritage| is present, return *true*; otherwise return *false*.`

- Error.prototype.toString
  - `1. If _name_ is *undefined*, set _name_ to *"Error"*; otherwise set _name_ to ? ToString(_name_).`
  - `1. If _msg_ is *undefined*, set _msg_ to the empty String; otherwise set _msg_ to ? ToString(_msg_).`

- GetBindingValue
  - `1. If _S_ is *false*, return *undefined*; otherwise throw a *ReferenceError* exception.`

- GetRawBytesFromSharedBlock
  - `1. If _isTypedArray_ is *true* and IsNoTearConfiguration(_type_, _order_) is *true*, let _noTear_ be *true*; otherwise let _noTear_ be *false*.`

- GetThisValue
  - `1. If IsSuperReference(_V_) is *true*, return _V_.[[ThisValue]]; otherwise return _V_.[[Base]].`

- IsLessThan
  - `1. If ℝ(_nx_) &lt; ℝ(_ny_), return *true*; otherwise return *false*.`

- IsLooselyEqual
  - `1. If ℝ(_x_) = ℝ(_y_), return *true*; otherwise return *false*.`

- IsPrivateReference
  - `1. If _V_.[[ReferencedName]] is a Private Name, return *true*; otherwise return *false*.`

- IsSuperReference
  - `1. If _V_.[[ThisValue]] is not ~empty~, return *true*; otherwise return *false*.`

- IsUnresolvableReference
  - `1. If _V_.[[Base]] is ~unresolvable~, return *true*; otherwise return *false*.`

- JSON.stringify
  - `1. If _spaceMV_ &lt; 1, let _gap_ be the empty String; otherwise let _gap_ be the String value containing _spaceMV_ occurrences of the code unit 0x0020 (SPACE).`
  - `1. If the length of _space_ ≤ 10, let _gap_ be _space_; otherwise let _gap_ be the substring of _space_ from 0 to 10.`

- Math.imul
  - `1. If _product_ ≥ 231, return 𝔽(_product_ - 232); otherwise return 𝔽(_product_).`

- RepeatMatcher
  - `1. If _min_ = 0, let _min2_ be 0; otherwise let _min2_ be _min_ - 1.`
  - `1. If _max_ = +∞, let _max2_ be +∞; otherwise let _max2_ be _max_ - 1.`

- Runtime Semantics: ForLoopEvaluation (ForStatement : `for` `(` LexicalDeclaration Expression? `;` Expression? `)` Statement)
  - `1. If _isConst_ is *false*, let _perIterationLets_ be _boundNames_; otherwise let _perIterationLets_ be a new empty List.`

- SetValueInBuffer
  - `1. If _isTypedArray_ is *true* and IsNoTearConfiguration(_type_, _order_) is *true*, let _noTear_ be *true*; otherwise let _noTear_ be *false*.`

- IsPropertyReference
  - `1. If _V_.[[Base]] is an Environment Record, return *false*; otherwise return *true*.`

- ToBigInt64
  - `1. If _int64bit_ ≥ 263, return ℤ(_int64bit_ - 264); otherwise return ℤ(_int64bit_).`

- ToInt16
  - `1. If _int16bit_ ≥ 215, return 𝔽(_int16bit_ - 216); otherwise return 𝔽(_int16bit_).`

- ToInt32
  - `1. If _int32bit_ ≥ 231, return 𝔽(_int32bit_ - 232); otherwise return 𝔽(_int32bit_).`

- ToInt8
  - `1. If _int8bit_ ≥ 27, return 𝔽(_int8bit_ - 28); otherwise return 𝔽(_int8bit_).`

- get ArrayBuffer.prototype.resizable
  - `1. If IsFixedLengthArrayBuffer(_O_) is *false*, return *true*; otherwise return *false*.`

- get SharedArrayBuffer.prototype.growable
  - `1. If IsFixedLengthArrayBuffer(_O_) is *false*, return *true*; otherwise return *false*.`

- String.prototype.substr
  - `1. If _length_ is *undefined*, let _intLength_ be _size_; otherwise let _intLength_ be ? ToIntegerOrInfinity(_length_).`