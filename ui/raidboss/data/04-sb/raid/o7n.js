'use strict';

// O7N - Sigmascape 3.0 Normal
[{
  zoneId: ZoneId.SigmascapeV30,
  timelineFile: 'o7n.txt',
  triggers: [
    {
      id: 'O7N Magitek Ray',
      netRegex: NetRegexes.startsUsing({ id: '276B', source: 'Guardian', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '276B', source: 'Wächter', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '276B', source: 'Gardien', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '276B', source: 'ガーディアン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '276B', source: '守护者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '276B', source: '가디언', capture: false }),
      alertText: {
        en: 'Magitek Ray',
        de: 'Magitek-Laser',
        fr: 'Rayon Magitek',
        cn: '直线AOE',
        ko: '마도 레이저',
      },
      tts: {
        en: 'beam',
        de: 'les er strahl',
        fr: 'laser',
        cn: '直线AOE',
        ko: '레이저',
      },
    },
    {
      id: 'O7N Arm And Hammer',
      netRegex: NetRegexes.startsUsing({ id: '276C', source: 'Guardian' }),
      netRegexDe: NetRegexes.startsUsing({ id: '276C', source: 'Wächter' }),
      netRegexFr: NetRegexes.startsUsing({ id: '276C', source: 'Gardien' }),
      netRegexJa: NetRegexes.startsUsing({ id: '276C', source: 'ガーディアン' }),
      netRegexCn: NetRegexes.startsUsing({ id: '276C', source: '守护者' }),
      netRegexKo: NetRegexes.startsUsing({ id: '276C', source: '가디언' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'O7N Shockwave',
      netRegex: NetRegexes.startsUsing({ id: '2766', source: 'Guardian', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2766', source: 'Wächter', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2766', source: 'Gardien', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2766', source: 'ガーディアン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2766', source: '守护者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2766', source: '가디언', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'O7N Diffractive Laser',
      netRegex: NetRegexes.startsUsing({ id: '2761', source: 'Guardian', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2761', source: 'Wächter', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2761', source: 'Gardien', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2761', source: 'ガーディアン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2761', source: '守护者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2761', source: '가디언', capture: false }),
      response: Responses.getOut(),
    },
    {
      id: 'O7N Prey',
      netRegex: NetRegexes.headMarker({ id: '001E' }),
      response: Responses.preyOn('info'),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Air Force': 'Luftwaffe',
        'Bibliotaph': 'Bibliotaph',
        'Dadaluma': 'Dadarma',
        'Guardian': 'Wächter',
        'Tentacle': 'Tentakel',
        'Ultros': 'Ultros',
        'WEAPON SYSTEMS ONLINE': 'Feuerkontrollsystem aktiviert',
      },
      'replaceText': {
        'Arm And Hammer': 'Arm-Hammer',
        'Aura Cannon': 'Aura-Kanone',
        'Bomb Deployment': 'Bombeneinsatz',
        'Burst/Darkness': 'Burst/Dunkelheit',
        'Chain Cannon': 'Kettenkanone',
        'Chakra Burst': 'Chakra-Ausbruch',
        'Demon Simulation': 'Dämonensimulation',
        'Diffractive Laser': 'Diffraktiver Laser',
        'Diffractive Plasma': 'Diffusionsplasma',
        'Ink': 'Tinte',
        'Load': 'Laden',
        'Magitek Ray': 'Magitek-Laser',
        'Main Cannon': 'Hauptkanone',
        'Missile Simulation': 'Raketensimulation',
        'Plane Laser': 'Luftwaffe Add Laser',
        'Prey': 'Beute',
        'Run Program': 'Programm starten',
        'Shockwave': 'Schockwelle',
        'Tentacle Simulation': 'Tentakelsimulation',
        'Tentacle(?! )': 'Tentakel',
        'Wallop': 'Tentakelklatsche',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Air Force': 'force aérienne',
        'Bibliotaph': 'bibliotaphe',
        'Dadaluma': 'Dadaluma',
        'Guardian': 'gardien',
        'Tentacle': 'Tentacule',
        'Ultros': 'Orthros',
        'WEAPON SYSTEMS ONLINE': 'Démarrage du système de contrôle',
      },
      'replaceText': {
        'Arm And Hammer': 'Marteau stratégique',
        'Aura Cannon': 'Rayon d\'aura',
        'Bomb Deployment': 'Déploiement de bombes',
        'Burst/Darkness': 'Explosion Magique',
        'Chain Cannon': 'Canon automatique',
        'Chakra Burst': 'Explosion d\'aura',
        'Demon Simulation': 'Chargement : démon',
        'Diffractive Laser': 'Laser diffracteur',
        'Diffractive Plasma': 'Plasma diffracteur',
        'Ink': 'Encre',
        'Load': 'Chargement',
        'Magitek Ray': 'Rayon magitek',
        'Main Cannon': 'Canon principal',
        'Missile Simulation': 'Chargement : missiles',
        'Plane Laser': 'Laser d\'avion',
        'Prey': 'Proie',
        'Run Program': 'Programme de matérialisation',
        'Shockwave': 'Onde de choc',
        'Tentacle Simulation': 'Chargement : tentacule',
        'Tentacle(?! )': 'Tentacule',
        'Wallop': 'Taloche tentaculaire',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Air Force': 'エアフォース',
        'Bibliotaph': 'ビブリオタフ',
        'Dadaluma': 'ダダルマー',
        'Guardian': 'ガーディアン',
        'Tentacle': 'たこあし',
        'Ultros': 'オルトロス',
        'WEAPON SYSTEMS ONLINE': 'ファイアコントロールシステム起動',
      },
      'replaceText': {
        'Arm And Hammer': 'アームハンマー',
        'Aura Cannon': 'オーラキャノン',
        'Bomb Deployment': '爆弾設置',
        'Chain Cannon': 'チェーンガン',
        'Chakra Burst': 'チャクラバースト',
        'Demon Simulation': 'ローディング：デーモン',
        'Diffractive Laser': '拡散レーザー',
        'Diffractive Plasma': '拡散プラズマ',
        'Ink': '墨',
        'Load': 'ローディング',
        'Magitek Ray': '魔導レーザー',
        'Main Cannon': 'メインカノン',
        'Missile Simulation': 'ローディング：ミサイル',
        'Prey': 'プレイ',
        'Run Program': '実体化プログラム',
        'Shockwave': '衝撃波',
        'Tentacle Simulation': 'ローディング：たこあし',
        'Wallop': '叩きつけ',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Air Force': '空军装甲',
        'Bibliotaph': '永世珍本',
        'Dadaluma': '达达鲁玛',
        'Guardian': '守护者',
        'Tentacle': '腕足',
        'Ultros': '奥尔特罗斯',
        'WEAPON SYSTEMS ONLINE': '武器火控系统启动',
      },
      'replaceText': {
        'Arm And Hammer': '臂锤',
        'Aura Cannon': '斗气炮',
        'Bomb Deployment': '设置炸弹',
        'Burst/Darkness': '脉轮爆发/黑暗',
        'Chain Cannon': '链式机关炮',
        'Chakra Burst': '脉轮爆发',
        'Demon Simulation': '加载恶魔模拟程序',
        'Diffractive Laser': '扩散射线',
        'Diffractive Plasma': '扩散离子',
        'Ink': '墨汁',
        'Load': '加载',
        'Magitek Ray': '魔导激光',
        'Main Cannon': '主加农炮',
        'Missile Simulation': '加载导弹模拟程序',
        'Plane Laser': '平面激光',
        'Prey': '猎物',
        'Run Program': '实体化程序',
        'Shockwave': '冲击波',
        'Tentacle Simulation': '加载腕足模拟程序',
        'Tentacle(?! )': '触手(?! )',
        'Wallop': '敲击',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Air Force': '에어포스',
        'Bibliotaph': '비블리오타프',
        'Dadaluma': '다다루마',
        'Guardian': '가디언',
        'Tentacle': '문어발',
        'Ultros': '오르트로스',
      },
      'replaceText': {
        'Arm And Hammer': '양팔 내리치기',
        'Aura Cannon': '오라 포격',
        'Bomb Deployment': '폭탄 설치',
        'Chain Cannon': '기관총',
        'Chakra Burst': '차크라 폭발',
        'Demon Simulation': '불러오기: 악마',
        'Diffractive Laser': '확산 레이저',
        'Diffractive Plasma': '확산 플라스마',
        'Ink': '먹물',
        'Load': '불러오기',
        'Magitek Ray': '마도 레이저',
        'Main Cannon': '주포',
        'Missile Simulation': '불러오기: 미사일',
        'Prey': 'プレイ',
        'Run Program': '실체화 프로그램',
        'Shockwave': '충격파',
        'Tentacle Simulation': '불러오기: 문어발',
        'Wallop': '매질',
      },
    },
  ],
}];
