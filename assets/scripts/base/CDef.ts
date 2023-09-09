

/**
 * use for hero ,enemy, boss for base number
*/

export enum HeroQuality {
    E_HERO_QUA_BASE = 0,
    E_HERO_QUA_A = 1,
    E_HERO_QUA_S = 2,
    E_HERO_QUA_SS = 3,
}

export enum EquipQuality {
    E_QUIP_QUA_S0 = 0,
    E_QUIP_QUA_S1 = 1,
    E_QUIP_QUA_S2 = 2,
    E_QUIP_QUA_S3 = 3,
    E_QUIP_QUA_S4 = 4,
    E_QUIP_QUA_S5 = 5,
    E_QUIP_QUA_S6 = 6,
    E_QUIP_QUA_S7 = 7,
    E_QUIP_QUA_S8 = 8,
    E_QUIP_QUA_S9 = 9,
}


export enum EquipType {
    E_EQUIP_BASE = 0,
    E_EQUIP_WEAPON = 1,
    E_EQUIP_GLASS = 3,
    E_EQUIP_SHOT = 4,
    E_EQUIP_CLOTH = 5,
    E_EQUIP_KUZI = 6,
    E_EQUIP_HAND = 7,
    E_EQUIP_DIAMOND = 8,
    E_EQUIP_BAOWU = 9,
}

export enum BatStatus {
    E_BAT_NOR = 0,  //普通战斗
    E_BAT_BOSS = 1, //BOSS战斗
    E_BAT_RUN = 2,  //间隔
    E_BAT_OVER = 3,  //角色死亡
}

export enum BatBulletMode {
    E_BULLET_MODE_DIR = 0,  //方向性子弹
    E_BULLET_MODE_TARGET = 1, //目标性子弹
}

export enum BatMonsterCtrlState {
    E_BAT_MONSTER_ST_WAIT = 0,  //方向性子弹
    E_BAT_MONSTER_ST_RUN = 1, //目标性子弹
    E_BAT_MONSTER_ST_END = 2, 
}

