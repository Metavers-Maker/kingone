
/**
 * hero mgr use manager hero
*/

export class CHeroMgr {

    public static m_inst: CHeroMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CHeroMgr();
        }
        return this.m_inst;
    }

    public init() {
        //
    }



}

