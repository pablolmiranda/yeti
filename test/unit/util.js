"use strict";

var vows = require("vows");
var assert = require("assert");

var util = require("../../lib/util");

vows.describe("Util").addBatch({
    "Given an object": {
        topic: function () {
            return {
                foo: "quux",
                modified: false
            };
        },
        "calling shallowCopy yields a new shallow copy": function (topic) {
            var copy;
            assert.strictEqual(topic.foo, "quux");
            assert.isFalse(topic.modified);
            copy = util.shallowCopy(topic);
            assert.strictEqual(copy.foo, "quux");
            assert.isFalse(copy.modified);
            copy.modified = true;
            assert.isTrue(copy.modified);
            assert.isFalse(topic.modified);
        }
    }
}).export(module);
