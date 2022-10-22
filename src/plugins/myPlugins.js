const myPlugins = {}

myPlugins.install = function(Vue, options) {
    // console.log(Vue, options);
  Vue.directive(options.name, (element, params) => {
    console.log(params);
    element.innerHTML = params.expression.toUpperCase()
  }
  )
}

export default myPlugins