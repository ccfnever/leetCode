/**
将一个原json,解析成一个目标json
原json中，如果碰到type值为fordel的，是要去掉的，但如果其下面还有type值为非fordel的，是要保留的
例：
原JSON
{
  type: 'a',
  content: {
    type: 'fordel',
    content: {
      type: 'b'
    }
  }
}
或
{
  type: 'fordel',
  content: {
    type: 'a',
    content: {
      type: 'fordel',
      content: {
        type: 'b'
      }
    }
  }
}
转换后
{
  type: 'a',
  content: {
    type: 'b',
  }
}
 */

function cleanFordel(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const res = Array.isArray(obj) ? [] : {};

  // 拦截过滤，遇到 type === 'fordel'，把 content，提高到当前层级
  if (obj.type === 'fordel') {
    return cleanFordel(obj.content)
  }

  for (let key in obj) {
    res[key] = cleanFordel(obj[key]);
  }

  return res;
}

const obj = {
  type: 'a',
  content: [
    {
      type: 'fordel',
      content: {
        type: 'b'
      }
    },
    {
      type: 'fordel',
      content: {
        type: 'c',
        content: [
          {
            type: 'd',
          },
          {
            type: 'e'
          }
        ]

      }
    }
  ]
}

console.log(JSON.stringify(cleanFordel(obj)))
