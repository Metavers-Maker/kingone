import { _decorator, Component, Node, Animation, AnimationState, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CHurtNum')
export class CHurtNum extends Component {

    public hurtNum: number = 0;

    create(hurt: number) {
        this.hurtNum = hurt;
        console.log("CHurtNum create", hurt);
    }

    start() {
        let ani = this.node.getChildByName("aa")?.getComponent(Animation);
        if (ani) {
            ani.on(Animation.EventType.FINISHED, this.aniCallback, this);
        }
    }

    protected onDestroy(): void {
        let ani = this.node.getChildByName("aa")?.getComponent(Animation);
        if (ani) {
            ani.off(Animation.EventType.FINISHED, this.aniCallback, this);
        }
    }

    public aniCallback(aniType: Animation.EventType, st: AnimationState) {
        // console.log("aniType", aniType, st);
        if (aniType === Animation.EventType.FINISHED) {
            this.node.removeFromParent();
            this.node.destroy();
        }
    }

    update(dt: number) {
        let l = this.node.getChildByName("aa")?.getComponent("cc.Label") as Label;
        if (l) {
            l.string = this.hurtNum + 'a';
        }
    }

}

