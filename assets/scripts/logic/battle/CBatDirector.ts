import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera, Label } from "cc";
import { BatStatus } from "../../base/CDef";
import { CLevelMgr } from "../level/CLevelMgr";
import { CHeroMgr } from "../hero/CHeroMgr";
import { CPetMgr } from "../pet/CPetMgr";
import { CKingInst } from "../CKingInst";
const { ccclass, property } = _decorator;

@ccclass("CBatDirector")
export class CBatDirector extends Component {

    public static _self: CBatDirector | null = null;

    public m_bat_status: BatStatus = BatStatus.E_BAT_RUN;

    public m_acc_time: number = 0;

    //战斗间隔时间
    public m_bat_run_time: number = 2.0;

    protected onLoad(): void {
        console.log("CBatDirector onLoad");
        CBatDirector._self = this;
    }

    protected start(): void {
        console.log("CBatDirector start");
        //创建英雄
        CHeroMgr.inst().battleStart(this.node);
        //创建宠物
        CPetMgr.inst().battleStart(this.node);
        //开始关卡运行逻辑
        CLevelMgr.inst().battleStart(this.node);
    }

    protected onDestroy(): void {
        CLevelMgr.inst().battleEnd();
    }

    protected update(dt: number): void {
        if (this.m_bat_status === BatStatus.E_BAT_RUN) {
            //战斗过场动画
            this.m_acc_time += dt;
            if (this.m_acc_time > this.m_bat_run_time) {
                this.m_acc_time = 0;
                this.m_bat_status = BatStatus.E_BAT_NOR;
                //发射怪物
                CLevelMgr.inst().update(dt);
            }
        } else if (this.m_bat_status === BatStatus.E_BAT_NOR) {
            // 战斗中
            CLevelMgr.inst().update(dt);
        }
        //
        this.refreshUI();
    }

    protected refreshUI() {
        //
        let t_user = CKingInst.inst().m_user;
        let coinLabel = this.node.getChildByPath("coinbar/num");
        if (coinLabel) {
            let label = coinLabel.getComponent("cc.Label") as Label;
            if (label && t_user) {
                label.string = t_user.m_gold + "";
            }
        }
    }
}
