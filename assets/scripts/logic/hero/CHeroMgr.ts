
/**
 * hero mgr use manager hero
*/

import { _decorator, Component, Node } from "cc";
import { CResMgr } from "../ResMgr";
import { CBatUnit } from "../battle/CBatUnit";
import { CHero } from "./CHero";
import { CBatWar } from "../battle/CBatWar";

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

    public m_msg_node: Node | null = null;
    public m_cur_hero: Node | null = null;

    public battleStart(msgNode: Node) {
        this.m_msg_node = msgNode;
        this.m_cur_hero = this.emitHero("prefab/hero/fallen1");
        if (this.m_cur_hero) {
            // Bat
        }
        console.log("CHeroMgr battleStart", this.m_cur_hero);
    }

    public battleEnd() {
        // this.m_msg_node = msgNode;
        if (this.m_cur_hero) {
            this.m_cur_hero.removeFromParent();
            this.m_cur_hero.destroy();
            this.m_cur_hero = null;
        }
        this.m_msg_node = null;
    }

    //发射英雄
    public emitHero(prefabstr: string) {
        //last hero remove
        if (this.m_cur_hero) {
            this.m_cur_hero.removeFromParent();
            this.m_cur_hero.destroy();
            this.m_cur_hero = null;
        }
        //
        let hero_resurl = prefabstr
        let hero_node = CResMgr.inst().createNode(hero_resurl);
        if (hero_node) {
            let t_batunit = hero_node.addComponent("CBatUnit") as CBatUnit;
            if (t_batunit) {
                t_batunit.create();
            }
            //
            CBatWar._self?.node.emit("MSG_HERO_BIRTH", hero_node);
        }
        return hero_node;
    }

    //!class end

}

