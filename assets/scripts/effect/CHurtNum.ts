import { _decorator, Component, Node, Animation, AnimationState, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CHurtNum')
export class CHurtNum extends Component {

    public hurtNum: number = 0;

    create(hurt: number) {
        this.hurtNum = hurt;
    }

    start() {
        let ani = this.node.getComponent(Animation);
        if (ani) {
            ani.on(Animation.EventType.FINISHED, this.aniCallback, this);
        }
        //
        let l = this.node.getComponent("cc.Label") as Label;
        if (l) {
            l.string = this.hurtNum + '';
        }
    }

    protected onDestroy(): void {
        let ani = this.node.getComponent(Animation);
        if (ani) {
            ani.off(Animation.EventType.FINISHED, this.aniCallback, this);
        }
    }

    public aniCallback(aniType: Animation.EventType, st: AnimationState) {
        console.log("aniType", aniType, st);
        if (aniType === Animation.EventType.FINISHED) {
            this.node.removeFromParent();
            this.node.destroy();
        }
    }

    update(dt: number) {

    }

}

