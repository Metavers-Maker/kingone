
/**
 * skill mgr use manager skill
*/

import { TblServer } from "../TblServer";
import { CKillEnty } from "../entity/CKillEnty";


export class CSkillMgr {

    public static m_inst: CSkillMgr | null = null;

    public killsMap: Map<string, CKillEnty> = new Map();

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CSkillMgr();
        }
        return this.m_inst;
    }

    //通过技能表来初始化全部技能
    public init() {
        let json = TblServer.inst().tbldata.skill;
        for(let i =0; i< json.length;i++){
            let kill:CKillEnty = new CKillEnty();
            kill.parse(json[i]);
            console.log("CSkillMgr",kill);
            this.killsMap.set(kill.uid,kill);
        }
    }

    //激活技能(节点)
    public activeSkills: Map<string, CKillEnty> = new Map();

    //绑定技能
    public bindSkill(skill: CKillEnty) {
        this.activeSkills.set(skill.uid,skill);
    }

    public getKillsData(){
        return this.killsMap;
    }

}

