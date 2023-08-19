
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

    //big level
    public m_chapter: number = 1;

    //small level
    public m_level: number = 1;

    //game progress (if m_progress equal = 5 is boss battle)
    public m_progress: number = 1;

    public init() {
        //load level data from tbl
    }

    //
    public battleBoss() {

    }

    //
    public battleProgress() {

    }

}

