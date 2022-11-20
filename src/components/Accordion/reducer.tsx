 export const TOOGLE_COLLAPSED = "TOOGLE-COLLAPSED"
 export type StateType = {
    collapsed: boolean
   } 
   export type ActionType = {
    type: string
   } 

  export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type){
    case TOOGLE_COLLAPSED: 
    return { ...state, collapsed: !state.collapsed }
    default: 
    throw new Error ('wrong action type')
  }
}