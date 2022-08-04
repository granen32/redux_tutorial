const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
// 액션함수 생성

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기값 설정
const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
  }
}

export default counter;
