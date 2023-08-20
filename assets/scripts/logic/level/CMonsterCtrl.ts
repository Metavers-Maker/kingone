
import { _decorator, Component, Node } from "cc";
import { CResMgr } from "../ResMgr";
import { CBatUnit } from "../battle/CBatUnit";

/**
 * level manager use level ctrl / boss ctrl
*/

export class CMonsterCtrl {

    public init() {
        //load level data from tbl
    }

    public start(monsterData: any) {

    }

    //发送普通的怪物
    public emit(monsterPrefab: string) {
        let nor_node = CResMgr.inst().createNode(monsterPrefab);
        if (nor_node) {
            let t_batunit = nor_node.addComponent("CBatUnit") as CBatUnit;
            if (t_batunit) {
                t_batunit.create();
            }
        }
        return nor_node;
    }

    //
    public update(dt: number) {
        //
    }

}

