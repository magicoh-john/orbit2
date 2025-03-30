# 구매관리시스템 (Purchase Management System)

![타이틀이미지](https://user-images.githubusercontent.com/55949647/154088644-8ae7ec32-04bb-4fc3-810a-c2111ec2afb8.png)

## 구매관리시스템 링크: [https://purchase-management-system.com](https://purchase-management-system.com)
## 소개 영상 보기: [UCC 링크](https://www.youtube.com/watch/LDKpw45f9QY)

## 💜 프로젝트 진행 기간
2025.02.27 ~ 2025.03.27 (30일간 진행)  
Ezen Academy K-Digital 2기 파이널 프로젝트 - 구매관리시스템

</br>

## 🎵 구매관리시스템 - 배경
현대 기업의 구매 프로세스는 복잡하고 다양한 이해관계자들이 참여하는 과정입니다. 효율적인 구매 관리와 투명한 프로세스 운영이 필요한 시점에서, 구매관리시스템은 이러한 니즈를 충족시키기 위해 탄생했습니다.

구매관리시스템은 입찰, 발주, 납품 등 구매 관련 모든 프로세스를 통합적으로 관리할 수 있는 웹 기반 애플리케이션입니다. 실시간 입찰 현황 모니터링, 자동화된 발주 프로세스, 효율적인 납품 관리 등을 통해 기업의 구매 프로세스를 최적화합니다.

</br>

## 💜 구매관리시스템 - 주요기능
---
### 1. 회원 관리
- **역할 기반 접근 제어**
  - 회사 직원과 협력업체를 구분하여 관리
  - 각 역할별 맞춤형 기능 제공
  - 보안 강화를 위한 권한 관리

- **협력업체 **
  - 입찰 참여
  - 인보이스 직접 등록 기능
  - 실시간 알림 수신

### 2. 시스템 관리
- **결재선 관리**
  - 미리 정의된 결재선 템플릿
  - 구매 요청 시 결재선 선택
  - 결재 레벨 권한 관리

- **공통 코드 관리**
  - 계층형 코드 구조 (상위/하위 코드)
  - 확장 가능한 코드 체계
  - 유지보수 용이성

### 3. 품목 마스터
  - 구매 품목 마스터 관리
  - 카테고리별 품목 관리
  - 구매 프로젝트 생성시 사용

### 4. 프로젝트 관리
- **다양한 프로젝트 유형**
  - SI (시스템 통합)
  - 유지보수
  - 컨설팅
  - 구축
  - 아웃소싱
  - 확장 가능한 분류 체계

### 5. 구매 요청 관리
  - 프로젝트와 연계
  - 결재선 연동으로 단계별 결재자 승인 처리
  - 품목 마스터 연동
  - 최종 결재자 전결로 구매 요청 완료
  - 결재 정보 통계 대시보드
  - 결재 알림 실시간 메시징

### 6. 입찰 관리
  - 구매 요청과 연계
  - 공급처 연동(협력업체)
  - 품목 마스터와 달리 공급 가격 조정 기능
  - 협력사 평가 시스템 기반 낙찰 관리

### 7. 계약 관리
  - 입찰 정보 연계계
  - 최종 낙찰 업체와 품목 공급 계약 관리
  - 전자 서명을 통한 계약
  - 계약 문서 보관 및 이력관리

### 8. 발주 관리
  - 계약 정보 연계
  - 발주서 생성 및 관리
  - 발주 승인 프로세스
  - 발주 이력 조회
  - 발주 상태 추적

### 9. 입고(납품) 관리
  - 발주 정보 연계
  - 미결재 입고발주 정보 연계
  - 입고 등록 관리
  - 인보이스(송장) 정보 연계
  - 입고 및 송장관리 대시보드

### 10. 송장관리
  - 미결재 입고 데이터 송장 자동 생성
  - 송장 상태별 관리
  - 송장 통계 대시보드

### 11. 대금지급(결제) 관리
  - 승인된 송장 정보 연계
  - 결제 통계 대시보드


### 12. 통계 및 분석
    - 월별 구매 실적 분석
    - 카테고리별 구매 현황
    - 공급업체별 구매 실적
    - 품목별 구매 추이
    
### 13. 알림 시스템
    - 입찰 참여 알림
    - 발주 승인 알림
    - 납품 요청 알림
    - 시스템 공지사항

## ✔ 주요 기술
---

**Backend - Spring**
- IntelliJ IDE
- Spring Boot 3.x
- Spring Data JPA
- Spring Security
- Spring Validation
- Spring Web
- QueryDSL
- WebSocket
- Redis 캐시 서버, 메시지 Pub/Sub
- MySQL
- JWT
- Swagger 3.0.0

**Frontend**
- Visual Studio Code IDE
- React
- Recharts
- Axios
- WebSocket
- Redux Toolkit
- React Router
- Material-UI

**CI/CD**
- Github Actions 배포 자동화
- AWS EC2
- AWS RDS
- NGINX 프록시 서버

## ✔ 프로젝트 파일 구조
---
### Back
```
purchase-management-system
  ├── src/main/java/com/orbit
  │   ├── config
  │   │   ├── WebConfig
  │   │   ├── SecurityConfig
  │   │   └── RedisConfig
  │   ├── constant
  │   │   ├── CommonConstant
  │   │   └── SystemConstant
  │   ├── controller
  │   │   ├── auth
  │   │   ├── bidding
  │   │   ├── order
  │   │   ├── delivery
  │   │   └── statistics
  │   ├── dto
  │   │   ├── request
  │   │   ├── response
  │   │   └── simple
  │   ├── entity
  │   │   ├── auth
  │   │   ├── bidding
  │   │   ├── order
  │   │   ├── delivery
  │   │   └── statistics
  │   ├── event
  │   │   ├── BiddingEvent
  │   │   └── OrderEvent
  │   ├── exception
  │   │   ├── CustomException
  │   │   └── GlobalExceptionHandler
  │   ├── repository
  │   │   ├── auth
  │   │   ├── bidding
  │   │   ├── order
  │   │   ├── delivery
  │   │   └── statistics
  │   ├── security
  │   │   ├── JwtTokenProvider
  │   │   └── SecurityFilter
  │   ├── service
  │   │   ├── auth
  │   │   ├── bidding
  │   │   ├── order
  │   │   ├── delivery
  │   │   └── statistics
  │   └── util
  │       ├── DateUtil
  │       └── StringUtil
  └── pom.xml
```
### Front
```
purchase-management-system-front
  ├── public
  │   ├── index.html
  │   └── favicon.ico
  ├── src
  │   ├── api
  │   │   ├── auth
  │   │   ├── bidding
  │   │   ├── order
  │   │   ├── delivery
  │   │   └── statistics
  │   ├── assets
  │   │   ├── images
  │   │   └── styles
  │   ├── components
  │   │   ├── common
  │   │   │   ├── Button
  │   │   │   ├── Input
  │   │   │   └── Modal
  │   │   ├── layout
  │   │   │   ├── Header
  │   │   │   ├── Sidebar
  │   │   │   └── Footer
  │   │   └── charts
  │   │       ├── BarChart
  │   │       ├── LineChart
  │   │       └── PieChart
  │   ├── hooks
  │   │   ├── useAuth
  │   │   ├── useBidding
  │   │   └── useWebSocket
  │   ├── pages
  │   │   ├── auth
  │   │   ├── bidding
  │   │   ├── order
  │   │   ├── delivery
  │   │   └── statistics
  │   ├── store
  │   │   ├── auth
  │   │   ├── bidding
  │   │   ├── order
  │   │   └── delivery
  │   ├── types
  │   │   ├── auth
  │   │   ├── bidding
  │   │   └── order
  │   ├── utils
  │   │   ├── date
  │   │   ├── format
  │   │   └── validation
  │   ├── App.tsx
  │   ├── index.tsx
  │   └── routes.tsx
  ├── package.json
  └── vite.config.ts
```

## ✔ 협업 툴
- Github
- Notion
- Gether Town

## ✔ 협업 환경
---
- 회의
  - Gether Town 아침회의 진행, 전날 목표 달성량과 당일 할 업무 브리핑
  - 각자 위치에서 건네야 할 말이 생기면 팀원의 위치로 이동하여 전달
  - 빠른 소통과 신속한 대응이 가능하다.
- Notion
  - 회의가 있을때마다 회의록을 기록하여 보관
  - 회의가 길어지지 않도록 다음날 제시할 안건을 미리 기록
  - 기술확보 시, 다른 팀원들도 추후 따라할 수 있도록 보기 쉽게 작업 순서대로 정리
  - 컨벤션 정리
  - 간트차트 관리
  - 스토리보드, 스퀀스다이어그램, 기능명세서 등 모두가 공유해야 하는 문서 관리

## ✔ 팀원 역할 분배
---
![역할 배분](https://user-images.githubusercontent.com/55949647/154541550-b52932b4-9e3d-4788-9994-98dd7fe8c875.png)

## ✔ 프로젝트 산출물
---
- [기능명세서](./docs/기능명세서.md)
- [디자인&컨셉기획](./docs/디자인&컨셉기획.md)
- [스토리보드](./docs/스토리보드.md)
- [시퀀스다이어그램](./docs/시퀀스다이어그램.md)
- [아키텍처](./docs/서비스_아키텍처.md)
- [와이어프레임](./docs/와이어프레임.md)
- [컨벤션](./docs/컨벤션.md)
- [API](./docs/API.md)
- [ERD](./docs/ERD.md)
- [회의록](./docs/회의록.md)
- [테스트케이스](./docs/구매관리시스템_테스트케이스.xlsx)
- [시스템기술서](./docs/구매관리시스템_시스템_기술서.docx)
- [명세기술서](./docs/구매관리시스템_명세_기술서.docx)

## ✔ 프로젝트 결과물
- [포팅메뉴얼](./exec/구매관리시스템_포팅_메뉴얼.docx)
- [중간발표자료](./ppt/구매관리시스템_중간발표.pptx)
- [최종발표자료](./ppt/구매관리시스템_최종발표.pptx)

## 🎵 구매관리시스템 서비스 화면
---

### 로그인/회원가입
- 이용약관에 동의하지 않으면 진행할 수 없습니다.
- 아이디(이메일)는 타 사용자의 아이디와 중복될 수 없습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587535-8e1656c9-53fa-433e-ac22-efc1963b21a7.gif"/>
<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587545-22a4a70f-8cac-4772-a6e5-29c55ff0409b.gif"/>
<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587551-b31f46b9-8f39-42ed-8c38-282734224762.gif"/>

<br>

### 메인화면
- 최신순으로 등록된 입찰 공고, 발주 현황, 납품 현황을 확인할 수 있습니다.
- 실시간 알림을 통해 중요한 업데이트를 확인할 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587375-cfef4162-d404-41fd-9d28-39712f2cf5b1.gif"/>

<br>

### 입찰 관리
- 입찰 공고를 등록하고 관리할 수 있습니다.
- 공급업체를 초대하고 입찰 현황을 모니터링할 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587487-fc0e71b1-507c-4c66-b906-d583f530f139.gif"/>
<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587499-da47e90b-c9ae-478f-8942-c5afde9aa4b2.gif"/>
<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587504-8e596650-49dd-4ffc-81ae-a2e384527fdc.gif"/>

<br>

### 발주 관리
- 발주서를 생성하고 승인 프로세스를 진행할 수 있습니다.
- 발주 이력과 상태를 추적할 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587515-0ebaf6f4-a87f-474c-946c-dee20bed0476.gif"/>
<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587529-b2be3b77-4b18-48d8-910e-89235409fc82.gif"/>

<br>

### 통계 및 분석
- 월별 구매 실적을 분석할 수 있습니다.
- 카테고리별, 공급업체별 구매 현황을 확인할 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587432-39f947e4-988d-47e7-adb4-dedcfbb95c1a.gif"/>

<br>

### 실시간 알림
- 입찰 참여, 발주 승인, 납품 요청 등 중요 이벤트에 대한 실시간 알림을 받을 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587392-41092786-b6c9-4fcd-a3e8-bf476519d5f5.gif"/>
<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587394-02371e17-420f-42cf-9d99-e51e3280465e.gif"/>

<br>

### 납품 관리
- 납품 요청을 생성하고 관리할 수 있습니다.
- 납품 상태를 추적하고 검수 프로세스를 진행할 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587441-5bf6a5bf-1bf0-4910-95c8-089e75ed4817.gif"/>

<br>

### 시스템 설정
- 사용자 권한 관리
- 시스템 파라미터 설정
- 알림 설정

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587451-cd504c78-5147-45df-881d-b8d45e766b26.gif"/>
<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587467-401548d1-4ef2-4d16-adc6-abb7e97a47de.gif"/>

<br>

### 알림 목록
- 모든 시스템 알림을 한 곳에서 확인할 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587397-120e0308-8a4b-4c65-977e-e0991ed5d820.gif"/>

<br>

### 검색 기능
- 입찰 공고, 발주서, 납품 요청 등을 검색할 수 있습니다.
- 고급 검색 옵션을 통해 정확한 결과를 찾을 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587561-55048bc1-4649-4bb4-a6b3-468d01f3e9e7.gif"/>
<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587364-f62396c2-a221-4424-a6ce-f2ef6b9362b9.gif"/>
<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587565-4bfb22ef-621b-4df8-b7b7-bd73d324f50d.gif"/>

<br>

### 프로필 관리
- 사용자 정보를 관리하고 권한을 설정할 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587436-8d94a81a-b287-4d59-99a6-dca905eaf5b5.gif"/>

<br>

### 설정
- 시스템 설정을 관리할 수 있습니다.
- 알림 설정을 커스터마이즈할 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587378-146a0843-c95e-4323-a53e-ea3157a846ee.gif"/>
<img width="30%" src="https://user-images.githubusercontent.com/55949647/154591542-7efa6cf5-ff54-40d1-9d8-1d2682c30ee4.gif"/>

<br>

### 로그아웃
- 안전하게 시스템에서 로그아웃할 수 있습니다.

<img width="30%" src="https://user-images.githubusercontent.com/55949647/154587391-bb7fe4c1-bb9b-4c9f-a6bd-6dba13daadde.gif"/>
