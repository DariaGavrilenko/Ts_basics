import { reducer, TOOGLE_COLLAPSED } from "./reducer"

test('collapsed should be true', () => {

    const state = {
        collapsed: false
    }

    const updateState = reducer(state, { type: TOOGLE_COLLAPSED })

    expect(updateState.collapsed).toBe(true)

})
test('collapsed should be false', () => {

    const state = {
        collapsed: true
    }

    const updateState = reducer(state, { type: TOOGLE_COLLAPSED })

    expect(updateState.collapsed).toBe(false)

})

test('should be error with uncorrect type', () => {

    const state = {
        collapsed: true
    }

    expect(()=>{reducer(state,{type:'FAKE-TYPE'})}).toThrowError()

})