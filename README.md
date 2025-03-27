# 개미 시뮬레이션

## 소개

개미가 페로몬을 분비하며 먹이를 찾아가는 과정을 직접 구현해보고 싶어 시작하게 되었습니다.

**각각의 개미들은 자취를 남기며 먹이를 찾아다니게 되고 먹이를 발견하면 해당 자취를 통해 먹이와 집을 잇는 경로를 만들어 다른 개미들도 이용**하게 되는 모습을 구현해보았습니다.

### 데모

먹이를 탐색하는 개미:

![먹이 탐색](https://github.com/iai6203/ant-simulation/blob/main/docs/assets/path-find.gif?raw=true)

길을 따라가는 개미:

![길 따라가기](https://github.com/iai6203/ant-simulation/blob/main/docs/assets/path-follow.gif?raw=true)

여러 길을 따라가는 개미:

![여러 길 따라가기](https://github.com/iai6203/ant-simulation/blob/main/docs/assets/multiple-path.gif?raw=true)

## 기술 스택

- **HTMLCanvas**
- TypeScript
- Webpack

## 시작하기

빌드:

 ```shell
 npm run build:dev
 # or
 npm run build:prod
 ```

실행:

`./dist/index.html` 파일을 브라우저로 실행하면 데모를 확인하실 수 있습니다.
