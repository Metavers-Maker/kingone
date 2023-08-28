import { _decorator, Component, Node, Prefab, instantiate, Vec3, Animation } from "cc";
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
    }

    protected onDestroy(): void {
        //
        let ani = this.node.getComponent(Animation);
        if (ani) {
            ani.off(Animation.EventType.FINISHED, this.aniCallback, this);
        }
    }

    public aniCallback() {
        //
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
