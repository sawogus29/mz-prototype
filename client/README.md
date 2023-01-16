# 의존성 설치

## Repository Clone 시

```bash
yarn install
```

## 의존성 추가

```bash
npx expo install package-name
```

- expo package의 경우 expo install로 설치해야 합니다.
- 일반 npm package의 경우도 expo install이 내부적으로 npm을 호출해 설치됩니다.

# 실행

## Expo go 사용 시 (Android, IOS)

1. expo 개발서버 실행
   ```bash
   yarn start
   ```
   - 개발서버의 URL과 QR Code가 터미널에 출력됩니다.
   - 일반적으로 19000번 포트에서 개발서버가 실행됩니다.
2. Android, IOS 기기에서 Expo Go 앱을 실행하고,<br/>
   `Scan QR Code` 혹은 `Enter URL Manually`을 통해 개발서버에 연결합니다.

## Android 에뮬레이터, 혹은 USB로 직접 Android 기기 연결 시

```
yarn run android
```

## IOS 에뮬레이터, 혹은 USB로 직접 IOS 기기 연결 시

```
yarn run ios
```

## Web

```
yarn run web
```

- 일반적으로 19006번 포트에 개발서버가 실행됩니다.

# 빌드

TODO

# 프로젝트 생성 과정

> 주의!<br/>이 문단은 기록용이므로, 아래 명령어를 따라하실 필요는 없습니다.

> 이 repo를 clone한 경우에는 [의존성 설치](#의존성-설치) 항목을 따라주시기 바랍니다.

1. create-next-app의 template으로 생성
   ```bash
   npx create-expo-app --template
   # navigation(Typescript) 템플릿 선택
   ```
2. expo-for-web 사용을 위해 의존성 설치
   ```bash
   npx expo install @expo/webpack-config
   ```

# 참고자료

- [create-expo-app](https://docs.expo.dev/get-started/create-a-new-app)
