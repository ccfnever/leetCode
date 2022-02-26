// 手写 promise 复杂版
/**
 * 
 * @param {function} executor 
 */
function MyPromise(executor) {
  this.status = 'pending'
  this.value = null
  this.onFulfilledArray = []
  this.onRejectedArray = []

  const resolve = (val) => {
    if (val instanceof MyPromise) {
      return val.then(resolve, reject)
    }
    setTimeout(() => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = val
        // 这里要执行 Promise 实例化的时候定义的链式调用 then，有可能有多个 then，所以需要用数组保存
        this.onFulfilledArray.forEach(c => c(val))
      }
    })
  }

  const reject = (val) => {
    setTimeout(() => {
      this.status = 'rejected'
      this.value = val
      this.onRejectedArray.forEach(c => c(val))
    })
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }

  const resolvePromise = (promise, result, resolve, reject) => {
    // 这里是为了防止出现死循环
    if (promise === result) {
      return new TypeError('error due to circular reference')
    }
    let consumed = false // 是否已经执行过 onResolve 或者 onReject
    let thenable

    if (result instanceof MyPromise) {
      if (result.status === 'pending') {
        result.then(function (data) {
          // 递归调用
          resolvePromise(promise, data, resolve, reject)
        }, reject)
      } else {
        result.then(resolve, reject)
      }

      return
    }

    // 判断 result 是不是复杂类型
    let isComplexResult = target => (typeof target === 'function' || typeof target === 'object') && (target !== null)

    if (isComplexResult(result)) {
      try {
        thenable = result.then
        if (typeof thenable === 'function') {
          thenable.call(result, function (data) {
            if (consumed) return
            consumed = true
            return resolvePromise(promise, data, resolve, reject)
          }, function (error) {
            if (consumed) return
            consumed = true
            return reject(error)

          })
        } else {
          resolve(result)
        }
      } catch (error) {
        if (consumed) return
        consumed = true
        return reject(error)

      }
    } else {
      resolve(result)
    }
  }

  MyPromise.prototype.then = function (onResolve, onReject) {
    onResolve = typeof onResolve === 'function' ? onResolve : data => data
    onReject = typeof onReject === 'function' ? onReject : data => data

    let Promise2
    if (this.status === 'fulfilled') {
      return Promise2 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          const result = onResolve(this.value)
          resolvePromise(Promise2, result, resolve, reject)
        })
      })
    }

    if (this.status === 'rejected') {
      return Promise2 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            let result = onReject(this.value)
            resolvePromise(Promise2, result, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      })
    }

    if (this.status === 'pending') {
      return Promise2 = new MyPromise((resolve, reject) => {
        this.onFulfilledArray.push(value => {
          try {
            let result = onResolve(value)
            resolvePromise(Promise2, result, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })

        this.onRejectedArray.push(value => {
          try {
            let result = onReject(value)
            resolvePromise(Promise2, result, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })

      })
    }
  }

}


// test
const p1 = new MyPromise((resolve, reject) => {
  console.log('我是 MyPromise 的构造函数实例化')
  setTimeout(() => {
    console.log('setTime')
    resolve('哈哈哈,1')
  }, 1000)

}).then((val) => {
  console.log('val', val)
  return '我是第二个then'
}).then(val => {
  console.log('val2', val)
})
console.log('start')


const assert = new Proxy({}, {
  get: function () {

  },
  set: function (target, key, value) {
    console.log('========')
    console.log(target, key, value)
  }
})

const aaa = '我没有钱'

assert['对,你没有钱'] = aaa === '我没有钱'


for(let i =0;i<10;i++){
  i++
}
console.log(i)