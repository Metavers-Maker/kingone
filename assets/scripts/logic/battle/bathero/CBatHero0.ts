import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera } from "cc";
import { CResMgr } from "../../ResMgr";
import { CBatWar } from "../CBatWar";
import { CBatBullet } from "../bullet/CBatBullet";
import { BatBulletMode } from "../../../base/CDef";
const { ccclass, property } = _decorator;

@ccclass("CBatHero0")
export class CBatHero0 extends Component {


    public m_acc_time: number = 0;

    public m_fire_dert: number = 1;

    protected onLoad(): void {

    }

    protected start(): void {

    }

    protected onDestroy(): void {

    }

    protected update(dt: number): void {
        //
        this.attack(dt);
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
                bullet.init(BatBulletMode.E_BULLET_MODE_DIR, warPos);
                // bullet.m_dir.set(1.0, 0.0, 0.0);
            }
            CBatWar._self?.node.addChild(bulletNode);
        }
    }
}
