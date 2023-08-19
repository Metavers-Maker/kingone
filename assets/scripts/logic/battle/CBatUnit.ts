

/**
 * use for hero ,enemy, boss for base number
*/

export class CBatUnit {
    public m_atk: number = 0;
    public m_def: number = 0;
    public m_hp: number = 0;
    public m_crit_rate: number = 0;
    public m_crit_hurt: number = 0;
    public m_hp_cur: number = 0;
    public m_link_id: string = "0";

    public decHp(hurt: number) {
        this.m_hp_cur = this.m_hp_cur - hurt;
        if (this.m_hp_cur <= 0) {
            //死亡
            //
            return true;
        }
        return false;
    }
}


