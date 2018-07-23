import Mock from 'mockjs'
// https://github.com/nuysoft/Mock/wiki/Getting-Started

// 获取对象
Mock.mock('/data/json', /post|get/i, (req, res) => {
  return {
    data: ['a', 'b']
  }
})

console.log('%c Mockjs Server Success!', 'background:#999;color:blue');
