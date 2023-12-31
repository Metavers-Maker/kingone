
import { _decorator, Component, Node } from "cc";
import { CResMgr } from "../ResMgr";
import { CBatUnit } from "../battle/CBatUnit";
import { CBossCtrl } from "./CBossCtrl";
import { CMonsterCtrl } from "./CMonsterCtrl";
import { BatMonsterCtrlState } from "../../base/CDef";

/**
 * level manager use level ctrl / boss ctrl
*/

export class CLevelMgr {

    public static m_inst: CLevelMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CLevelMgr();
        }
        return this.m_inst;
    }

    public m_boss_ctrl: CBossCtrl = new CBossCtrl();

    public m_monster_ctrl: CMonsterCtrl = new CMonsterCtrl();

    //big level
    public m_chapter: number = 1;

    //small level
    public m_level: number = 1;

    //game step (if step equal = 5 is boss battle)
    public m_step: number = 1;

    public init() {
        //load level data from tbl
    }

    public m_msg_node: Node | null = null;

    public battleStart(msgNode: Node) {
        this.m_msg_node = msgNode;
    }

    public battleEnd() {
        this.m_msg_node = null;
    }

    //发兵
    public emitMonster() {
        if (this.m_step >= 5) {
            //发射BOSS
            this.m_boss_ctrl.start("Prefab/boss/boss0");
        } else {
            //发射怪物
            this.m_monster_ctrl.start(null, this.m_chapter, this.m_level, this.m_step);
        }
        console.log("CLevelMgr emitMonster");
    }

    //通关
    public pass() {
        //
        console.log("CLevelMgr pass");
        if (this.m_step === 5) {
            //进度完成
            if (this.m_level === 10) {
                //章节增加
                this.m_chapter += 1;
                this.m_level = 1;
                this.m_step = 1;
            } else {
                //小节提升
                this.m_level += 1;
                this.m_step = 1;
            }
        } else {
            this.m_step = 1;
        }
        //发送战斗间歇动画
        if (this.m_msg_node) {
            this.m_msg_node.emit("MSG_BAT_RUN");
        }
        //动画结束后继续发射怪物
        this.emitMonster()
    }

    //
    public update(dt: number) {

        //怪物控制
        if (this.m_monster_ctrl.m_state === BatMonsterCtrlState.E_BAT_MONSTER_ST_WAIT) {
            this.emitMonster();
        } else if (this.m_monster_ctrl.m_state === BatMonsterCtrlState.E_BAT_MONSTER_ST_END) {
            this.pass();
        }
        //
        this.m_boss_ctrl.update(dt);
        this.m_monster_ctrl.update(dt);
    }

}

