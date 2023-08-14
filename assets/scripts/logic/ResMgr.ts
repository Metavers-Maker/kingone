
export class ResMgr {

    public static m_inst: ResMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new ResMgr();
        }
        return this.m_inst;
    }

    public init() {
        //
    }

}

