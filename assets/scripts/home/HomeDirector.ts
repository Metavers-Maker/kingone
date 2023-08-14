
import { _decorator, Component, Node, ScrollView, UITransform, Vec3 } from 'cc';
const { ccclass, property, type } = _decorator;

@ccclass('HomeDirector')
export class HomeDirector extends Component {

    protected onLoad(): void {
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

