# 프론트엔드 개발자 과제

email: heehee4898@gmail.com

요구사항은 모두 구현 완료하였습니다.

### 실행 방법
1. `env` 파일에 `REACT_APP_GIT_ACCESS_TOKEN`에 이메일로 보낸 key 값을 넣어주세요.

2. ```npm i```
3. ```npm start```

* * *

### 개발 작업 환경
1. node --version ```v12.22.7```
2. npm --version ``` v6.14.1```
3. eslint --version ```v7.6.0```

* * *

### 다이얼그램

![image](https://user-images.githubusercontent.com/38110785/139554152-3d7cd53f-970b-4778-b3b2-c72d26b7e711.png)


* * *

### 작업 방식
1. UI구조 정하기
![image](https://user-images.githubusercontent.com/38110785/139542159-878671b2-5976-432c-9cc4-11b95204fbb2.png)

2. 프로젝트 환경 세팅

3. UI 구현

4. axios를 이용해 Git open API 호출하고 list로 출력

5. 같은 구조의 dataList 컴포넌트화

6. localstorage에 저장할 구조 설정, 저장 삭제 기능 구현
```
[
    {
        id: [unique key],
        name: [repository name],
        full_name: [owner+"/"+repository name],
    },
    {
        id: ,
        name: ,
        full_name: ,
    }
    ...
]

```

7. pagination 구현(요청은 10개씩 받고, 페이지네이션 페이지 버튼을 누를 때마다 API 호출)

8. styled-components로 반응형 작업

9. 렌더링 최적화 작업


* * *
감사합니다.