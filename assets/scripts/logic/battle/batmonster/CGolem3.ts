import { _decorator, Component, Node, Prefab, instantiate, Vec3, Animation } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CGolem3")
export class CGolem3 extends Component {

    protected onLoad(): void {

    }

    protected start(): void {
        this.showWalk();
    }

    protected onDestroy(): void {

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


    update() {
        // const wpos = this.target.worldPosition;
        // // @ts-ignore
        // if (!this.camera!._camera || this._lastWPos.equals(wpos)) {
        //     return;
        // }

        // this._lastWPos.set(wpos);
        // const camera = this.camera!;
        // // [HACK]
        // // @ts-ignore
        // camera._camera.update();
        // camera.convertToUINode(wpos, this.node.parent!, this._pos);
        // this.node.setPosition(this._pos);
        // // @ts-ignore
        // Vec3.transformMat4(this._pos, this.target.worldPosition, camera._camera!.matView);

        // const ratio = this.distance / Math.abs(this._pos.z);

        // const value = Math.floor(ratio * 100) / 100;
        // this.node.setScale(value, value, 1);
    }
}
