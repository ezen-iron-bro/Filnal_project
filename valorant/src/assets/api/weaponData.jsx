export const weaponItem = [
  { id: 1, title: "클래식.", image: "/images/gameInfo/weapon/classic.png", type: "보조무기", category: "sub", explanation: "가볍고 활용도가 높아 누구든 사용할 수 있는 최고의 기본 무기입니다.", description: "움직이지 않는 상태에서 주 공격 시 정밀 사격하며 근접 전투 시 보조 공격으로 점사합니다.", subdes: "" },
  { id: 2, title: "쇼티.", image: "/images/gameInfo/weapon/shorty.png", type: "보조무기", category: "sub", explanation: "가까이 있는 적을 기습할 때 최고의 효과를 발휘합니다.", description: "민첩하고 총열이 짧은 산탄총으로 근거리에서 치명적이지만 두 발 사격한 후 다시 장전해야 합니다. 원거리 무기와 함께 사용하면 효과적입니다.", subdes: "" },
  { id: 3, title: "프렌지.", image: "/images/gameInfo/weapon/frenzy.png", type: "보조무기", category: "sub", explanation: "근거리에서 사용하세요. 거리가 멀다면... 다른 무기를 추천합니다.", description: "이동 사격 시 뛰어난 성능을 자랑하는 소형 기관권총입니다. 연사 속도가 높아 제어하기 어려울 수 있으니 중거리 적을 상대로 짧게 점사하세요.", subdes: "" },
  { id: 4, title: "고스트.", image: "/images/gameInfo/weapon/ghost.png", type: "보조무기", category: "sub", explanation: "날렵하고 소리가 나지 않으며 어떤 거리에서 쏴도 효율적입니다.", description: "고스트는 정확도가 높으며 장탄 수가 많습니다. 멀리 있는 적을 쏘려면 연사 속도에 신경을 써야 하죠. 적이 보이는 즉시 방아쇠를 당기세요.", subdes: "" },
  { id: 5, title: "셰리프.", image: "/images/gameInfo/weapon/sheriff.png", type: "보조무기", category: "sub", explanation: "헤드샷을 노리기 좋은 현대식 6연발 무기입니다.", description: "피해량이 높은 만큼 반동이 크며 숙달하기 쉽지 않습니다.", subdes: "셰리프를 제대로 사용한다면 적들을 무참히 쓰러뜨릴 수 있을 것입니다." },
  {
    id: 6,
    title: "스팅어.",
    image: "/images/gameInfo/weapon/stinger.png",
    type: "기관단총",
    category: "machinegun",
    explanation: "스팅어의 공격이 적중하는 순간 끝난 것과 다름없습니다.",
    description: "상대적으로 중, 원거리에서 위력을 발휘하는 대신 연사 속도가 높고 기동력이 떨어지는 기관단총입니다.",
    subdes: "연발 시 반동이 강해 20발짜리 탄창이 허비되기도 하지만 중거리에서 신중히 정조준 사격 시 치명적인 타격을 입힐 수 있습니다.",
  },
  { id: 7, title: "스펙터.", image: "/images/gameInfo/weapon/specter.png", type: "기관단총", category: "machinegun", explanation: "확신이 없을 때는 스펙터를 선택하세요.", description: "피해량, 연사 속도, 정확도의 밸런스가 뛰어나며 근거리와 중거리 모두에서 유용한 만능 무기입니다.", subdes: "맵 모퉁이에서 효과적이며 조준만 안정적이라면 원거리 적도 처치 가능합니다." },
  { id: 8, title: "버키.", image: "/images/gameInfo/weapon/bucky.png", type: "산탄총", category: "shotgun", explanation: "공격팀이든 수비팀이든 펌프 액션 산탄총을 들고 있다는 사실이 중요하죠.", description: "무겁지만 안정적인 버키의 주 공격은 궁지에서 벗어날 때나 접전 발생 시 유용합니다. 보조 공격은 중거리 대상에게 탄환을 발사합니다.", subdes: "" },
  { id: 9, title: "저지.", image: "/images/gameInfo/weapon/judge.png", type: "산탄총", category: "shotgun", explanation: "연사로 높은 피해를 입히는 자동 속사 산탄총입니다.", description: "저지는 멈춰서 사격할 경우 안정적이지만 급히 쏘면 정확도가 떨어집니다.", subdes: "주 공격 시 근거리 대상을 격파할 수 있지만 거리가 있는 대상에게 타격을 주려면 흔들림 없는 자세로 쏘아야 합니다." },
  { id: 10, title: "불독.", image: "/images/gameInfo/weapon/bulldog.png", type: "소총", category: "rifle", explanation: "불독으로 적을 처치해 얻을 수 있는 행복도 있습니다.", description: "적절한 상황에 사용하면 확실한 성능을 보장합니다. 보조 공격 시 정조준 사격이 가능하며 중거리부터 원거리까지 정확하고 짧게 점사합니다.", subdes: "" },
  { id: 11, title: "가디언.", image: "/images/gameInfo/weapon/guardian.png", type: "소총", category: "rifle", explanation: "인내심 있는 사수의 손에서 빛납니다.", description: "지정사수 소총입니다. 다른 소총에 비해 무겁고 기동력이 떨어지지만 정밀하고 강력합니다. 중거리나 원거리에서 나타나는 적의 머리를 노리세요.", subdes: "" },
  { id: 12, title: "팬텀.", image: "/images/gameInfo/weapon/phantom.png", type: "소총", category: "rifle", explanation: "밸런스 좋은 무기로 안정적인 연사가 가능합니다.", description: "가까이 있는 적에게 완전 자동 사격을 하거나 짧은 점사로 사방에 있는 적을 혼란에 빠뜨리세요. 정지한 상태에서 쏘아야 가장 효과적입니다.", subdes: "" },
  { id: 13, title: "밴달.", image: "/images/gameInfo/weapon/vandal.png", type: "소총", category: "rifle", explanation: "정확도가 높은 무기로 짧은 점사 시 무시무시한 위력을 과시합니다.", description: "하지만 연사 시에는 안정성이 떨어집니다. 밴달은 먼 거리에서도 높은 피해를 입히므로 단발로 헤드샷을 노리는 것이 유용합니다.", subdes: "" },
  { id: 14, title: "마샬.", image: "/images/gameInfo/weapon/marshal.png", type: "저격소총", category: "sniper ", explanation: "지역을 주시하고 호흡을 가다듬으세요. 모퉁이를 도는 적들은 후회하게 될 것입니다.", description: "단일 확대 조준경이 장착된 날렵한 레버 액션 저격소총으로 적의 공세를 막을 수 있습니다. 연사 속도가 느리기 때문에 적중 실패 시 바로 공격에 노출됩니다.", subdes: "" },
  { id: 15, title: "오퍼레이터.", image: "/images/gameInfo/weapon/operator.png", type: "저격소총", category: "sniper ", explanation: "자세를 잡고 중요한 지역을 장악하세요.", description: "고배율 이중 확대 기능이 있는 강력한 볼트 액션 저격소총입니다. 기동력이 크게 떨어지지만 한 방에 팀 전체를 궤멸할 수 있을 만큼 막강한 탄환을 발사합니다.", subdes: "" },
  { id: 16, title: "아레스.", image: "/images/gameInfo/weapon/ares.png", type: "중기관총", category: "heavy", explanation: "크기만 보고 다른 무기로 착각하지 마세요.", description: "대형 탄창을 지닌 아레스는 제압 사격을 하거나 모여 있는 적에게 큰 피해를 입힐 때 쓰기 적합합니다.", subdes: "" },
  { id: 17, title: "오딘.", image: "/images/gameInfo/weapon/odin.png", type: "중기관총", category: "heavy", explanation: "사수에게는 영광을, 적에게는 파멸을 불러오는 무기입니다.", description: "놀라운 안정성을 자랑하며 제압 사격으로 큰 피해를 입힙니다. 근거리 적에게 연발하고 보조 공격을 사용하여 움직이는 포탑이 되어 보세요.", subdes: "" },
  { id: 18, title: "전술용 칼.", image: "/images/gameInfo/weapon/tactical_knife.png", type: "근접무기", category: "knife", explanation: "근접 무기입니다.", description: "애매한 상황이거나 탄환이 다 떨어지면 전술용 칼로 적을 공격하세요. 달리기와 물체 파괴 속도가 빨라질 뿐 아니라 보조 공격으로 적을 뒤에서 공격하면 단번에 처치할 수 있습니다.", subdes: "" },
];
