const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값을 변경함
const INSERT = 'todos/INSERT'; //새로운 투두를 등록함
const TOGGLE = 'todos/TOGGLE'; //투두를 체크 및 해제
const REMOVE = 'todos/REMOVE'; //투두 제거

export const changeInput = (input) => {
  type: CHANGE_INPUT, input;
};
