// Last updated: 16/7/2026, 9:19:45 pm
class TrieNode {
    endOfTheWord: boolean;
    children: Map<string, TrieNode>;
    constructor() {
        this.endOfTheWord = false;
        this.children = new Map();
    }
}

class WordDictionary {
    tree: TrieNode;
    constructor() {
        this.tree = new TrieNode();
    }

    addWord(word: string): void {
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
        function dfs(index: number, tree: TrieNode): boolean {
            let root = tree;
            for (let i = index; i < word.length; i++) {
                if (word[i] === '.') {
                    for (let node of root.children.values()) {
                        if (dfs(i + 1, node)) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if (!root.children.has(word[i])) {
                        return false;
                    }
                    root = root.children.get(word[i])!;
                }

            }
            return root.endOfTheWord;
        }
        return dfs(0, this.tree)
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */