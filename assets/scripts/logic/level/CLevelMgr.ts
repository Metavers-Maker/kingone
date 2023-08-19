
/**
 * level manager use level ctrl / boss ctrl
*/

export class CLevelMgr {

    public static m_inst: CLevelMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CLevelMgr();
        }
        return this.m_inst;
    }

    //
    public m_chapter:number = 1;

    public m_level: number = 1;

    public init() {
        //
    }

    //
    public battleBoss() {
        
    }

}

