import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera, UITransform } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CBatWar")
export class CBatWar extends Component {

    public static _self: CBatWar | null = null;

    protected onLoad(): void {
        console.log("CBatWar onLoad");
        CBatWar._self = this;
        this.node.on("MSG_HERO_BIRTH", this.onHeroBirth, this);
        this.node.on("MSG_PET_BIRTH", this.onPetBirth, this);
    }

    protected start(): void {
        console.log("CBatWar start");
    }

    protected onDestroy(): void {
        this.node.off("MSG_HERO_BIRTH", this.onHeroBirth, this);
        this.node.off("MSG_PET_BIRTH", this.onPetBirth, this);
    }

    public onHeroBirth(target: Node) {
        if (target && target.isValid) {
            let t_slot_node = this.node.getChildByPath("slot0");
            if (t_slot_node) {
                t_slot_node.addChild(target);
            }
        }
    }

    public onPetBirth(target: Node) {
        if (target && target.isValid) {
            let t_slot_node = this.node.getChildByPath("slot1");
            if (t_slot_node) {
                t_slot_node.addChild(target);
            }
        }
    }

    public getWarPos(wpos: Vec3, out: Vec3) {
        let trans = this.node.getComponent(UITransform);
        if (trans) {
            trans.convertToNodeSpaceAR(wpos, out);
        }
    }

    protected update(dt: number): void {
    }
}
