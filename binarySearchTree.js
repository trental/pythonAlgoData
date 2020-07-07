class BinarySearchTree {
	constructor() {
		this.root = null;
		this.size = 0;
	}

	length() {
		return this.size;
	}

	put(key, val) {
		if (this.root) {
			this._put(key, val, this.root);
		} else {
			this.root = new TreeNode(key, val);
		}
		this.size++;
	}

	_put(key, val, currentNode) {
		if (key < currentNode.key) {
			if (currentNode.hasLeftChild()) {
				this._put(key, val, currentNode.leftChild);
			} else {
				currentNode.leftChild = new TreeNode(key, val, null, null, currentNode);
			}
		} else {
			if (currentNode.hasRightChild()) {
				this._put(key, val, currentNode.rightChild);
			} else {
				currentNode.rightChild = new TreeNode(
					key,
					val,
					null,
					null,
					currentNode
				);
			}
		}
	}

	setItem(k, v) {
		this.put(k, v);
	}

	get(key) {
		if (this.root) {
			let res = this._get(key, this.root);
			return res ? res.payload : null;
		} else {
			return null;
		}
	}

	_get(key, currentNode) {
		console.log(currentNode);
		if (!currentNode) {
			return null;
		} else if (currentNode.key === key) {
			return currentNode;
		} else if (key < currentNode.key) {
			return this._get(key, currentNode.leftChild);
		} else {
			return this._get(key, currentNode.rightChild);
		}
	}

	getItem(k) {
		return this.get(k);
	}
}

class TreeNode {
	constructor(key, val, left = null, right = null, parent = null) {
		this.key = key;
		this.payload = val;
		this.leftChild = left;
		this.rightChild = right;
		this.parent = parent;
	}

	hasLeftChild() {
		return this.leftChild;
	}

	hasRightChild() {
		return this.rightChild;
	}

	isLeftChild() {
		return this.parent && this.parent.leftChild == this;
	}

	isRightChild() {
		return this.parent && this.parent.rightChild == this;
	}

	isRoot() {
		return !this.parent;
	}

	isLeaf() {
		return !(this.rightChild || this.leftChild);
	}

	hasAnyChildren() {
		return this.rightChild || this.leftChild;
	}

	hasBothChildren() {
		return this.rightChild && this.leftChild;
	}

	replaceNodeData(key, value, lc, rc) {
		this.key = key;
		this.payload = value;
		this.leftChild = lc;
		this.rightChild = rc;
		if (this.hasLeftChild()) {
			this.leftChild.parent = this;
		}
		if (this.hasRightChild()) {
			this.rightChild.parent = this;
		}
	}
}

let bst = new BinarySearchTree();

console.log(bst.length());
console.log(bst.put(70, 'first'));
console.log(bst.put(31, 'second'));
console.log(bst.put(93, 'third'));
console.log(bst.put(94, 'fourth'));
console.log(bst.put(14, 'fifth'));
console.log(bst.put(23, 'sixth'));
console.log(bst.put(73, 'seventh'));
console.log(bst.root);
console.log(bst.get(14));
