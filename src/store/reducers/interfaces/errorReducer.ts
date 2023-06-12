export interface IErrorReducer {
  error: string;
}

export interface IAction {
  type: string;
  error: string;
}
