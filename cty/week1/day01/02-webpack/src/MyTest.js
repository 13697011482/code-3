function decorator(target){ //定义一个装饰器 target指被装饰的类
  console.log('decorator');
  console.log(target);
  target.prototype.cty = () => {
    setTimeout(() => {
      console.log("cty");
    } , 3000)
  }
}
@decorator
class MyTest{
  state = {
    list : ['111','222']
  }
  constructor(){
    this.message = 'cty'
  }
  say(){
    console.log('hello world123');
    console.log(this.state.list);
  }
}
const fn = () => {
  // console.log('hello webpack');
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('12345');
    } , 2000)
  })
}
// export default new MyTest()
const myTest = new MyTest()
export {
  myTest,
  fn as default
}