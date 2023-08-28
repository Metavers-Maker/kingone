import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera } from "cc";
import { BatBulletMode } from "../../../base/CDef";
import { CBatUnit } from "../CBatUnit";
import { CBatWar } from "../CBatWar";
const { ccclass, property } = _decorator;

//normal bullet

@ccclass("CBatBullet")
export class CBatBullet extends Component {

    public m_bullet_mode: BatBulletMode = BatBulletMode.E_BULLET_MODE_DIR;

    public m_src: Node | null = null;

    public m_target: Node | null = null;

    public m_dir: Vec3 = new Vec3(1.0, 0.0, 0.0);

    public m_speed: number = 200;

    public m_cur_pos: Vec3 = new Vec3(1.0, 0.0, 0.0);

    public m_atk: number = 10;

    public init(_src: Node, _mode: BatBulletMode, startPos: Vec3, _target: Node | null = null) {
        this.m_src = _src;
        this.m_bullet_mode = _mode;
        this.m_cur_pos = startPos;
        this.m_target = _target;
    }

    protected onLoad(): void {

    }

    protected start(): void {
        this.node.setPosition(this.m_cur_pos);
    }

    protected onDestroy(): void {
        // console.log("CBatBullet destroy", this.node.uuid);
    }

    protected onDead() {
        if (this.m_src) {
            this.m_src.emit("MSG_BULLET_DEAD", this.node.uuid);
        }
        this.node.removeFromParent();
        this.node.destroy();
    }

    protected update(dt: number): void {
        if (this.m_src && this.m_src.isValid === false) {
            //子弹发射放不存在，则死亡
            this.onDead();
            return;
        }
        //bullet fly dis
        let t_dis = this.m_speed * dt;
        if (this.m_bullet_mode === BatBulletMode.E_BULLET_MODE_DIR) {
            //
        } else if (this.m_bullet_mode === BatBulletMode.E_BULLET_MODE_TARGET) {
            if (this.m_target && this.m_target.isValid) {
                let t_target_pos = this.m_target.getPosition();
                let t_real_dis = Vec3.distance(this.m_cur_pos, t_target_pos);
                if (t_dis >= t_real_dis) {
                    t_dis = t_real_dis;
                    this.onHit();
                }
                //计算方向
                Vec3.subtract(this.m_dir, t_target_pos, this.m_cur_pos);
                this.m_dir.normalize();
            }
        }
        //
        this.m_cur_pos.x = this.m_cur_pos.x + this.m_dir.x * t_dis;
        this.m_cur_pos.y = this.m_cur_pos.y + this.m_dir.y * t_dis;
        this.node.setPosition(this.m_cur_pos);
        // console.log("bullet pos", this.m_cur_pos, t_dis, this.m_dir);
        //
        this.isOutRange();
    }

    protected isOutRange() {
        if (Math.abs(this.m_cur_pos.x) > 540 || Math.abs(this.m_cur_pos.y) > 960) {
            this.onDead();
        }
    }

    protected onHit() {
        //子弹移除
        //扣血(敌我双方都存在)
        if (this.m_target && this.m_target.isValid && this.m_src && this.m_src.isValid) {
            let src_batunit = this.m_target.getComponent("CBatUnit") as CBatUnit;
            if (src_batunit) {
                this.m_atk = src_batunit.m_atk;
            }
            let target_batunit = this.m_target.getComponent("CBatUnit") as CBatUnit;
            if (target_batunit) {
                target_batunit.onHit(this.m_atk);
                CBatWar._self?.node.emit("MSG_ENT_HURT", this.m_target);
            }
        }
        //
        this.onDead();
    }
}
