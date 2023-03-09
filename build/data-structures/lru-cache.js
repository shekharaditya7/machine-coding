"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var doubly_linked_list_1 = __importDefault(require("./doubly-linked-list"));
var LRUCache = /** @class */ (function () {
    function LRUCache(length) {
        this.length = length;
        this.list = new doubly_linked_list_1.default();
        this.hash = new Map();
    }
    LRUCache.prototype.get = function (val) {
        if (this.hash.has(val)) {
            // Cache Hit, update the order
            this.list.delete(val);
            this.list.push_front(val);
            this.list.print();
            return val;
        }
        if (this.hash.size < this.length) {
            // Cache Miss
            this.hash.set(val, val);
            this.list.push_front(val);
            this.list.print();
            return val;
        }
        // Cache full, delete the least recently used entry
        var valToBeDeleted = this.list.pop_back();
        if (valToBeDeleted === null || valToBeDeleted === void 0 ? void 0 : valToBeDeleted.val)
            this.hash.delete(valToBeDeleted.val);
        this.hash.set(val, val);
        this.list.push_front(val);
        this.list.print();
        return val;
    };
    return LRUCache;
}());
// const lruCache = new LRUCache(4);
// lruCache.get(1);
// lruCache.get(2);
// lruCache.get(3);
// lruCache.get(4);
// lruCache.get(5);
// lruCache.get(4);
exports.default = LRUCache;
