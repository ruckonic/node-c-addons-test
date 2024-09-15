import test from 'node:test'
import assert from 'node:assert'
import {math} from './utils/math.js'

test('math.add', () => {
  assert.strictEqual(math.add(1, 2), 3)
})
