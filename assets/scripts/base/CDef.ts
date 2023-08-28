

/**
 * use for hero ,enemy, boss for base number
*/

export enum HeroQuality {
    E_HERO_QUA_BASE = 0,
    E_HERO_QUA_A = 1,
    E_HERO_QUA_S = 2,
    E_HERO_QUA_SS = 3,
}

export enum EquipType {
    E_EQUIP_BASE = 0,
    E_EQUIP_ATK = 1,
    E_EQUIP_DEF = 2,
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

