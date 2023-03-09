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
            console.log("Cache Hit");
            this.list.delete(val);
            this.list.push_front(val);
            this.list.print();
            return val;
        }
        if (this.hash.size < this.length) {
            console.log("Cache Miss");
            this.hash.set(val, val);
            this.list.push_front(val);
            this.list.print();
            return val;
        }
        console.log("Cache Full");
        var valToBeDeleted = this.list.pop_back();
        if (valToBeDeleted)
            this.hash.delete(valToBeDeleted);
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
