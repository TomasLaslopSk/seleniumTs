import { sum } from "../../.."
import { assert } from 'chai';

describe("first unit test suite", () => {
    it("first unit test", () => {
        assert.equal(sum(2,2), 4)
    })
})