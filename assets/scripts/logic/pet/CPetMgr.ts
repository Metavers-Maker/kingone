
/**
 * hero mgr use manager hero
*/

export class CPetMgr {

    public static m_inst: CPetMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CPetMgr();
        }
        return this.m_inst;
    }

    public init() {
        //access tbl init all pet info
    }



}

