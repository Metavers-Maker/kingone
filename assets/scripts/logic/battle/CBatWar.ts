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
        this.node.on("MSG_MONSTER_BIRTH", this.onMonsterBirth, this);
        this.node.on("MSG_BOSS_BIRTH", this.onBossBirth, this);
    }

    protected start(): void {
        console.log("CBatWar start");
    }

    protected onDestroy(): void {
        this.node.off("MSG_HERO_BIRTH", this.onHeroBirth, this);
        this.node.off("MSG_PET_BIRTH", this.onPetBirth, this);
        this.node.off("MSG_MONSTER_BIRTH", this.onMonsterBirth, this);
        this.node.off("MSG_BOSS_BIRTH", this.onBossBirth, this);
    }

    public onHeroBirth(target: Node) {
        if (target && target.isValid) {
            let t_slot_node = this.node.getChildByPath("slothero");
            if (t_slot_node) {
                // t_slot_node.addChild(target);
                target.setPosition(t_slot_node.position);
                this.node.addChild(target)
            }
        }
    }

    public onPetBirth(target: Node, index: number) {
        if (target && target.isValid) {
            let pet_pos = "slot" + index;
            let t_slot_node = this.node.getChildByPath(pet_pos);
            if (t_slot_node) {
                t_slot_node.addChild(target);
            }
        }
    }

    public onMonsterBirth(target: Node, index: number) {
        if (target && target.isValid) {
            let t_slot_node = this.node.getChildByPath("slotmonster");
            if (t_slot_node) {
                let t_rand_x = 200 + Math.random() * 50;
                let t_rand_y = Math.random() * 150 - 50;
                target.setPosition(t_slot_node.position.x + t_rand_x, t_slot_node.position.y + t_rand_y, t_slot_node.position.z)
                this.node.addChild(target)
            }
            // this.node.children.sort((a: Node, b: Node) => {
            //     return a.position.y < b.position.y ? 1 : -1;
            // });
            // this.node.children.forEach((item, index) => {
            //     console.log("child", index, item.position.y);
            //     item.setSiblingIndex(this.node.children.length + 1 - index);
            // });
        }
    }

    public onBossBirth(target: Node) {
        if (target && target.isValid) {
            let t_slot_node = this.node.getChildByPath("slot2");
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
