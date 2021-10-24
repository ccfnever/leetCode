// 二叉树
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null
    this.left = null
    this.right = null
  }

  insert(val) {
    this.root = this._insertNode(this.root, val)
  }

  _insertNode(node, element) {
    if (node === null) {
      node = new Node(element)
    } else if (element < node.val) {
      node.left = this._insertNode(node.left, element)
    } else if (element > node.val) {
      node.right = this._insertNode(node.right, element)
    }
    return node
  }

}

let tree = new BinarySearchTree(10)
tree.insert(10)
tree.insert(5)
tree.insert(2)

console.log(JSON.stringify(tree.root, null, 4))

