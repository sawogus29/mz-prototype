# 시작하기

'시작하기' 항목은 이 repo를 clone한 후, 최초 1번만 수행하면 됩니다.

## 의존성 설치

```bash
yarn install
```

## prisma 설정

> 당장은 prisma를 사용하지 않지만, 나중을 위해 미리 prisma를 설정했습니다.

> 이 과정을 생략하면, `'@prisma/client did not initialize yet'` 에러가 발생합니다.

```bash
yarn prisma generate
```

# DB 설정

> 아직 DB는 사용하지 않으니, 지금은 DB설정 항목을 생략해도 됩니다.

## DB URL 설정

`.env` 파일의 `DATABASE_URL`을 실제 URL로 수정합니다.

## prisma schema 파일 수정 시

`./prisma/schema.prisma` 파일을 수정 시, 다음 명령어를 실행해야 합니다.

```bash
yarn prisma migrate
yarn prisma generate
```

# 실행

```bash
yarn dev
```

- 3000번 포트에서 개발 서버가 실행됩니다.

# 빌드

```bash
yarn build
```

# GraphQL API 추가

- `./appollo/` 폴더의 `schema`, `resolvers`를 통해 원하는 API를 구현하면 됩니다.
- resolver 함수의 `context` 인수를 통해, `prisma` 및 NextJS의 `req`, `res` 객체에 접근할 수 있습니다.

  ```javascript
  const myResolver = (parent, args, context, info) => {
     const users = context.prisma.user.findMany()
     const contentType = context.req.headers['content-type']
     ...
  }

  ```

# 프로젝트 생성 과정

> 주의!<br/>이 문단은 기록용이므로, 아래 명령어를 따라하실 필요는 없습니다.

> 이 repo를 clone한 경우에는 [시작하기](#의존성-설치) 항목을 따라주시기 바랍니다.

1. create-next-app의 typescript template으로 생성
   ```bash
   yarn create next-app@latest --ts
   ```
2. NextJS 프로젝트에 Apollo Server 추가
   - 의존성 설치
     ```bash
     yarn add @apollo/server graphql @as-integrations/next graphql-tag
     ```
   - `./pages/api/graphql.ts` 파일 추가
   - `./apollo` 폴더에 schema 및 resolver 추가
3. Apollo Server에 Prisma 추가
   - 의존성 설치
     ```bash
     yarn add -D prisma
     yarn add @prisma/client
     ```
   - `.env`, `./prisma/schema.prisma` 생성
     ```bash
     yarn prisma init
     ```
   - [DB 설정](#db-설정) 참고

# 참고자료

## NextJS

- [NextJS with Typescript](https://nextjs.org/docs/basic-features/typescript)

## Apollo Server

- [nodejs-apollo Tutorial](https://www.howtographql.com/graphql-js/0-introduction/)
- [Apollo Server 4.0 integration](https://www.apollographql.com/docs/apollo-server/integrations/integration-index)
- [apollo-server-integration-next](https://www.npmjs.com/package/@as-integrations/next?activeTab=readme)

## Prisma

- [Adding a Database (with Prisma) to Apollo Server](https://www.howtographql.com/graphql-js/4-adding-a-database/)
