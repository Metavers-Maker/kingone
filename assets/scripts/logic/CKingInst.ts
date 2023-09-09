
/**
 *  king inst
*/

import { CPlayer } from "./entity/CPlayer";
import { CUser } from "./entity/CUser";
import { CEquipMgr } from "./equip/CEquipMgr";
import { CSkillMgr } from "./skill/CSkillMgr";

export class CKingInst {

    public static m_inst: CKingInst | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CKingInst();
        }
        return this.m_inst;
    }

    public m_player: CPlayer = new CPlayer();

    public m_user: CUser = new CUser();

    public init() {
        //
        CEquipMgr.inst().init();
        CSkillMgr.inst().init();
        //
    }

}

