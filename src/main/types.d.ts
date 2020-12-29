import { JoinWith, SplitOnAny, UncapitalizeFirst} from "./utils"

/**
 * Formats the given string in camel case
 * 
 * @example
 * CamelCaseString<"HelloWorld"> == "helloWorld"
 * CamelCaseString<"Hello World"> == "helloWorld"
 * CamelCaseString<"hello-WORLD"> == "helloWORLD"
 * CamelCaseString<"hello_World"> == "helloWorld"
 * CamelCaseString<"HELLO WORLD"> == "hELLOWORLD"
 */
export type CamelCaseString<S extends string> = JoinWith<UncapitalizeFirst<SplitOnAny<S>>>

/**
 * Like `CamelCaseString` but without the constraint on the type paramater.
 * If the parameter is not of type `string`, leaves it unchanged.
 * Useful for mapped types.
 */
type CamelCaseString_<S> = 
  S extends string
    ? JoinWith<UncapitalizeFirst<SplitOnAny<S>>>
    : S

/**
 * Formats the top level keys of the given record in camel case
 * 
 * @example
 * CamelCaseRecordK<{
 *  "hello-world": 1
 *  "bye_world": {
 *    "foo_bar": 1
 *   }
 * }> == {
 *  "helloWorld": 1
 *  "byeWorld": {
 *    "foo_bar": 1
 *   }
 * }
 */
export type CamelCaseRecordK<R extends Record<string, unknown>> = {
  [K in keyof R as CamelCaseString_<K>]: R[K]
}

/**
 * Recursively formats all keys of the given record in camel case
 * 
 * @example
 * CamelCaseRecordDeepK<{
 *  "hello-world": 1
 *  "bye_world": {
 *    "foo_bar": 1
 *   }
 * }> == {
 *  "helloWorld": 1
 *  "byeWorld": {
 *    "fooBar": 1
 *   }
 * }
 */
export type CamelCaseRecordDeepK<R extends Record<string, unknown>> = {
  [K in keyof R as CamelCaseString_<K>]: R[K] extends Record<string, unknown>
    ? CamelCaseRecordDeepK<R[K]>
    : R[K]
}

/**
 * Formats the top level values of the given record in camel case
 * 
 * @example
 * CamelCaseRecordV<{
 *  a: "hello-world"
 *  b: "bye-world"
 *  c: "foo bar"
 *  d: {
 *    a: "hello-world"
 *  }
 * }> == {
 *  a: "helloWorld"
 *  b: "byeWorld"
 *  c: "fooBar"
 *  d: {
 *    a: "hello-world"
 *  }
 * }
 */
export type CamelCaseRecordV<R extends Record<string, unknown>> = {
  [K in keyof R]: CamelCaseString_<R[K]>
}

/**
 * Recursively formats all values of the given record in camel case
 * 
 * @example
 * CamelCaseRecordDeepV<{
 *  a: "hello-world"
 *  b: "bye-world"
 *  c: "foo bar"
 *  d: {
 *    a: "hello-world"
 *  }
 * }> == {
 *  a: "helloWorld"
 *  b: "byeWorld"
 *  c: "fooBar"
 *  d: {
 *    a: "helloWorld"
 *  }
 * }
 */
export type CamelCaseRecordDeepV<R extends Record<string, unknown>> = {
  [K in keyof R]: R[K] extends Record<string, unknown>
    ? CamelCaseRecordDeepV<R[K]>
    : CamelCaseString_<R[K]>
}

/**
 * Formats the top level keys and values of the given record in camel case
 * 
 * @example
 * CamelCaseRecordKV<{
 *  "hello-world": "hello-world"
 *  "bye_world": {
 *    "foo_bar": "foo_bar"
 *   }
 * }> == {
 *  "helloWorld": "helloWorld"
 *  "byeWorld": {
 *    "foo_bar": "foo_bar"
 *   }
 * }
 */
export type CamelCaseRecordKV<R extends Record<string, unknown>> = {
  [K in keyof R as CamelCaseString_<K>]: CamelCaseString_<R[K]>
}

/**
 * Recursively formats all keys and values of the given record in camel case
 * 
 * @example
 * CamelCaseRecordDeepKV<{
 *  "hello-world": "hello-world"
 *  "bye_world": {
 *    "foo_bar": "foo_bar"
 *   }
 * }> == {
 *  "helloWorld": "helloWorld"
 *  "byeWorld": {
 *    "fooBar": "fooBar"
 *   }
 * }
 */
export type CamelCaseRecordDeepKV<R extends Record<string, unknown>> = {
  [K in keyof R as CamelCaseString_<K>]: R[K] extends Record<string, unknown>
    ? CamelCaseRecordDeepKV<R[K]>
    : CamelCaseString_<R[K]>
}
