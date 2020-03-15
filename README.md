<p align="center">
  <img src="https://raw.githubusercontent.com/somul-project/somul-project-frontend/master/resources/content-poster.png" width="100" height="100">
</p>

<h1 align="center">5월, 소프트웨어에 물들다 프론트앤드</h1>
<h4 align="center">5월, 소프트웨어에 물들다 (somul.kr) 프론트앤드 프로젝트입니다.</h4>
<p align="center">
  <img src=https://img.shields.io/badge/somul--project--homepage-0.1-information.svg?style=flat-square">
</p>
                                                                                                       
**5월, 소프트웨어에 물들다 홈페이지** 프로젝트는 React 로 작성되었습니다.
사용된 버전은 16.12.0 버전의 React 를 사용했으며, TypeScript + Clean Architecture 구조로 작성되었습니다.

## 🛠사전 설치

- ESLint 가 지원되는 에디터 (IntelliJ, VSCode 등)
- Node.js 12.16+
- Yarn 1.22+ (`npm install -g yarn`)

## 👮‍♀️컨트리뷰트 규칙

**5월, 소프트웨어에 물들다 홈페이지** 프로젝트는 누구나 Contribute 를 할 수 있습니다. 아래의 규칙을 따라주세요!

- master 브랜치 다이렉트 푸시는 절대 허용되지 않으며, 무조건 PR 로부터 머지되어야 합니다.
- 모든 작업은 브랜치를 파서 작업해주시고, 작업이 완료될 경우 PR 을 보내주세요!
  - 브랜치 이름의 규칙은 아래와 같습니다.
    - 작업자이름/변경사항명 (예 : sanghun/fix-padding-for-modal-component)
- 모든 작업에는 테스트 코드가 필요합니다.
  - 비즈니스 로직은 단위 테스트를, 컴포넌트는 스토리북이 작성되어야 합니다.
- 모든 PR 은 1명 이상 Approve 되어야 머지됩니다.         
- 모든 PR 은 CI 를 통과해야 리뷰를 시작합니다.

## 💻 프로젝트 구축방법
해당 프로젝트를 로컬에서 실행하기 위해서는 아래의 명령어를 입력하여 사전 준비 작업이 필요합니다.<br>
프로젝트는 `yarn` 을 사용합니다.

```bash
$ yarn install
```

### 로컬에서 개발하기 (소스코드를 저장하면, 자동으로 컴파일되고 새로고침 됨)

```bash
$ yarn start
```

### 로컬에서 컴포넌트 스토리북 실행하기

```
$ yarn storybook
```

### 배포하기 위해 빌드하기 (HTML로 컴파일)

```bash
yarn build
```

### 단위 테스트 (Unit Test) 돌리기

```bash
yarn test
```

### 코드 스타일 검사하기

```bash
yarn lint
```

## 📄 라이선스

**5월, 소프트웨어에 물들다 홈페이지** 프로젝트는 MIT 라이선스를 따르고 있습니다.