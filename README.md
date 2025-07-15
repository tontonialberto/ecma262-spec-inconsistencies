# Inconsistencies in the ECMA-262 specification syntax

## Introduction

The purpose of this document is to highlight parts of the ECMA-262 specification that use inconsistent notations (i.e., syntaxes) to express the same semantics. Additionally, I propose solutions to address these issues to improve the overall consistency and quality of the ECMA-262 specification.

This document refers to the specification available at https://tc39.es/ecma262, as of June 28, 2025.

The rest of this document is structured into sections, each describing a set of notations used to express the same semantics. For each notation, I provide the some examples from the specification, and a link to an extensive report; each report includes a reference to every occurence in the specification text, the total number of occurrences, and the regular expression used to identify those occurrences from the `spec.html` file of ECMA-262, and examples from the specification. Finally, I suggest a suitable solution to address the issue.

## Object Field References

### Description of the Issue

Referencing a field of an object is expressed using different notations:

1. `the value of _ref_.[[Property]]`
    - **examples**:
        - InitializeInstanceElements ([link](https://tc39.es/ecma262/#sec-initializeinstanceelements))
            - `Let _methods_ be the value of _constructor_.[[PrivateMethods]].`
        - FulfillPromise ([link](https://tc39.es/ecma262/#sec-fulfillpromise))
            - `Assert: The value of _promise_.[[PromiseState]] is ~pending~.`
    - **extensive report**: [available here](./occurrences/property-thevalueof.md)
2. `the value of _ref_'s [[Property]] attribute`
    - **examples**:
        - OrdinaryGetOwnProperty ([link](https://tc39.es/ecma262/#sec-ordinarygetownproperty))
            - `Set _D_.[[Value]] to the value of _X_'s [[Value]] attribute.`
    - **extensive report**: [available here](./occurrences/property-thevalueof-attribute.md)
3. `_ref_'s [[Property]] value`
    - **examples**:
        - SetFunctionName ([link](https://tc39.es/ecma262/#sec-setfunctionname))
            - `Let _description_ be _name_'s [[Description]] value.`
    - **extensive report**: [available here](./occurrences/property-genitive.md)
4. `_ref_.[[Property]]` 
    - **occurrences**: 1775 
    - **regex**: `1\..*_.*_\.[^s]+.*`
    - **examples**:
        - SetFunctionName ([link](https://tc39.es/ecma262/#sec-setfunctionname))
            - `Set _name_ to _name_.[[Description]].`
            - `Set _F_.[[InitialName]] to _name_.`
            - `Optionally, set _F_.[[InitialName]] to _name_.`
    - An extensive report is not provided here, as this seems to be the default notation in the spec.

Since all notations imply the same semantics, I suggest updating the specification to use only notation 4.

| Notation | Current                                                                 | Suggested                                 |
|----------|-------------------------------------------------------------------------|---------------------------------------|
| 1        | Let _methods_ be the value of _constructor_.[[PrivateMethods]].         | Let _methods_ be _constructor_.[[PrivateMethods]]. |
| 2        | Set _D_.[[Value]] to the value of _X_'s [[Value]] attribute.            | Set _D_.[[Value]] to _X_.[[Value]].   |
| 3        | Let _description_ be _name_'s [[Description]] value.                    | Let _description_ be _name_.[[Description]]. |

## If-Then-Else Steps with Single If/Else Step

### Description of the Issue


Conditional steps that include a non-empty else step, where neither the then nor else steps are blocks, are expressed using different notations. Additionally, steps that make use of the `otherwise` keyword (instead of `else`) are expressed using several different notations.

1. **If-Else in the Same Step ("else" keyword), with Optional Else-If:**
    - `If cond, thenStep[; else if otherCond, otherThenStep]*; else elseStep`
        - **examples**:
            - ValidateAndApplyPropertyDescriptor ([link](https://tc39.es/ecma262/#sec-validateandapplypropertydescriptor))
                - `If _Desc_ has a [[Configurable]] field, let _configurable_ be _Desc_.[[Configurable]]; else let _configurable_ be _current_.[[Configurable]].`
        - **extensive report**: [available here](./occurrences/ifelse-same-step.md)
2. **If-Else in the Same Step ("otherwise" keyword):**
    
    a. `If cond, thenStep; otherwise elseStep`
    - **examples**:
        - IsPropertyReference ([link](https://tc39.es/ecma262/#sec-ispropertyreference))
            - `If _V_.[[Base]] is an Environment Record, return *false*; otherwise return *true*.`
    - **extensive report**: [available here](./occurrences/ifelse-same-step-otherwise.md)
    
    b. `If cond, thenStep; otherwise, elseStep`
    - **examples**:
        - SameValueNonNumber ([link](https://tc39.es/ecma262/#sec-samevaluenonnumber))
            - `If _x_ and _y_ have the same length and the same code units in the same positions, return *true*; otherwise, return *false*.`
    - **extensive report**: [available here](./occurrences/ifelse-same-step-otherwise-comma.md)

    c. `If cond, thenStep. Otherwise elseStep`
    - **examples**:
        - Set.prototype.symmetricDifference ([link](https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference))
            - `1. If _resultIndex_ is ~not-found~, let _alreadyInResult_ be *false*. Otherwise let _alreadyInResult_ be *true*.`
    - **extensive report**: [available here](./occurrences/ifelse-same-step-otherwise-capital.md)
    
    d. `If cond, thenStep. Otherwise, elseStep`
    - **examples**:
        - Number::exponentiate ([link](https://tc39.es/ecma262/#sec-numeric-types-number-exponentiate))
            - `1. If _exponent_ > *+0*𝔽, return *+∞*𝔽. Otherwise, return *+0*𝔽.`
    - **extensive report**: [available here](./occurrences/ifelse-same-step-otherwise-capital-comma.md)

3. **If-Else in Different Steps:**
    ```markdown
        If cond, thenStep
        Else, elseStep
    ``` 
    - **examples**:
        - ReturnIfAbrupt ([link](https://tc39.es/ecma262/#sec-returnifabrupt))
            ```
            1. If _argument_ is an abrupt completion, return Completion(_argument_).
            1. Else, set _argument_ to _argument_.[[Value]].
            ```
    - **extensive report**: [available here](./occurrences/ifelse-separate-step.md)

I suggest the following updates to the spec:
- Enforce the use `else` over `otherwise`, as the latter has many inconstistent notations and appears less frequently than the `else` keyword in the specification text.
- Enforce a consistent style for specifying if-then-else steps that do not require then/else blocks (choose between notation 1/2 or notation 3).

## Algorithms Represented as Tables

### Description of the Issue

Some algorithms in the specification are defined using tables surrounded by an `emu-table` tag. This is problematic because ESMeta does not currently parse algorithms specified in this format.

I suggest to convert these occurrences into algorithms defined as steps surrounded by an `emu-alg` tag:
- ToObject ([link](https://tc39.es/ecma262/#sec-toobject))
- RequireObjectCoercible ([link](https://tc39.es/ecma262/#sec-requireobjectcoercible))

## CreateIntrinsics

### Description of the issue

The following step in the CreateIntrinsics ([link](https://tc39.es/ecma262/#sec-createintrinsics)) abstract operation is remarkably large:

```markdown
Set fields of realmRec.[[Intrinsics]] with the values listed in Table 6. The field names are the names listed in column one of the table. The value of each field is a new object value fully and recursively populated with property values as defined by the specification of each object in clauses 19 through 28. All object property values are newly created object values. All values that are built-in function objects are created by performing CreateBuiltinFunction(steps, length, name, slots, realmRec, prototype) where steps is the definition of that function provided by this specification, name is the initial value of the function's "name" property, length is the initial value of the function's "length" property, slots is a list of the names, if any, of the function's specified internal slots, and prototype is the specified value of the function's [[Prototype]] internal slot. The creation of the intrinsics and their properties must be ordered to avoid any dependencies upon objects that have not yet been created.
```

As a consequence, it's not parsed by ESMeta.

I suggest to break this step into smaller, more manageable steps to improve readability and facilitate parsing by ESMeta.
