"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var doubly_linked_list_1 = __importDefault(require("./doubly-linked-list"));
var linked_list_1 = __importDefault(require("./linked-list"));
var lru_cache_1 = __importDefault(require("./lru-cache"));
var queue_1 = __importDefault(require("./queue"));
module.exports = {
    DoublyLinkedList: doubly_linked_list_1.default,
    LinkedList: linked_list_1.default,
    LRUCache: lru_cache_1.default,
    Queue: queue_1.default,
};
