
/**
 * hero mgr use manager hero
*/

import { _decorator, Component, Node } from "cc";
import { CResMgr } from "../ResMgr";
import { CBatUnit } from "../battle/CBatUnit";
import { CHero } from "./CHero";

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

    public m_cur_hero: Node | null = null;

    public battleStart(msgNode: Node) {
        // this.m_msg_node = msgNode;
    }

    public battleEnd() {
        // this.m_msg_node = msgNode;
    }

    //发射英雄
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

