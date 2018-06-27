const mutations = {
  defaultbrand (state, params) {
    state.brands.length = []
  },
  addbrand (state, params) {
    for (let i = 0; i < state.brands.length; i++) {
      const el = state.brands[i]
      if (el.name == params.name) {
        alert('不能选择重复的品牌！')
        return
      }
    }
    state.brands.push(params)
    history.back()
  },
  rmbrand (state, params) {
    for (let i = 0; i < state.brands.length; i++) {
      const el = state.brands[i]
      if (el.name == params.name) {
        state.brands.splice(i, 1)
      }
    }
  },
  modifybrand (state, params) {
    for (let i = 0; i < state.brands.length; i++) {
      const el = state.brands[i]
      if (el.name == params.name) {
        alert('您已经选择该品牌')
        return
      }
      state.brands[state.brandIndex] = params
      history.back()
      return
    }
  },
  changeindex (state, params) {
    state.brandIndex = params
  },
  addwenti (state, params) {
    state.brands[params.brandIndex].wentis[params.index].wtiValue = params.val
  }
}

export default mutations
