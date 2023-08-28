import { _decorator, Component, Node, Prefab, instantiate, Vec3, Animation, AnimationState } from "cc";
import { CBatWar } from "../CBatWar";
const { ccclass, property } = _decorator;

@ccclass("CGolem1")
export class CGolem1 extends Component {

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
        //
        CBatWar._self?.node.on("MSG_ENT_HURT", this.onHurt, this);
    }

    protected onDestroy(): void {
        //
        let ani = this.node.getComponent(Animation);
        if (ani) {
            ani.off(Animation.EventType.FINISHED, this.aniCallback, this);
        }
        CBatWar._self?.node.off("MSG_ENT_HURT", this.onHurt, this);
    }

    public aniCallback(aniType: Animation.EventType, st: AnimationState) {
        console.log("aniType", aniType, st);
        if (aniType === Animation.EventType.FINISHED) {
            if (st.name.includes("hurt")) {
                this.showWalk();
            }
        }
    }

    public onHurt(target: Node) {
        if (target && target.isValid && target.uuid === this.node.uuid) {
            this.showHurt();
        }
    }

    public showWalk() {
        let ani = this.node.getComponent("cc.Animation") as Animation;
        if (ani) {
            ani.play("golem1_walk");
        }
    }

    public showIdle() {
        let ani = this.node.getComponent("cc.Animation") as Animation;
        if (ani) {
            ani.play("golem1_idel");
        }
    }

    public showHurt() {
        let ani = this.node.getComponent("cc.Animation") as Animation;
        if (ani) {
            ani.play("golem1_hurt");
        }
    }

    public showAttack() {
        let ani = this.node.getComponent("cc.Animation") as Animation;
        if (ani) {
            ani.play("golem1_atk");
        }
    }

    public showDie() {
        let ani = this.node.getComponent("cc.Animation") as Animation;
        if (ani) {
            ani.play("golem1_die");
        }
    }

    protected update(dt: number): void {
        //
    }

}
