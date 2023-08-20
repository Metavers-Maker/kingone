
/**
 * pet mgr use manager pet
*/

import { _decorator, Component, Node } from "cc";
import { CResMgr } from "../ResMgr";
import { CBatUnit } from "../battle/CBatUnit";
import { CPet } from "./CPet";

export class CPetMgr {

    public static m_inst: CPetMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CPetMgr();
        }
        return this.m_inst;
    }

    public init() {
        //access tbl init all pet info
    }

    public m_cur_pet: CPet | null = null;

    public battleStart(msgNode: Node) {
        // this.m_msg_node = msgNode;
    }

    public battleEnd() {
        // this.m_msg_node = msgNode;
    }

    //发射宠物
    public emitPet() {
        let pet_resurl = "";
        let pet_node = CResMgr.inst().createNode(pet_resurl);
        if (pet_node) {
            let t_batunit = pet_node.addComponent("CBatUnit") as CBatUnit;
            if (t_batunit) {
                t_batunit.create();
            }
        }
        return pet_node;
    }



}

