import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera, Animation, log } from "cc";
import { CResMgr } from "../../ResMgr";
import { CBatWar } from "../CBatWar";
import { CBatBullet } from "../bullet/CBatBullet";
import { BatBulletMode } from "../../../base/CDef";
import { CBatUnit } from "../CBatUnit";
import { CLevelMgr } from "../../level/CLevelMgr";
const { ccclass, property } = _decorator;

@ccclass("CBatHero0")
export class CBatHero0 extends Component {

    private anim: Animation = null!;

    public m_acc_time: number = 0;

    public m_fire_dert: number = 1;

    public m_atk_target: Node | null = null;

    public m_bulletNodes: Map<string, Node> = new Map();

    protected onLoad(): void {
        this.anim = this.node.getComponent(Animation)!;
        console.log("CBatHero0 onLoad", this.anim);
    }

    protected start(): void {
        this.anim.play('fallen1_atk');
        this.node.on("MSG_BULLET_DEAD", this.onBulletDead, this);
    }

    protected onDestroy(): void {
        this.node.off("MSG_BULLET_DEAD", this.onBulletDead, this);
    }

    protected onPropRefresh() {
        let t_batunit = this.node.getComponent("CBatUnit") as CBatUnit;
        if (t_batunit) {
            //
        }
    }

    protected canAtk() {
        let t_batunit = this.node.getComponent("CBatUnit") as CBatUnit;
        if (t_batunit) {
            let t_target = CLevelMgr.inst().m_monster_ctrl.selectOneMonster(t_batunit.m_atk_range, this.node.position.x);
            if (t_target) {
                this.m_atk_target = t_target;
                return true;
            }
        }
        return null;
    }

    protected update(dt: number): void {
        let t_target = this.canAtk();
        if (t_target && this.m_bulletNodes.size === 0) {
            this.fire();
        }
    }

    protected fire() {
        let bulletNode = CResMgr.inst().createNode("prefab/bullet/bullet0");
        if (bulletNode) {
            let bullet: CBatBullet = bulletNode.addComponent("CBatBullet") as CBatBullet;
            if (bullet) {
                let warPos = new Vec3();
                CBatWar._self?.getWarPos(this.node.getWorldPosition(), warPos);
                bullet.init(this.node, BatBulletMode.E_BULLET_MODE_TARGET, warPos, this.m_atk_target);
                let t_batunit = this.node.getComponent("CBatUnit") as CBatUnit;
                if (t_batunit) {
                    bullet.m_atk = t_batunit.m_atk;
                }
            }
            //
            CBatWar._self?.node.addChild(bulletNode);
            this.m_bulletNodes.set(bulletNode.uuid, bulletNode);
        }
    }

    onBulletDead(uuid: string) {
        this.m_bulletNodes.delete(uuid);
        console.log("onBulletDead", uuid);
    }
}
