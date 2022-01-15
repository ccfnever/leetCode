// 手写 promise
// 先凭着自己的记忆写写看
/**
 * 
 * @param {function} executor 
 */
function MyPromise(executor) {
  // 先定义初始状态
  this.status = 'pending'

  // 定义 的返回值
  this.resolveValue = null
  this.rejectValue = null

  // 定义 resolve 和 reject 的执行队列，给 then 消费
  this.resolveFnList = []
  this.rejectFnList = []

  // 定义 resolve 方法
  const resolve = (val) => {
    setTimeout(() => {
      this.status = 'fulfilled'
      this.resolveValue = val
      this.resolveFnList.forEach(c => c(val))
    }, 0)
  }

  // 定义 reject 方法
  const reject = (val) => {
    setTimeout(() => {
      this.status = 'rejected'
      this.rejectValue = val
      this.rejectFnList.forEach(c => c(val))
    })
  }

  // 实例化的时候执行实参函数
  try {
    executor(resolve, reject)
  } catch (err) {
    reject(err)
  }


  // 在实例上定义then
  MyPromise.prototype.then = function (onFulfilled, onRejected) {
    let promise2

    // resolve 时
    if (this.status === 'fulfilled') {
      return promise2 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.resolveValue)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
      })
    }

    // reject
    if (this.status === 'rejected') {
      return promise2 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            const result = onRejected(this.rejectValue)
            reject(result)
          } catch (error) {
            reject(error)
          }
        }, 0)
      })
    }

    if (this.status === 'pending') {
      return promise2 = new MyPromise((resolve, reject) => {
        this.resolveFnList.push(() => {
          try {
            const result = onFulfilled(this.resolveValue)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })

        this.rejectFnList.push(() => {
          try {
            const result = onRejected(this.rejectValue)
            reject(result)
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
