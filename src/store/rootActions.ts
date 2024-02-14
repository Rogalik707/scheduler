import { RootState } from "./store"

export const IMPORT_STORE_ACTION = 'IMPORT_STORE'
export const importStateFromJson = (fileContent: string) => {
  const {subsReducer, topTabReducer} = JSON.parse(fileContent) as RootState
  return {
    type: IMPORT_STORE_ACTION,
    payload: { subsReducer, topTabReducer },
  }
}
