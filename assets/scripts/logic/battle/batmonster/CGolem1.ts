import { _decorator, Component, Node, Prefab, instantiate, Vec3, Animation, AnimationState } from "cc";
import { CBatWar } from "../CBatWar";
import { CKingInst } from "../../CKingInst";
const { ccclass, property } = _decorator;

@ccclass("CGolem1")
export class CGolem1 extends Component {

    public isDead: boolean = false;

    protected onLoad(): void {

    }

    protected start(): void {
        //
        let ani = this.node.getComponent(Animation);
        if (ani) {
            ani.on(Animation.EventType.FINISHED, this.aniCallback, this);
        }
        //
        this.showWalk();
        CBatWar._self?.node.on("MSG_ENT_HURT", this.onHurt, this);
        CBatWar._self?.node.on("MSG_ENT_DEAD", this.onDead, this);
    }

    protected onDestroy(): void {
        //
        let ani = this.node.getComponent(Animation);
        if (ani) {
            ani.off(Animation.EventType.FINISHED, this.aniCallback, this);
        }
        CBatWar._self?.node.off("MSG_ENT_HURT", this.onHurt, this);
        CBatWar._self?.node.off("MSG_ENT_DEAD", this.onDead, this);
    }

    public aniCallback(aniType: Animation.EventType, st: AnimationState) {
        if (aniType === Animation.EventType.FINISHED) {
            if (st.name === "golem1_hurt") {
                this.showWalk();
            } else if (st.name === "golem1_die") {
                this.node.removeFromParent();
                this.node.destroy();
            }
            // console.log("aniType", aniType, st, this.node);
        }
    }

    public onHurt(target: Node) {
        if (target && target.isValid && target.uuid === this.node.uuid) {
            this.showHurt();
        }
    }

    public onDead(target: Node) {
        if (target && target.isValid && target.uuid === this.node.uuid) {
            this.showDie();
        }
    }

    public showWalk() {
        if (this.isDead) {
            return;
        }
        let ani = this.node.getComponent("cc.Animation") as Animation;
        if (ani) {
            ani.crossFade("golem1_walk");
        }
    }

    public showIdle() {
        let ani = this.node.getComponent("cc.Animation") as Animation;
        if (ani) {
            ani.play("golem1_idle");
        }
    }

    public showHurt() {
        let ani = this.node.getComponent("cc.Animation") as Animation;
        if (ani) {
            ani.crossFade("golem1_hurt");
        }
    }

    public showAttack() {
        let ani = this.node.getComponent("cc.Animation") as Animation;
        if (ani) {
            ani.play("golem1_atk");
        }
    }

    public showDie() {
        this.isDead = true;
        let ani = this.node.getComponent("cc.Animation") as Animation;
        if (ani) {
            let st = ani.getState("golem1_die");
            if (st) {
                st.play();
                // ani.crossFade("golem1_die");
                console.log("monster show die", ani);
            }
        }

        let t_user = CKingInst.inst().m_user;
        if (t_user) {
            t_user.m_gold += 50;
        }
    }

    protected update(dt: number): void {
        //
    }

}
