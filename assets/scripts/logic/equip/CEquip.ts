import { Prefab } from "cc";
import { EquipType } from "../../base/CDef";


export class CEquip {
    public m_name: string = "default";
    public m_unlock: boolean = false;
    public m_qulity: EquipType = EquipType.E_EQUIP_BASE;
    public m_res: Prefab | null = null;
}

