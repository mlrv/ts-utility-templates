import { assert, IsExact } from "conditional-type-checks"
import { CamelCaseRecordV } from "../main/index"

assert<IsExact<
  CamelCaseRecordV<{
    "foo-bar": "foo-bar"
    "one two": "one two"
    "hello_world": "hello_world"
    "foobar": "foobar"
  }>,
  {
    "foo-bar": "fooBar"
    "one two": "oneTwo"
    "hello_world": "helloWorld"
    "foobar": "foobar"
  }
>>(true)

assert<IsExact<
  CamelCaseRecordV<{
    "foo-bar": "foo-bar"
    "one two": "one two"
    "hello_world": "hello_world"
    "foobar": "foobar"
    "nested": {
      "foo-bar": "foo-bar"
    }
  }>,
  {
    "foo-bar": "fooBar"
    "one two": "oneTwo"
    "hello_world": "helloWorld"
    "foobar": "foobar"
    "nested": {
      "foo-bar": "foo-bar"
    }
  }
>>(true)
