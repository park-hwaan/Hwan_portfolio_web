export const projectData = [
  {
    id: "BOOMBIM",
    title: "붐빔(Boom Bim)",
    date: "2025.08.01 ~ 2025.09.07",
    description: "사용자들이 카페, 식당, 병원 등에 혼잡도를 미리 확인할 수 있도록 실시간 참여 + 공공데이터를 결합한 혼잡도 안내 서비스",
    content: ["소셜로그인을 활용한 사용자 인증", "카카오맵 연동 및 마커,클러스터링 표시", "FCM을 통한 알림 연동", "마이페이지 및 Api 연결"],
    participants: "7인 프로젝트(PM 1, BackEnd 2, Designer 2, Aos 1, Ios 1)",
    storeUrl: "https://play.google.com/store/apps/details?id=com.boombim.android&hl=ko",
    githubLink: "https://github.com/swyp-app-team-4/boombim-android",
    usedSkill: "MVVM, Clean Architecture, Coroutine/Flow, Hilt(DI), Retrofit, Kakao Map SDK, Firebase FCM, Kakao Search Api, Glide, Navigation",
    contentDetail: [
      { featTitle: "사용자 인증", featDetail: ["카카오/네이버 SDK를 활용한 OAUTH2 기반 소셜 로그인 구현", "DATASTORE 기반 사용자 설정 및 로그인 상태 관리"] },
      { featTitle: "홈 화면", featDetail: ["RECYCLERVIEW + VIEWTYPE을 활용한 다중 뷰 타입 리스트 구성", "DIFFUTIL을 적용하여 리스트 갱신 시 불필요한 UI 리렌더링 최소화"] },
      { featTitle: "지도 연동", featDetail: ["KAKAO MAPS SDK 기반 지도 화면 구현", "마커 클릭 시 BOTTOMSHEET로 상세 정보 노출"] }
    ],
    troubleShooting: {
      title: "다량의 마커 렌더링 성능 최적화",
      problem: "지도 화면에서 100개 이상의 마커가 한 번에 렌더링되며 성능 저하 발생.",
      solution: "마커 클러스터링 적용 및 비트맵 캐싱 처리.",
      effect: "마커 생성 속도를 3초에서 1.5초로 개선."
    }
  },
  {
    id: "AUDI",
    title: "어디(Audi)",
    date: "2025.02.01 ~ 2025.05.01",
    description: "모임을 만들고 초대된 사람들과 장소를 공유.의견을 나누며, 일정을 정하고 알림을 제공하는 모임 관리 서비스",
    content: ["카카오.네이버를 활용한 사용자 인증", "버전 비교를 통한 앱 업데이트 관리", "Fcm을 통한 앱 데이터 갱신 및 알림 연동"],
    participants: "8인 프로젝트(BackEnd 2, Designer 2, Aos 2, Ios 2)",
    usedSkill: "MVVM, Retrofit, okhttp, Fcm, Flow, Coroutine, Room, Datastore, Hilt",
    githubLink: "https://github.com/Team-Where/Where-Android",
    contentDetail: [
      { featTitle: "앱 업데이트", featDetail: ["서버 버전과 현재 버전 비교 후 강제 업데이트 유도"] }
    ]
  }
];