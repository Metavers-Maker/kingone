import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CBatWar")
export class CBatWar extends Component {

    public static _self: CBatWar | null = null;

    protected onLoad(): void {
        CBatWar._self = this;
    }

    protected start(): void {
    }

    protected onDestroy(): void {
    }

    protected update(dt: number): void {
    }
}
