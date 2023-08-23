
import { _decorator, Component, Node } from "cc";
import { CResMgr } from "../ResMgr";
import { CBatUnit } from "../battle/CBatUnit";
import { CBatWar } from "../battle/CBatWar";
import { CBatMonsterMove } from "../battle/batmonster/CBatMonsterMove";

/**
 * level manager use level ctrl / boss ctrl
*/

export class CMonsterCtrl {

    public m_monsterNods: Node[] = [];

    public m_min_num: number = 4;

    public m_max_num: number = 6;

    public init() {
        //load level data from tbl
    }

    public start(monsterData: any) {
        this.emit("prefab/monster/golem1");
    }

    //选择一个最近的怪物
    public selectOneMonster(_atk_range: number, _srcx: number): Node | null {
        let t_target: Node | null = null;
        let t_last_dis = 100000000;
        for (let i = 0; i < this.m_monsterNods.length; i++) {
            let t_dis = Math.abs(this.m_monsterNods[i].position.x - _srcx);
            if (t_dis < t_last_dis) {
                t_last_dis = t_dis;
                t_target = this.m_monsterNods[i];
            }
        }
        return t_target;
    }

    //
    public clearMonster() {
        for (let i = 0; i < this.m_monsterNods.length; i++) {
            this.m_monsterNods[i].removeFromParent();
            this.m_monsterNods[i].destroy();
        }
        this.m_monsterNods = [];
    }

    //发送普通的怪物
    public emit(monsterPrefab: string) {
        //
        this.clearMonster();
        //
        let t_emit_num = this.m_min_num + Math.floor(Math.random() * (this.m_max_num - this.m_min_num));
        for (let i = 0; i < t_emit_num; i++) {
            let nor_node = CResMgr.inst().createNode(monsterPrefab);
            if (nor_node) {
                let t_batunit = nor_node.addComponent("CBatUnit") as CBatUnit;
                if (t_batunit) {
                    t_batunit.create();
                }
                //
                let t_batmove = nor_node.addComponent("CBatMonsterMove") as CBatMonsterMove;
                if (t_batmove) {
                    // t_batunit.create();
                }
                //
                this.m_monsterNods.push(nor_node);
                CBatWar._self?.node.emit("MSG_MONSTER_BIRTH", nor_node, i);
            }
            console.log("CMonsterCtrl emit", nor_node, monsterPrefab, t_emit_num);
        }
    }

    //
    public update(dt: number) {
        //
    }

}

