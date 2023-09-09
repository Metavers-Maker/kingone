
/**
 * equip mgr use manager equip
*/

import { EquipQuality } from "../../base/CDef";
import { TblServer } from "../TblServer";
import { CEquip } from "./CEquip";
import { CEquipRate } from "./CEquipRate";

export class CEquipMgr {

    public static m_inst: CEquipMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CEquipMgr();
        }
        return this.m_inst;
    }

    public init() {
        //access tbl init all equip info
        TblServer.inst().tbldata.equip.forEach((item: any) => {
            let t_equip = new CEquip();
            t_equip.parseFromTbl(item);
            this.m_tbl_equips.push(t_equip);
        });
    }

    public m_tbl_equips: CEquip[] = [];

    public m_cur_equips: CEquip[] = [];

    public m_cur_equip_rate: string = '0';

    public m_tbl_rate_equips: CEquipRate[] = [];

    //
    public refreshDrawEquipRate() {

    }

    public drawEquip() {

    }



}

