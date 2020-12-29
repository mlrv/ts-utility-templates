import { assert, IsExact } from "conditional-type-checks"
import { CamelCaseRecordDeepKV } from "../main/index"

assert<IsExact<
  CamelCaseRecordDeepKV<{
    "foo-bar": "foo-bar"
    "one two": "one two"
    "hello_world": "hello_world"
    "foobar": "foobar"
  }>,
  {
    "fooBar": "fooBar"
    "oneTwo": "oneTwo"
    "helloWorld": "helloWorld"
    "foobar": "foobar"
  }
>>(true)

assert<IsExact<
  CamelCaseRecordDeepKV<{
    "foo-bar": "foo-bar"
    "one two": "one two"
    "hello_world": "hello_world"
    "foobar": "foobar"
    "nested": {
      "foo-bar": "foo-bar"
      "nested": {
        "foo-bar": "foo-bar"
      }
    }
  }>,
  {
    "fooBar": "fooBar"
    "oneTwo": "oneTwo"
    "helloWorld": "helloWorld"
    "foobar": "foobar"
    "nested": {
      "fooBar": "fooBar"
      "nested": {
        "fooBar": "fooBar"
      }
    }
  }
>>(true)

