import { Prefab } from "cc";
import { EquipQuality, EquipType } from "../../base/CDef";


export class CEquipRate {

    public m_uid: string = "41000000";

    public m_level: number = 0;

    public m_rate_equips: Map<EquipQuality, number> = new Map();

    public m_cost_coin: number = 0;

    public m_cost_time: number = 0;


    parseFromTbl(tblData: any) {
        this.m_uid = tblData.id;
        this.m_level = Number(tblData.level);
        this.m_cost_coin = Number(tblData.cost);
        this.m_cost_coin = Number(tblData.time);
        this.m_rate_equips.set(EquipQuality.E_QUIP_QUA_S1, Number(tblData.s1));
        this.m_rate_equips.set(EquipQuality.E_QUIP_QUA_S2, Number(tblData.s2));
        this.m_rate_equips.set(EquipQuality.E_QUIP_QUA_S3, Number(tblData.s3));
        this.m_rate_equips.set(EquipQuality.E_QUIP_QUA_S4, Number(tblData.s4));
        this.m_rate_equips.set(EquipQuality.E_QUIP_QUA_S5, Number(tblData.s5));
        this.m_rate_equips.set(EquipQuality.E_QUIP_QUA_S6, Number(tblData.s6));
        this.m_rate_equips.set(EquipQuality.E_QUIP_QUA_S7, Number(tblData.s7));
        this.m_rate_equips.set(EquipQuality.E_QUIP_QUA_S8, Number(tblData.s8));
        this.m_rate_equips.set(EquipQuality.E_QUIP_QUA_S9, Number(tblData.s9));
    }

    parseFromLocal(localData: any) {

    }

    saveToLocal() {

    }
}

