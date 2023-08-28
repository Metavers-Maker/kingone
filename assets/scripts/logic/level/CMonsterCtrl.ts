
import { _decorator, Component, Node } from "cc";
import { CResMgr } from "../ResMgr";
import { CBatUnit } from "../battle/CBatUnit";
import { CBatWar } from "../battle/CBatWar";
import { CBatMonsterMove } from "../battle/batmonster/CBatMonsterMove";

/**
 * level manager use level ctrl / boss ctrl
*/

export class CMonsterCtrl {

    public m_monsterNodes: Map<string, Node> = new Map();

    public m_min_num: number = 4;

    public m_max_num: number = 6;

    public init() {
        //load level data from tbl
    }

    public start(monsterData: any, _chapter: number, _level: number, _step: number) {
        this.emit("prefab/monster/golem1", _chapter, _level, _step);
    }

    //选择一个最近的怪物
    public selectOneMonster(_atk_range: number, _srcx: number): Node | null {
        let t_target: Node | null = null;
        let t_last_dis = 100000000;
        this.m_monsterNodes.forEach((target) => {
            if (target && target.isValid) {
                let t_dis = Math.abs(target.position.x - _srcx);
                if (t_dis < t_last_dis) {
                    t_last_dis = t_dis;
                    t_target = target;
                }
            }
        });
        return t_target;
    }

    public delMonster(uuid: string) {
        this.m_monsterNodes.delete(uuid);
        console.log("delMonster", uuid);
    }

    //
    public clearMonster() {
        this.m_monsterNodes.forEach((target: Node) => {
            target.removeFromParent();
            target.destroy();
        });
        this.m_monsterNodes.clear();
    }

    //发送普通的怪物
    public emit(monsterPrefab: string, _chapter: number, _level: number, _step: number) {
        //
        this.clearMonster();
        let t_emit_num = this.m_min_num + Math.floor(Math.random() * (this.m_max_num - this.m_min_num));
        for (let i = 0; i < t_emit_num; i++) {
            let nor_node = CResMgr.inst().createNode(monsterPrefab);
            if (nor_node) {
                let t_batunit = nor_node.addComponent("CBatUnit") as CBatUnit;
                if (t_batunit) {
                    t_batunit.createByCLS(_chapter, _level, _step);
                    t_batunit.m_atk_range = 50;
                }
                //
                let t_batmove = nor_node.addComponent("CBatMonsterMove") as CBatMonsterMove;
                if (t_batmove) {
                    t_batmove.create(t_batunit ? t_batunit.m_atk_range : 50);
                }
                //
                this.m_monsterNodes.set(nor_node.uuid, nor_node);
                CBatWar._self?.node.emit("MSG_MONSTER_BIRTH", nor_node, i);
            }
            // console.log("CMonsterCtrl emit", nor_node, monsterPrefab, t_emit_num);
        }
    }

    //
    public update(dt: number) {
        //
    }

}

