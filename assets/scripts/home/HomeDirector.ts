
import { _decorator, Component, Node, ScrollView, UITransform, Vec3 } from 'cc';
const { ccclass, property, type } = _decorator;

@ccclass('HomeDirector')
export class HomeDirector extends Component {

    public static _self: HomeDirector | null = null;

    protected onLoad(): void {
        //
        HomeDirector._self = this;
        //
    }

    start() {
        // this.scroll.on(Node.EventType.SIZE_CHANGED, this.sizeChanged, this);
    }

    protected onDestroy(): void {
        //
    }


    update(deltaTime: number) {
        // [4]
    }
}

