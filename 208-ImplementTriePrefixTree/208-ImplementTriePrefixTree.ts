// Last updated: 16/7/2026, 9:19:49 pm
class TrieNode {
    endOfTheWord: Boolean;
    children: Map<string, TrieNode>;
    constructor() {
        this.endOfTheWord = false;
        this.children = new Map();
    }
}
class Trie {
    tree: TrieNode;
    constructor() {
        this.tree = new TrieNode();
    }

    insert(word: string): void {
        let root = this.tree;
        for (let i = 0; i < word.length; i++) {
            if (!root.children.has(word[i])) {
                root.children.set(word[i], new TrieNode());
            }
            root = root.children.get(word[i])!;
        }
        root.endOfTheWord = true;
    }

    search(word: string): boolean {
        let root = this.tree;
        for (let i = 0; i < word.length; i++) {
            if (!root.children.has(word[i])) {
                return false;
            }
            root = root.children.get(word[i])!;
        }
        if (root.endOfTheWord === false) return false;
        return true;
    }

    startsWith(prefix: string): boolean {
        let root = this.tree;
        for (let i = 0; i < prefix.length; i++) {
            if (!root.children.has(prefix[i])) {
                return false;
            }
            root = root.children.get(prefix[i])!;
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */