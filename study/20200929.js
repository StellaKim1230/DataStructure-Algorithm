// 자물쇠와 열쇠 (완전탐색)
const key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]]
const lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]

// null, null, null, null, null, null, null, null, null
// null, null, null, null, null, null, null, null, null
// null, null, null, null, null, null, null, null, null
// null, null, null, 1[3, 3], 1[3, 4], 1[3, 5], null, null, null
// null, null, null, 1[4, 3], 1[4, 4], 0[4, 5], null, null, null
// null, null, null, 1[5, 3], 0[5, 4], 1[5, 5], null, null, null
// null, null, null, null, null, null, null, null, null
// null, null, null, null, null, null, null, null, null
// null, null, null, null, null, null, null, null, null

function solution(key, lock) { // key <= lock
  let answer = true;
  const len = lock.length;

  // 백그라운드 배열 생성
  const background = Array.from(Array(len * 3), () => Array(len * 3).fill(null));
  // 백그라운드 가운데에 lock 세팅

  for (let i = len; i < len * 2; i++) {
    for (let j = len; j <len * 2; j++) {
      console.log(i - len, len*2 - len)
      // background[3, 3] = lock[i - lock.len, len * 2 - lock.len]
      // background[3, 4] = lock[0, 1]
      // background[3, 5] = lock[0, 2]
      // background[4, 3] = lock[1, 0]
      // background[4, 4] = lock[1, 1]
      // background[4, 5] = lock[1, 2]
      // background[5, 3] = lock[2, 0]
      // background[5, 4] = lock[2, 1]
      // background[5, 5] = lock[2, 2]
      // console.log(i, j, i - lock.len, len * 2 - lock.len)
    } 
  }

  // key를 회전시키면서 탐색
  // key를 이동시키면서 탐색

  // isAnswer이라는 함수 생성 (답인지 여부 판단)
}

solution(key, lock)