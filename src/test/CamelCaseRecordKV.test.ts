import { assert, IsExact } from "conditional-type-checks"
import { CamelCaseRecordKV } from "../main/index"

assert<IsExact<
  CamelCaseRecordKV<{
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
  CamelCaseRecordKV<{
    "foo-bar": "foo-bar"
    "one two": "one two"
    "hello_world": "hello_world"
    "foobar": "foobar"
    "nested": {
      "foo-bar": "foo-bar"
    }
  }>,
  {
    "fooBar": "fooBar"
    "oneTwo": "oneTwo"
    "helloWorld": "helloWorld"
    "foobar": "foobar"
    "nested": {
      "foo-bar": "foo-bar"
    }
  }
>>(true)

assert<IsExact<
  CamelCaseRecordKV<{
    "foo-bar": "foo-bar"
    "foo bar": "one two"
    "hello_world": "hello_world"
    "foobar": "foobar"
  }>,
  {
    "fooBar": "fooBar" | "oneTwo"
    "helloWorld": "helloWorld"
    "foobar": "foobar"
  }
>>(true)
