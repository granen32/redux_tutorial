const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값을 변경함
const INSERT = 'todos/INSERT'; //새로운 투두를 등록함
const TOGGLE = 'todos/TOGGLE'; //투두를 체크 및 해제
const REMOVE = 'todos/REMOVE'; //투두 제거

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3; //insert가 호출될 때마다 1씩 더해짐

export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리덕스 기초 배우기',
      done: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.doen } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todos;
