
/**
 * skill mgr use manager skill
*/

export class CSkillMgr {

    public static m_inst: CSkillMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CSkillMgr();
        }
        return this.m_inst;
    }

    public init() {
        //
    }

    

}

