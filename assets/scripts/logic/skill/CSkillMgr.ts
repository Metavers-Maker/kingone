
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

    //通过技能表来初始化全部技能
    public init() {
        //
    }

    //激活技能(节点)
    public activeSkills: Map<number, Node> = new Map();

    //绑定技能
    public bindSkill(index: number, skillNode: Node) {

    }

}

