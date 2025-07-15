# Pattern Analysis: `1\..*'s [^\s]+ value.*`

## Summary
- **Sections with matches:** 3
- **Total matches:** 6

## Results

- [ValidateAndApplyPropertyDescriptor (
            _O_: an Object or *undefined*,
            _P_: a property key,
            _extensible_: a Boolean,
            _Desc_: a Property Descriptor,
            _current_: a Property Descriptor or *undefined*,
          ): a Boolean](https://tc39.es/ecma262/#sec-validateandapplypropertydescriptor)
  - `1. Create an own accessor property named _P_ of object _O_ whose [[Get]], [[Set]], [[Enumerable]], and [[Configurable]] attributes are set to the value of the corresponding field in _Desc_ if _Desc_ has that field, or to the attribute's default value otherwise.`
  - `1. Create an own data property named _P_ of object _O_ whose [[Value]], [[Writable]], [[Enumerable]], and [[Configurable]] attributes are set to the value of the corresponding field in _Desc_ if _Desc_ has that field, or to the attribute's default value otherwise.`
  - `1. Replace the property named _P_ of object _O_ with an accessor property whose [[Configurable]] and [[Enumerable]] attributes are set to _configurable_ and _enumerable_, respectively, and whose [[Get]] and [[Set]] attributes are set to the value of the corresponding field in _Desc_ if _Desc_ has that field, or to the attribute's default value otherwise.`
  - `1. Replace the property named _P_ of object _O_ with a data property whose [[Configurable]] and [[Enumerable]] attributes are set to _configurable_ and _enumerable_, respectively, and whose [[Value]] and [[Writable]] attributes are set to the value of the corresponding field in _Desc_ if _Desc_ has that field, or to the attribute's default value otherwise.`

- [SetFunctionName (
          _F_: a function object,
          _name_: a property key or Private Name,
          optional _prefix_: a String,
        ): ~unused~](https://tc39.es/ecma262/#sec-setfunctionname)
  - `1. Let _description_ be _name_'s [[Description]] value.`

- [SymbolDescriptiveString (
              _sym_: a Symbol,
            ): a String](https://tc39.es/ecma262/#sec-symboldescriptivestring)
  - `1. Let _desc_ be _sym_'s [[Description]] value.`

