import { Prefab } from "cc";
import { EquipQuality, EquipType } from "../../base/CDef";


export class CEquip {
    public m_name: string = "default";
    public m_unlock: boolean = false;
    public m_res: Prefab | null = null;
    // prop
    public m_atk: number = 0;
    public m_def: number = 0;
    public m_hp: number = 0;
    public m_atk_sp: number = 0;
    //
    public m_level: number = 1;
    public m_qulity: EquipQuality = EquipQuality.E_QUIP_QUA_S0;
    public m_type: EquipType = EquipType.E_EQUIP_BASE;


    parseFromTbl(tblData: any) {

    }

    parseFromLocal(localData: any) {

    }

    saveToLocal() {

    }
}

