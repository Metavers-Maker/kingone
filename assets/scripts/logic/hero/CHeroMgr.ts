
/**
 * hero mgr use manager hero
*/

import { CResMgr } from "../ResMgr";
import { CBatUnit } from "../battle/CBatUnit";

export class CHeroMgr {

    public static m_inst: CHeroMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CHeroMgr();
        }
        return this.m_inst;
    }

    public init() {
        //access tbl init all hero info
    }

    //发射宠物
    public emitHero() {
        let hero_resurl = "";
        let hero_node = CResMgr.inst().createNode(hero_resurl);
        if (hero_node) {
            let t_batunit = hero_node.addComponent("CBatUnit") as CBatUnit;
            if (t_batunit) {
                t_batunit.create();
            }
        }
        return hero_node;
    }



}

