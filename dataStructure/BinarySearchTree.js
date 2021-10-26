// 搜索二叉树
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

  // 中序遍历，即以小到大的顺序遍历所有节点
  inOrderTraverse(node, callBack) {
    if (!node) return false
    this.inOrderTraverse(node.left, callBack)
    callBack(node.val)
    this.inOrderTraverse(node.right, callBack)
  }

  // 前序遍历
  preOrderTraverseNode(node, callBack) {
    if (!node) return false
    callBack(node.val)
    this.preOrderTraverseNode(node.left, callBack)
    this.preOrderTraverseNode(node.right, callBack)
  }

  // 后序遍历
  postOrderTraverseNode(node, callBack) {
    if (!node) return false
    callBack(node.val)
    this.postOrderTraverseNode(node.left, callBack)
    this.postOrderTraverseNode(node.right, callBack)
  }

}

let tree = new BinarySearchTree(10)
tree.insert(3)
tree.insert(5)
tree.insert(6)
tree.insert(10)
tree.insert(11)
tree.insert(12)
tree.insert(13)
tree.insert(7)
tree.insert(8)
tree.insert(9)


console.log(tree.inOrderTraverse(tree.root,(val)=>{console.log(val)}))
// console.log(JSON.stringify(tree.root, null, 4))

