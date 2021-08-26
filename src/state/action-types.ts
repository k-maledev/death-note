export enum ActionType {
  SIGN_IN = '로그인 요청',
  SIGN_OUT = '로그아웃',
  UPDATE_KILLED_COUNT = '유저 스코어 업데이트',
  UPDATE_VICTIMS = '죽인 범죄자 목록 업데이트',
  FETCH_RANKING = '랭킹 데이터 읽기 요청',
  FETCH_RANKING_SUCCESS = '랭킹 데이터 읽기 성공',
  FETCH_RANKING_FAILURE = '랭킹 데이터 읽기 실패',
}
