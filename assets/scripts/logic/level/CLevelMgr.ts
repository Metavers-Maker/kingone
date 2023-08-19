
import { _decorator, Component, Node } from "cc";

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

    //big level
    public m_chapter: number = 1;

    //small level
    public m_level: number = 1;

    //game progress (if m_progress equal = 5 is boss battle)
    public m_progress: number = 1;

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
        if (this.m_progress >= 5) {
            this.emitBoss();
        } else {
            this.emitNormal();
        }
    }

    //发送BOSS
    public emitBoss() {

    }

    //发送普通的怪物
    public emitNormal() {

    }

    //通关
    public pass() {
        //
        if (this.m_progress === 5) {
            //进度完成
            if (this.m_level === 10) {
                //章节增加
                this.m_chapter += 1;
                this.m_level = 1;
                this.m_progress = 1;
            } else {
                //小节提升
                this.m_level += 1;
                this.m_progress = 1;
            }
        } else {
            this.m_progress = 1;
        }
        //发送战斗间歇动画
        if (this.m_msg_node) {
            this.m_msg_node.emit("MSG_BAT_RUN");
        }
    }

}

