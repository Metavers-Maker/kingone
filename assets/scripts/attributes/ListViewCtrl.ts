import { _decorator, Component, Node, ScrollView, Label, Button, Vec3, UITransform, instantiate, error, Vec2 } from "cc";
import { CPlayer } from "../logic/entity/CPlayer";
import { HomeDirector } from "../home/HomeDirector";
const { ccclass, property, menu } = _decorator;

const _temp_vec3 = new Vec3();

@ccclass("AttibuteswCtrl")
@menu('UI/AttibuteswCtrl')
export class AttibuteswCtrl extends Component {
    onLoad() {

    }

    // 初始化 item
    initialize() {}

    update(dt: number) {}

    onclickItem(event:any,param:any){
        HomeDirector._self?.node.emit("ADD_ATTRIBUTE_LEVEL",param);
    }
}

