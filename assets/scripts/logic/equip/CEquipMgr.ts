
/**
 * equip mgr use manager equip
*/

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
    }



}

