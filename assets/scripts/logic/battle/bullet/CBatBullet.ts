import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera } from "cc";
import { BatBulletMode } from "../../../base/CDef";
const { ccclass, property } = _decorator;

@ccclass("CBatBullet")
export class CBatBullet extends Component {

    public m_bullet_mode: BatBulletMode = BatBulletMode.E_BULLET_MODE_DIR;

    public m_src: Node | null = null;

    public m_target: Node | null = null;

    public m_dir: Vec3 = new Vec3(1.0, 0.0, 0.0);

    public m_speed: number = 200;

    public m_cur_pos: Vec3 = new Vec3(1.0, 0.0, 0.0);

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

    protected update(dt: number): void {
        //bullet fly dis
        let t_dis = this.m_speed * dt;
        if (this.m_bullet_mode === BatBulletMode.E_BULLET_MODE_DIR) {
            //
        } else if (this.m_bullet_mode === BatBulletMode.E_BULLET_MODE_TARGET) {
            if (this.m_target && this.m_target.isValid) {
                let t_target_pos = this.m_target.getPosition();
                let t_real_dis = Vec3.distance(this.m_cur_pos, t_target_pos);
                if (t_dis >= t_real_dis) {
                    //collider or cross
                    t_dis = t_real_dis;
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
            this.node.removeFromParent();
            this.node.destroy();
        }
    }
}
