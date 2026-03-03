export const projectData = [
  {
    id: "BOOMBIM",
    title: "붐빔(Boom Bim)",
    date: "2025.08.01 ~ 2025.09.07",
    description: "사용자에게 지도를 통해 혼잡도를 보여주는 앱 (실시간 참여 + 공공데이터 결합)",
    content: ["소셜로그인을 활용한 사용자 인증", "카카오맵 연동 및 마커,클러스터링 표시", "FCM을 통한 알림 연동", "마이페이지 및 Api 연결"],
    participants: "7인 프로젝트(PM 1, BackEnd 2, Designer 2, Aos 1, Ios 1)",
    storeUrl: "https://play.google.com/store/apps/details?id=com.boombim.android&hl=ko",
    githubLink: "https://github.com/swyp-app-team-4/boombim-android",
    usedSkill: "MVVM, Clean Architecture, Coroutine/Flow, Hilt(DI), Retrofit, Kakao Map SDK, Firebase FCM, Kakao Search Api, Glide, Navigation",
    contentDetail: [
      {
        featTitle: "사용자 인증",
        featDetail: [
          "카카오/네이버 SDK를 활용한 OAUTH2 기반 소셜 로그인 구현",
          "DATASTORE 기반 사용자 설정 및 로그인 상태 관리",
          "FLOW 기반으로 로그인 상태를 관찰하여 UI 상태를 실시간으로 동기화"
        ]
      },
      {
        featTitle: "홈 화면",
        featDetail: [
          "RECYCLERVIEW + VIEWTYPE을 활용한 다중 뷰 타입 리스트 구성",
          "DIFFUTIL을 적용하여 리스트 갱신 시 불필요한 UI 리렌더링 최소화"
        ]
      },
      {
        featTitle: "알림 연동",
        featDetail: [
          "FIREBASE CLOUD MESSAGING 기반 푸시 알림 수신",
          "알림 수신 시 RECYCLERVIEW 실시간 갱신 처리"
        ]
      },
      {
        featTitle: "지도 연동",
        featDetail: [
          "KAKAO MAPS SDK 기반 지도 화면 구현",
          "마커 클릭 시 BOTTOMSHEET로 상세 정보 노출",
          "줌 레벨에 따른 마커 렌더링 최적화 적용"
        ]
      },
      {
        featTitle: "마이페이지",
        featDetail: [
          "RETROFIT + COROUTINE 기반 비동기 API 통신",
          "프로필 수정 -> 서버 반영 -> 화면 즉시 갱신까지 단방향 데이터 흐름으로 처리"
        ]
      }
    ],
    troubleShooting: {
      title: "다량의 마커 렌더링 성능 최적화",
      problem: "지도 화면에서 서버로부터 다량의 장소 데이터를 불러온 뒤 마커를 생성해 표시할 때, 100개 이상의 마커가 한 번에 렌더링되며 성능 저하 및 로딩 지연이 발생함.",
      solution: "마커 클러스터링 적용(줌 레벨에 따른 분리) 및 동일 혼잡도 아이콘 비트맵 캐싱 처리.",
      effect: "불필요한 객체 생성을 최소화하여 메모리를 효율화하고, 마커 생성 속도를 3초에서 1.5초로 개선."
    }
  },
  {
    id: "AUDI",
    title: "어디(Audi)",
    date: "2025.02.01 ~ 2025.05.01",
    description: "모임 관리 및 일정 공유 서비스 (초대된 사람들과 장소 공유 및 알림 제공)",
    content: ["카카오.네이버를 활용한 사용자 인증", "버전 비교를 통한 앱 업데이트 관리", "Fcm을 통한 앱 데이터 갱신 및 알림 연동", "설정 기능 관련 Api 연동"],
    participants: "8인 프로젝트(BackEnd 2, Designer 2, Aos 2, Ios 2)",
    storeUrl: "https://play.google.com/store/apps/details?id=com.audiwhere.android&hl=ko",
    githubLink: "https://github.com/Team-Where/Where-Android",
    usedSkill: "MVVM, Retrofit, okhttp, Fcm, Flow, Coroutine, Room, Datastore, Glide, Hilt, Navigation",
    contentDetail: [
      {
        featTitle: "사용자 인증",
        featDetail: [
          "네이버, 카카오 SDK를 활용해 간편 로그인 및 회원가입 처리",
          "서버 발급 토큰을 DATASTORE에 저장하여 보안 및 상태 유지"
        ]
      },
      {
        featTitle: "앱 업데이트",
        featDetail: [
          "서버 버전과 현재 버전을 비교하여 최신 버전 유지 유도",
          "SPLASH 화면에서 강제 업데이트 로직 구현"
        ]
      },
      {
        featTitle: "설정 기능",
        featDetail: ["알림 설정, FAQ, 공지사항, 계정 설정 등 다양한 API 연동"]
      },
      {
        featTitle: "알림 연동",
        featDetail: [
          "FCM을 통해 상황별 푸시 알림 수신 및 NOTIFICATION 표시",
          "포그라운드 상태에서 실시간 데이터 갱신 및 수신 알림 ROOM 데이터베이스 저장"
        ]
      }
    ],
    troubleShooting: null // 원본 데이터가 비어있어 null 처리
  },
  {
    id: "STUDYMATE",
    title: "스터디메이트(StudyMate)",
    date: "2024.04.01 ~ 2025.01.01",
    description: "멘토와 멘티 매칭을 통한 실시간 학습 도움 플랫폼",
    content: ["게시판 기능", "SSE를 사용한 매칭 요청 알림", "멘토 멘티간의 실시간 채팅 기능"],
    participants: "5인 프로젝트(BackEnd 2, Aos 1, FrontEnd 2)",
    storeUrl: "https://play.google.com/store/apps/details?id=com.studymate154.studymate&hl=ko",
    githubLink: "https://github.com/TUK2024CD-Studymate/Android",
    usedSkill: "Retrofit, okhttp, Coroutine, Stomp, EventSource, SharedPreferences, Glide",
    contentDetail: [
      {
        featTitle: "게시판",
        featDetail: [
          "게시글 작성, 조회, 삭제 기능 및 SEARCHVIEW 기반 제목/내용 검색",
          "카테고리 필터링을 통한 맞춤형 게시물 조회"
        ]
      },
      {
        featTitle: "매칭 요청 알림",
        featDetail: ["SSE(SERVER-SENT EVENTS) 연결을 통한 실시간 매칭 요청 알림 수신"]
      },
      {
        featTitle: "채팅 기능",
        featDetail: [
          "STOMP 라이브러리를 사용한 실시간 1:1 대화 구현",
          "연결 안정성을 위해 끊어질 경우 5초마다 자동 재연결(RECONNECT) 로직 구현"
        ]
      }
    ],
    troubleShooting: null // 원본 데이터가 비어있어 null 처리
  }
];