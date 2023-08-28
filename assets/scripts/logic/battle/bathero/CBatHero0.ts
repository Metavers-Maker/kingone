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

    protected onLoad(): void {
        //
        this.anim = this.node.getComponent(Animation)!;
        console.log("CBatHero0 onLoad", this.anim);
        
    }

    protected start(): void {
        //
        this.anim.play('fallen1_die');
    }

    protected onDestroy(): void {

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
        if (t_target) {
            this.attack(dt);
        }
    }

    protected attack(dt: number) {
        this.m_acc_time += dt;
        if (this.m_acc_time > this.m_fire_dert) {
            this.m_acc_time = 0;
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
            }
            CBatWar._self?.node.addChild(bulletNode);
        }
    }
}
