
/**
 * skill mgr use manager skill
*/

import { TblServer } from "../TblServer";
import { CKill } from "../entity/CKill";

export class CSkillMgr {

    public static m_inst: CSkillMgr | null = null;

    public killsMap: Map<number, CKill> = new Map();

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CSkillMgr();
        }
        return this.m_inst;
    }

    //通过技能表来初始化全部技能
    public init() {
        let json = TblServer.inst().tbldata.kill;
        for(let i =0; i< json.length;i++){
            let kill:CKill = json[i] as CKill;
            this.killsMap.set(i,kill);
        }
    }

    //激活技能(节点)
    public activeSkills: Map<number, Node> = new Map();

    //绑定技能
    public bindSkill(index: number, skillNode: Node) {

    }

    public getKillsData(){
        return this.killsMap;
    }

}

