// 深度优先搜索
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

const dfsFn = root => {
  console.log(root.val)
  if (root.children) root.children.forEach(dfsFn)
  // console.log('我出栈了', root.val)
}
dfsFn(tree)