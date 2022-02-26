// 广度优先搜索
const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 3,
          children: null
        },
        {
          val: 4,
          children: null
        }
      ]
    },
    {
      val: 5,
      children: [
        {
          val: 6
        }
      ]
    }
  ]
}
/**
 * 
 * 广度优先搜索，可以使用一个数组模拟队列，来实现
 */
const bfsFn = root => {
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    console.log(node.val)
    if (node.children) node.children.forEach(item => {
      queue.push(item)
    })
  }
}
bfsFn(tree)