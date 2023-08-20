
import { _decorator, Component, Node } from "cc";
import { CResMgr } from "../ResMgr";
import { CBatUnit } from "../battle/CBatUnit";

/**
 * level manager use level ctrl / boss ctrl
*/

export class CBossCtrl {

    public init() {
        //load level data from tbl
    }

    public start(bossPrefab: string) {

    }

    //发送BOSS
    public emit(bossPrefab: string) {
        let boss_node = CResMgr.inst().createNode(bossPrefab);
        if (boss_node) {
            let t_batunit = boss_node.addComponent("CBatUnit") as CBatUnit;
            if (t_batunit) {
                t_batunit.create();
            }
        }
        return boss_node;
    }


    //
    public update(dt: number) {
        //
    }

}

